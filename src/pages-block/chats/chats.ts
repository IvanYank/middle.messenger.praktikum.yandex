import Block from '../../services/block'
import chats from './chats.tmpl'

export default class ChatsPage extends Block {
  constructor(props: object) {
    super('div', props, 'chats', true)
  }

  render(): DocumentFragment {
    return this.compile(chats, this.props);
  }

  show(): void {
    this.getContent().style.display = 'flex';
  }
}
