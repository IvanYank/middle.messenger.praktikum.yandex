import Block from '../../services/block'
import customLink from './custom-link.tmpl'

export default class CustomLink extends Block {
  constructor(props: object) {
    super('button', props, '', false);
  }

  render(): DocumentFragment {
    return this.compile(customLink, this.props);
  }
}
