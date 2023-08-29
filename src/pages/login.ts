import Button from '../components/button/button';
import Input from '../components/input/input';
import { login, password } from '../utils/regular-expressions';
import { inputVal } from '../utils/validation';
import Router from '../services/router';
import LoginController from '../controllers/login-controller';

const inputLogin = new Input({
  label: 'Логин',
  type: 'text',
  id: 'login',
  name: 'login',
  events: {
    blur: {
      element: 'input',
      event: (e: Event) => { inputVal(login, e) }
    },
  }
})

const inputPass = new Input({
  label: 'Пароль',
  type: 'password',
  id: 'password',
  name: 'password',
  events: {
    blur: {
      element: 'input',
      event: (e: Event) => { inputVal(password, e) }
    },
  }
})

const inputs: Input[] = [inputLogin, inputPass];

const buttonAuth = new Button({
  text: 'Авторизоваться',
  attributes: {
    class: 'form__button_1',
    link: '/messenger',
    type: 'submit',
  }
})

const buttonEnter = new Button({
  text: 'Нет аккаунта?',
  attributes: {
    class: 'form__button_2',
    link: '/sign-up',
    type: 'button',
  },
  events: {
    click: {
      element: '',
      event: () => {
        Router.go('/sign-up')
      }
    }
  }
})

const loginInitData = {
  title: 'Вход',
  login: inputLogin,
  password: inputPass,
  enter: buttonAuth,
  registration: buttonEnter,
  attributes: {
    action: '#',
    method: '#',
  },
  events: {
    submit: {
      element: '',
      event: (e: Event) => {
        e.preventDefault();
        LoginController.signIn(inputs)
      },
    }
  }
};

export default loginInitData
