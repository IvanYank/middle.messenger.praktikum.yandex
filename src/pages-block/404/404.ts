import Block from '../../services/block'
import page404 from './404.tmpl'

export default class Page404 extends Block {
  constructor(props: object) {
    super('div', props, 'content-404', true);
  }

  render(): DocumentFragment {
    return this.compile(page404, this.props);
  }

  show(): void {
    this.getContent().style.display = 'flex';
  }
}
