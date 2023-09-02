import Block from '../../services/block'
import reg from './registration.tmpl'

export default class RegistrationPage extends Block {
  constructor(props: object) {
    super('form', props, 'form-reg', true);
  }

  render(): DocumentFragment {
    return this.compile(reg, this.props);
  }
}
