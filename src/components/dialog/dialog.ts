import Block from '../../services/block'
import dialog from './dialog.tmpl'

export default class Dialog extends Block {
  constructor(props: object) {
    super('button', props, 'dialog', true);
  }

  render(): DocumentFragment {
    return this.compile(dialog, this.props);
  }
}
