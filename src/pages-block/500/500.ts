import Block from '../../services/block'
import page500 from './500.tmpl'

export default class Page500 extends Block {
  constructor(props: object) {
    super('div', props, 'content-500', true);
  }

  render(): DocumentFragment {
    return this.compile(page500, this.props);
  }

  show(): void {
    this.getContent().style.display = 'flex';
  }
}
