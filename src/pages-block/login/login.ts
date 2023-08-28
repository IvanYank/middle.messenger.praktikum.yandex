import Block from '../../services/block'
import login from './login.tmpl'

export default class LoginPage extends Block {
  constructor(props: object) {
    super('form', props, 'form-login', true);
  }

  render(): DocumentFragment {
    return this.compile(login, this.props);
  }
}
