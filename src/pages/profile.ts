import Data from '../components/data/data';
import DataInput from '../components/data-input/data-input';
import CustomLink from '../components/custom-link/custom-link';
import ProfilePage from '../pages-block/profile/profile';
import { dataVal, dataRepeatVal } from '../utils/validation';
import { email, login, nameText, phone, password } from '../utils/regular-expressions';
import Router from '../services/router';

const router = new Router('.app');
const avatar = new URL('../../../static/images/Union.png', import.meta.url).href;

const emailData: Data = new Data({
  value: 'pochta@yandex.ru',
  label: 'Почта',
})

const loginData: Data = new Data({
  value: 'ivanivanov',
  label: 'Логин',
})

const nameData: Data = new Data({
  value: 'Иван',
  label: 'Имя',
})

const surnameData: Data = new Data({
  value: 'Иванов',
  label: 'Фамилия',
})

const nicknameData: Data = new Data({
  value: 'Иван',
  label: 'Имя в чате',
})

const phoneData: Data = new Data({
  value: '+7 (909) 967 30 30',
  label: 'Телефон',
})



const emailInput: DataInput = new DataInput({
  label: "Почта",
  placeholder: "pochta@yandex.ru",
  id: "email",
  name: "email",
  type: "email",
  events: {
    blur: {
      element: 'input',
      event: (e: Event) => { dataVal(email, e) }
    },
  }
})

const loginInput: DataInput = new DataInput({
  label: "Логин",
  placeholder: "ivanivanov",
  id: "login",
  name: "login",
  type: "text",
  events: {
    blur: {
      element: 'input',
      event: (e: Event) => { dataVal(login, e) }
    },
  }
})

const nameInput: DataInput = new DataInput({
  label: "Имя",
  placeholder: "Иван",
  id: "first_name",
  name: "first_name",
  type: "text",
  events: {
    blur: {
      element: 'input',
      event: (e: Event) => { dataVal(nameText, e) }
    },
  }
})

const surnameInput: DataInput = new DataInput({
  label: "Фамилия",
  placeholder: "Иванов",
  id: "second_name",
  name: "second_name",
  type: "text",
  events: {
    blur: {
      element: 'input',
      event: (e: Event) => { dataVal(nameText, e) }
    },
  }
})

const nicknameInput: DataInput = new DataInput({
  label: "Имя в чате",
  placeholder: "Иван",
  id: "display_name",
  name: "display_name",
  type: "text",
  events: {
    blur: {
      element: 'input',
      event: (e: Event) => { dataVal(nameText, e) }
    },
  }
})

const phoneInput: DataInput = new DataInput({
  label: "Телефон",
  placeholder: "+7 (909) 967 30 30",
  id: "phone",
  name: "phone",
  type: "text",
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
  events: {
    blur: {
      element: 'input',
      event: (e: Event) => { dataRepeatVal(e) }
    }
  }
})

// const data: Data[] = [emailData, loginData, nameData, surnameData, nicknameData, telData];
const dataInputs: DataInput[] = [emailInput, loginInput, nameInput, surnameInput, nicknameInput, phoneInput];
const passwordInputs: DataInput[] = [oldPassInput, newPassInput, repeatNewPassInput];

// const obj = {
//   '.profile__info': data,
//   '.profile__change-data-list': dataInputs,
//   '.profile__change-password-list': passwordInputs,
// };

const page = new ProfilePage({
  'name-title': 'Иван',
  'profile-image': avatar,
  'email': emailData,
  'login': loginData,
  'name': nameData,
  'surname': surnameData,
  'nickname': nicknameData,
  'phone': phoneData,
  'email-input': emailInput,
  'login-input': loginInput,
  'name-input': nameInput,
  'surname-input': surnameInput,
  'nickname-input': nicknameInput,
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
          // router.go('/messenger');
          router.back();
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
        event: () => {
          router.go('/');
        }
      }
    }
  }),
})

const profileStatic = page.getContent().querySelector('.profile__static-data') as HTMLElement;

const changeAvatar = page.getContent().querySelector('.profile__avatar') as HTMLElement;
const changeData = page.getContent().querySelector('.profile__change-data-button') as HTMLElement;
const changePassword = page.getContent().querySelector('.profile__change-password-button') as HTMLElement;

const changeAvatarWrap = page.getContent().querySelector('.profile__change-avatar-wrapper') as HTMLElement;
const changeDataForm = page.getContent().querySelector('.profile__change-data') as HTMLElement;
const changePasswordForm = page.getContent().querySelector('.profile__change-password') as HTMLElement;

const changeAvatarSubmit = page.getContent().querySelector('.change-avatar__submit') as HTMLElement;
const changeDataSubmit = page.getContent().querySelector('.profile__change-data-submit') as HTMLElement;
const changePasswordSubmit = page.getContent().querySelector('.profile__change-password-submit') as HTMLElement;

changeAvatar.addEventListener('click', () => {
  changeAvatarWrap.style.display = 'block';
})

changeAvatarWrap.addEventListener('click', (e) => {
  const target = e.target as HTMLElement;
  if (target.classList.contains('profile__change-avatar-wrapper')) {
    changeAvatarWrap.style.display = 'none';
  }
})

changeAvatarSubmit.addEventListener('click', () => {
  changeAvatarWrap.style.display = 'none';
})

changeData.addEventListener('click', () => {
  changeDataForm.style.display = 'flex';
  profileStatic.style.display = 'none';
})

changeDataSubmit.addEventListener('click', () => {
  const passes: boolean[] = [];
  const info: Record<string, string> = {};

  dataInputs.forEach((block) => {
    const input = block.getContent().querySelector('input') as HTMLInputElement;
    const name = input.getAttribute('name') as string;
    const error: HTMLElement | null = block.getContent().querySelector('p');

    input?.dispatchEvent(new Event('blur'))
    error?.classList.contains('data-input__error_active') ? passes.push(false) : passes.push(true);

    info[name] = input.value;
  })

  if (!passes.includes(false)) {
    console.log(info);

    changeDataForm.style.display = 'none';
    profileStatic.style.display = 'flex';
  }
})

changePassword.addEventListener('click', () => {
  changePasswordForm.style.display = 'flex';
  profileStatic.style.display = 'none';
})

changePasswordSubmit.addEventListener('click', () => {
  const passes: boolean[] = [];
  const info: Record<string, string> = {};

  passwordInputs.forEach((block) => {
    const input = block.getContent().querySelector('input') as HTMLInputElement;
    const name = input.getAttribute('name') as string;
    const error: HTMLElement | null = block.getContent().querySelector('p');

    input?.dispatchEvent(new Event('blur'))
    error?.classList.contains('data-input__error_active') ? passes.push(false) : passes.push(true);

    info[name] = input.value;
  })

  if (!passes.includes(false)) {
    console.log(info);

    changePasswordForm.style.display = 'none';
    profileStatic.style.display = 'flex';
  }
})

export default page
