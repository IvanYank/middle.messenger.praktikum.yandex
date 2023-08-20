import EventBus from './event-bus';
import Handlebars from 'handlebars';
import isEqual from '../utils/isEqual';
import merge from '../utils/merge';
import { v4 as makeUUID } from 'uuid';

class Block {
  private static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render'
  };

  _id = '';

  private _element!: HTMLElement;
  private _meta: {
    tagName: string;
    baseClass: string;
    wrapper: boolean;
  };
  private _eventBus: EventBus;
  /* eslint-disable */
  props: Record<string, any>;
  children: Record<string, Block>;
  /* eslint-enable */

  constructor(tagName: string = 'div', propsAndChildren: object, baseClass: string = '', wrapper: boolean = true) {
    this._eventBus = new EventBus();
    this._meta = {
      tagName: tagName,
      baseClass: baseClass,
      wrapper: wrapper,
    };

    this._id = makeUUID();

    const { children, props } = this._getChildren(propsAndChildren);

    this.children = children;
    this.props = this._makePropsProxy({ ...props, __id: this._id });

    this._registerEvents(this._eventBus);
    this._eventBus.emit(Block.EVENTS.INIT);
  }

  private _getChildren(propsAndChildren: object) {
    const children: Record<string, Block> = {};
    /* eslint-disable */
    const props: Record<string, any> = {};
    /* eslint-enable */

    Object.entries(propsAndChildren).forEach(([key, value]) => {
      if (value instanceof Block) {
        children[key] = value;
      } else {
        props[key] = value;
      }
    });

    return { children, props };
  }

  private _registerEvents(eventBus: EventBus): void {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
  }

  private _createResources(): void {
    const { tagName } = this._meta;
    this._element = this._createDocumentElement(tagName);
  }

  init(): void {
    this._createResources();
    this._setBaseClass();

    this._eventBus.emit(Block.EVENTS.FLOW_RENDER);
  }

  private _componentDidMount(): void {
    this.componentDidMount();

    Object.values(this.children).forEach(child => {
      child.dispatchComponentDidMount();
    });
  }

  componentDidMount() { }

  dispatchComponentDidMount(): void {
    this._eventBus.emit(Block.EVENTS.FLOW_CDM);
  }

  private _componentDidUpdate(oldProps: object, newProps: object): void {
    const response = this.componentDidUpdate(oldProps, newProps);

    if (!response) {
      this._removeEvents();
      this.props = merge(this.props, newProps)
      this._render();
    }
  }

  componentDidUpdate(oldProps: object, newProps: object): boolean {
    return isEqual(oldProps, newProps);
  }

  setProps(nextProps: object): void {
    if (nextProps) {
      this._componentDidUpdate(this.props, nextProps);
    }
  }

  private _render() {
    const { wrapper } = this._meta;
    const block = this.render();

    this._element.innerHTML = '';

    this._setAttribute();
    if (wrapper) {
      this._element.append(block);
    } else {
      this._element.innerText = this.props['text'];
    }

    this._addEvents();
  }

  render(): DocumentFragment | string {
    return new DocumentFragment();
  }

  getContent(): HTMLElement {
    return this._element;
  }

  private _makePropsProxy(props: object) {
    const propsList = new Proxy(props, {
      /* eslint-disable */
      get(target: Record<string, any>, prop: string) {
        /* eslint-enable */
        if (target[prop]) {
          const value = target[prop];
          return typeof value === 'function' ? value.bind(target) : value;
        } else {
          return '';
        }
      },
      /* eslint-disable */
      set(target: Record<string, any>, prop: string, value): boolean {
        /* eslint-enable */
        target[prop] = value;
        return true;
      }
    });

    return propsList;
  }

  private _setAttribute(): void {
    const attributes = this.props['attributes'];
    if (attributes) {
      Object.keys(attributes).forEach((key) => {
        if (key == 'class' && this._meta.baseClass != '') {
          this._element.setAttribute(key, `${this._meta.baseClass} ${attributes[key]}`);
        } else {
          this._element.setAttribute(key, attributes[key]);
        }
      });
    }
  }

  private _setBaseClass(): void {
    this._element.setAttribute('class', this._meta.baseClass);
  }

  private _createDocumentElement(tagName: string): HTMLElement {
    const element = document.createElement(tagName);
    element.setAttribute('data-id', this._id);
    return element;
  }

  private _addEvents(): void {
    const events = this.props['events'];

    Object.keys(events).forEach((eventName) => {
      if (events[eventName]['element'] === '') {
        this._element.addEventListener(eventName, events[eventName].event);
      } else {
        this._element.querySelector(events[eventName]['element']).addEventListener(eventName, events[eventName].event);
      }
    })
  }

  private _removeEvents(): void {
    const events = this.props['events'];

    Object.keys(events).forEach((eventName) => {
      if (events[eventName]['element'] === '') {
        this._element.removeEventListener(eventName, events[eventName].event);
      } else {
        this._element.querySelector(events[eventName]['element']).removeEventListener(eventName, events[eventName].event);
      }
    })
  }

  show(): void {
    this.getContent().style.display = 'block';
  }

  hide(): void {
    this.getContent().style.display = 'none';
  }

  compile(template: string, props: Record<string, any>) {
    const propsAndStubs = { ...props };

    Object.entries(this.children).forEach(([key, child]) => {
      propsAndStubs[key] = `<div data-id='${child._id}'></div>`
    });

    const fragment = this._createDocumentElement('template') as HTMLTemplateElement;

    fragment.innerHTML = Handlebars.compile(template)(propsAndStubs);

    Object.values(this.children).forEach(child => {
      const stub = fragment.content.querySelector(`[data-id='${child._id}']`);

      stub?.replaceWith(child.getContent());
    });

    return fragment.content;
  }
}

export default Block
