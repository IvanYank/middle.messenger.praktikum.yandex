import Block from '../../services/block'
import profile from './profile.tmpl'

export default class ProfilePage extends Block {
  constructor(props: object) {
    super('div', props, 'profile', true)
  }

  render(): DocumentFragment {
    return this.compile(profile, this.props);
  }

  show(): void {
    this.getContent().style.display = 'flex';
  }
}
