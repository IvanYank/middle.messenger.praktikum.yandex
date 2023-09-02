import DataInput from '../components/data-input/data-input';
import Data from '../components/data/data';
import CustomLink from '../components/custom-link/custom-link';
import { dataVal, dataRepeatVal } from '../utils/validation';
import { email, login, nameText, phone, password } from '../utils/regular-expressions';
import Router from '../services/router';
import ProfileController from '../controllers/profile-controller';

const emailData = new Data({
  label: 'Почта'
})

const loginData = new Data({
  label: 'Логин'
})

const firstNameData = new Data({
  label: 'Имя'
})

const secondNameData = new Data({
  label: 'Фамилия'
})

const dispayNameData = new Data({
  label: 'Имя в чате'
})

const phoneData = new Data({
  label: 'Телефон'
})

const emailInput: DataInput = new DataInput({
  label: "Почта",
  id: "email",
  name: "email",
  type: "email",
  attributes: {
    class: 'info',
  },
  events: {
    blur: {
      element: 'input',
      event: (e: Event) => { dataVal(email, e) }
    },
  }
})

const loginInput: DataInput = new DataInput({
  label: "Логин",
  id: "login",
  name: "login",
  type: "text",
  attributes: {
    class: 'info',
  },
  events: {
    blur: {
      element: 'input',
      event: (e: Event) => { dataVal(login, e) }
    },
  }
})

const nameInput: DataInput = new DataInput({
  label: "Имя",
  id: "first_name",
  name: "first_name",
  type: "text",
  attributes: {
    class: 'info',
  },
  events: {
    blur: {
      element: 'input',
      event: (e: Event) => { dataVal(nameText, e) }
    },
  }
})

const surnameInput: DataInput = new DataInput({
  label: "Фамилия",
  id: "second_name",
  name: "second_name",
  type: "text",
  attributes: {
    class: 'info',
  },
  events: {
    blur: {
      element: 'input',
      event: (e: Event) => { dataVal(nameText, e) }
    },
  }
})

const nicknameInput: DataInput = new DataInput({
  label: "Имя в чате",
  id: "display_name",
  name: "display_name",
  type: "text",
  attributes: {
    class: 'info',
  },
  events: {
    blur: {
      element: 'input',
      event: (e: Event) => { dataVal(nameText, e) }
    },
  }
})

const phoneInput: DataInput = new DataInput({
  label: "Телефон",
  id: "phone",
  name: "phone",
  type: "text",
  attributes: {
    class: 'info',
  },
  events: {
    blur: {
      element: 'input',
      event: (e: Event) => { dataVal(phone, e) }
    },
  }
})

const oldPassInput: DataInput = new DataInput({
  label: "Старый пароль",
  placeholder: "**********",
  id: "oldPassword",
  name: "oldPassword",
  type: "password",
  attributes: {
    class: 'pass',
  },
  events: {
    blur: {
      element: 'input',
      event: (e: Event) => { dataVal(password, e) }
    },
  }
})

const newPassInput: DataInput = new DataInput({
  label: "Новый пароль",
  placeholder: "**********",
  id: "newPassword",
  name: "newPassword",
  type: "password",
  attributes: {
    class: 'pass',
  },
  events: {
    blur: {
      element: 'input',
      event: (e: Event) => { dataVal(password, e) }
    },
  }
})

const repeatNewPassInput: DataInput = new DataInput({
  label: "Повторите новый пароль",
  placeholder: "**********",
  id: "newPasswordRepeat",
  name: "newPasswordRepeat",
  type: "password",
  attributes: {
    class: 'pass',
  },
  events: {
    blur: {
      element: 'input',
      event: (e: Event) => { dataRepeatVal(e) }
    }
  }
})

const profileInitData = {
  'email': emailData,
  'login': loginData,
  'first_name': firstNameData,
  'second_name': secondNameData,
  'display_name': dispayNameData,
  'phone': phoneData,
  'email-input': emailInput,
  'login-input': loginInput,
  'first_name-input': nameInput,
  'second_name-input': surnameInput,
  'display_name-input': nicknameInput,
  'phone-input': phoneInput,
  'oldPassword-input': oldPassInput,
  'newPassword-input': newPassInput,
  'repeatPassword-input': repeatNewPassInput,
  'customLink1': new CustomLink({
    text: '',
    attributes: {
      type: 'button',
      class: 'profile__back',
      link: 'back',
    },
    events: {
      click: {
        element: '',
        event: () => {
          Router.back();
        }
      }
    }
  }),
  'customLink2': new CustomLink({
    text: 'Выйти',
    attributes: {
      type: 'button',
      class: 'profile-button profile__exit',
      link: '/',
    },
    events: {
      click: {
        element: '',
        event: () => { ProfileController.logOut() }
      }
    }
  }),
}

export default profileInitData
