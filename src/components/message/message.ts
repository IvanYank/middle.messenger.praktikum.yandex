import Block from '../../services/block'
import message from './message.tmpl'

export default class MessageBlock extends Block {
  constructor(props: object) {
    super('li', props, 'message', true);
  }

  render(): DocumentFragment {
    return this.compile(message, this.props);
  }
}
