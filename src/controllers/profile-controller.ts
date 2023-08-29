import UserAPI from "../api/user-api";
import Input from "../components/input/input";
import ProfilePage from "../pages-block/profile/profile";
import Router from "../services/router";
import store, { StoreEvents } from "../services/store";
import deleteCookie from "../utils/deleteCookie";

class ProfileController {
  static changeProfileAvatar(block: HTMLElement) {
    const form = block.querySelector('.profile__change-avatar') as HTMLFormElement;
    const formData = new FormData(form);

    UserAPI.changeAvatar(formData).then((response) => {
      store.set('user', response, StoreEvents.UpdatedProfile)
    }).catch((err) => {
      console.error(err)
    })

    block.style.display = 'none';
  }

  static changeProfileData(context: ProfilePage) {
    const profileStatic = context.getContent().querySelector('.profile__static-data') as HTMLElement;
    const changeDataForm = context.getContent().querySelector('.profile__change-data') as HTMLElement;

    const passes: boolean[] = [];
    const info: Record<string, string> = {};

    const dataInputs = Object.values(context.children).filter((item) => {
      const child = item as Input;
      return child.getContent().classList.contains('data-input') && child.getContent().classList.contains('info')
    })

    dataInputs.forEach((item) => {
      const block = item as Input;
      const input = block.getContent().querySelector('input') as HTMLInputElement;
      const name = input.getAttribute('name') as string;
      const error: HTMLElement | null = block.getContent().querySelector('p');

      input?.dispatchEvent(new Event('blur'))
      error?.classList.contains('data-input__error_active') ? passes.push(false) : passes.push(true);

      info[name] = input.value;
    })

    if (!passes.includes(false)) {
      UserAPI.changeData(info).then((response) => {
        store.set('user', response, StoreEvents.UpdatedProfile);
        changeDataForm.style.display = 'none';
        profileStatic.style.display = 'flex';
      }).catch((err) => {
        console.error(err)
      });
    }
  }

  static changeProfilePass(context: ProfilePage) {
    const profileStatic = context.getContent().querySelector('.profile__static-data') as HTMLElement;
    const changePasswordForm = context.getContent().querySelector('.profile__change-password') as HTMLElement;

    const passes: boolean[] = [];
    const info: Record<string, string> = {};

    const passwordInputs = Object.values(context.children).filter((item) => {
      const child = item as Input;
      return child.getContent().classList.contains('data-input') && child.getContent().classList.contains('pass')
    })

    passwordInputs.forEach((item) => {
      const block = item as Input;
      const input = block.getContent().querySelector('input') as HTMLInputElement;
      const name = input.getAttribute('name') as string;
      const error: HTMLElement | null = block.getContent().querySelector('p');

      input?.dispatchEvent(new Event('blur'))
      error?.classList.contains('data-input__error_active') ? passes.push(false) : passes.push(true);

      info[name] = input.value;
    })

    if (!passes.includes(false)) {
      UserAPI.changePass(info).then(() => {
        changePasswordForm.style.display = 'none';
        profileStatic.style.display = 'flex';
      }).catch((err) => {
        console.error(err)
      })
    }
  }

  static logOut(){
    UserAPI.logOut().then(() => {
      deleteCookie('auth');
      Router.go('/');
    });
  }
}

export default ProfileController
