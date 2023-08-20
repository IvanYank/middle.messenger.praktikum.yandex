import Block from '../../services/block'
import input from './input.tmpl'

export default class Input extends Block {
  constructor(props: object) {
    super('div', props, 'form__item', true)
  }

  render(): DocumentFragment {
    return this.compile(input, this.props);
  }
}
