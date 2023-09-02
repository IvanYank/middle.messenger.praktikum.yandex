import Block from '../../services/block'
import data from './data.tmpl'

export default class Data extends Block {
  constructor(props: object) {
    super('div', props, 'data', true);
  }

  render(): DocumentFragment {
    return this.compile(data, this.props);
  }
}
