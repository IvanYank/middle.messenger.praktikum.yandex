import Block from '../../services/block'
import dataInput from './data-input.tmpl'

export default class DataInput extends Block {
  constructor(props: object) {
    super('div', props, 'data-input', true);
  }

  render(): DocumentFragment {
    return this.compile(dataInput, this.props);
  }
}
