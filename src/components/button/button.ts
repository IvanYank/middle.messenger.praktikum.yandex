import Block from '../../services/block'
import button from './button.tmpl'

export default class Button extends Block {
  constructor(props: object) {
    super('button', props, 'form__button', false)
  }

  render(): DocumentFragment {
    return this.compile(button, this.props);
  }
}
