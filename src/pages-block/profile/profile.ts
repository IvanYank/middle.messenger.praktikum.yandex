import Block from '../../services/block'
import profile from './profile.tmpl'
import store, { StoreEvents } from '../../services/store';
import isEqual from '../../utils/isEqual';
import { Indexed } from '../../services/types';
import ProfileController from '../../controllers/profile-controller';

const defaultAvatar = new URL('../../../static/icons/person.svg', import.meta.url).href;

export default class ProfilePage extends Block {
  constructor(props: object) {
    super('div', props, 'profile', true)
    store.on(StoreEvents.UpdatedProfile, () => {
      const newData = store.getState();
      newData['profile-image'] = newData.user.avatar ? `https://ya-praktikum.tech/api/v2/resources${newData.user.avatar}` : defaultAvatar;
      newData['name-title'] = newData.user.first_name;

      this.setProps(newData);
    });
  }

  render(): DocumentFragment {
    return this.compile(profile, this.props);
  }

  show(): void {
    this.getContent().style.display = 'flex';
  }

  componentDidUpdate(oldProps: Indexed, newProps: Indexed): boolean {
    if (!isEqual(oldProps, newProps)) {
      (this.children['email'] as Block).setProps({ value: newProps.user.email });
      (this.children['login'] as Block).setProps({ value: newProps.user.login });
      (this.children['first_name'] as Block).setProps({ value: newProps.user.first_name });
      (this.children['second_name'] as Block).setProps({ value: newProps.user.second_name });
      (this.children['display_name'] as Block).setProps({ value: newProps.user.display_name });
      (this.children['phone'] as Block).setProps({ value: newProps.user.phone });
      (this.children['email-input'] as Block).setProps({ placeholder: newProps.user.email });
      (this.children['login-input'] as Block).setProps({ placeholder: newProps.user.login });
      (this.children['first_name-input'] as Block).setProps({ placeholder: newProps.user.first_name });
      (this.children['second_name-input'] as Block).setProps({ placeholder: newProps.user.second_name });
      (this.children['display_name-input'] as Block).setProps({ placeholder: newProps.user.display_name });
      (this.children['phone-input'] as Block).setProps({ placeholder: newProps.user.phone });

      return true;
    }
    return false;
  }

  post(): void {
    let wrapperName: HTMLElement | null = null;

    const profileStatic = this.getContent().querySelector('.profile__static-data') as HTMLElement;
    const profileContent = this.getContent().querySelector('.profile__content') as HTMLElement;

    const changeAvatar = this.getContent().querySelector('.profile__avatar') as HTMLElement;
    const changeData = this.getContent().querySelector('.profile__change-data-button') as HTMLElement;
    const changePassword = this.getContent().querySelector('.profile__change-password-button') as HTMLElement;

    const changeAvatarWrap = this.getContent().querySelector('.profile__change-avatar-wrapper') as HTMLElement;
    const changeDataForm = this.getContent().querySelector('.profile__change-data') as HTMLElement;
    const changePasswordForm = this.getContent().querySelector('.profile__change-password') as HTMLElement;

    const changeAvatarSubmit = this.getContent().querySelector('.change-avatar__submit') as HTMLElement;
    const changeDataSubmit = this.getContent().querySelector('.profile__change-data-submit') as HTMLElement;
    const changePasswordSubmit = this.getContent().querySelector('.profile__change-password-submit') as HTMLElement;

    const showForm = (form: HTMLElement) => {
      form.style.display = 'flex';
      profileStatic.style.display = 'none';
      wrapperName = form;
    }

    changeAvatarWrap.addEventListener('click', (e: Event) => {
      if ((e.target as HTMLElement).classList.contains('profile__change-avatar-wrapper')) {
        changeAvatarWrap.style.display = 'none';
      }
    })

    changeAvatarSubmit.addEventListener('click', () => { ProfileController.changeProfileAvatar(changeAvatarWrap) })
    changePasswordSubmit.addEventListener('click', () => { ProfileController.changeProfilePass(this) })
    changeDataSubmit.addEventListener('click', () => { ProfileController.changeProfileData(this) })

    changeAvatar.addEventListener('click', () => { changeAvatarWrap.style.display = 'block' })
    changeData.addEventListener('click', () => { showForm(changeDataForm) })
    changePassword.addEventListener('click', () => { showForm(changePasswordForm) })

    profileContent.addEventListener('click', (e: Event) => {
      if ((e.target as HTMLElement).classList.contains('profile__content') && wrapperName != null) {
        wrapperName.style.display = 'none';
        profileStatic.style.display = 'flex';
        wrapperName = null;
      }
    })
  }
}
