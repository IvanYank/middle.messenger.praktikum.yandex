import EventBus from './event-bus';

class Block {
  private static EVENTS = {
    INIT: "init",
    FLOW_CDM: "flow:component-did-mount",
    FLOW_CDU: "flow:component-did-update",
    FLOW_RENDER: "flow:render"
  };

  private _element!: HTMLElement;
  private _meta: {
    tagName: string;
    wrapper: boolean;
  };
  private _eventBus: EventBus;
  props;

  constructor(tagName: string = "div", props = {}, wrapper: boolean = true) {
    this._eventBus = new EventBus();
    this._meta = {
      tagName: tagName,
      wrapper: wrapper,
    };

    this.props = this._makePropsProxy(props);

    this._registerEvents(this._eventBus);
    this._eventBus.emit(Block.EVENTS.INIT);
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

    this._eventBus.emit(Block.EVENTS.FLOW_RENDER);
  }

  private _componentDidMount(): void {
    this.componentDidMount();
  }

  componentDidMount() {}

  dispatchComponentDidMount(): void {
    this._eventBus.emit(Block.EVENTS.FLOW_CDM);
  }

  private _componentDidUpdate(oldProps: object, newProps: object): void {
    const response = this.componentDidUpdate(oldProps, newProps);

    if(response){
      this._removeEvets();
      Object.assign(this.props, newProps);
      this._render();
    }
  }

  componentDidUpdate(oldProps: object, newProps: object): boolean {
    if(oldProps === newProps){
      return false;
    }
    return true;
  }

  setProps(nextProps: object): void {
    if(nextProps){
      this._componentDidUpdate(this.props, nextProps);
    }
  }

  private _render() {
    const { wrapper } = this._meta;
    const block = this.render();

    this._setAttribute(this._element);
    if(wrapper){
      this._element.innerHTML = block;
    } else {
      this._element.innerText = this.props['text'];
    }

    this._addEvetns();
  }

  render(): string {
    return '<div></div>';
  }

  getContent(): HTMLElement {
    return this._element;
  }

  private _makePropsProxy(props: object) {
    const propsList = new Proxy(props, {
      /* eslint-disable */
      get(target: Record<string, any>, prop: string){
      /* eslint-enable */
        if(target[prop]){
          const value = target[prop];
          return typeof value === "function" ? value.bind(target) : value;
        } else {
          return '';
        }
      },
      set(target, prop: string, value): boolean{
        target[prop] = value;
        return true
      }
    });
    
    return propsList;
  }

  private _setAttribute(element: HTMLElement): void{
    const attributes = this.props['attributes'];
    if(attributes){
      Object.keys(attributes).forEach((key)=>{
        element.setAttribute(key, attributes[key])
      });
    }
  }

  private _createDocumentElement(tagName: string): HTMLElement{
    return document.createElement(tagName);
  }

  private _addEvetns(): void{
    const events = this.props['events'];

    Object.keys(events).forEach((eventName)=>{
      if(events[eventName]['element'] === ''){
        this._element.addEventListener(eventName, events[eventName].event);
      } else {
        this._element.querySelector(events[eventName]['element']).addEventListener(eventName, events[eventName].event);
      }
    })
  }

  private _removeEvets(): void{
    const events = this.props['events'];

    Object.keys(events).forEach((eventName)=>{
      if(events[eventName]['element'] === ''){
        this._element.removeEventListener(eventName, events[eventName].event);
      } else {
        this._element.querySelector(events[eventName]['element']).removeEventListener(eventName, events[eventName].event);
      }
    })
  }

  show(): void {
    this.getContent().style.display = "block";
  }

  hide(): void {
    this.getContent().style.display = "none";
  }
}

export default Block
