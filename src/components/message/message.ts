import Block from '../../services/block'
import message from './message.tmpl'

export default class Message extends Block {
  constructor(props: object) {
    super('div', props, 'message', true)
  }

  render(): DocumentFragment {
    return this.compile(message, this.props);
  }
}
