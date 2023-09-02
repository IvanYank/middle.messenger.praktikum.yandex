import RegistrationController from '../controllers/registration-controller';
import Input from '../components/input/input';
import Button from '../components/button/button';
import { inputVal, passRepeatVal } from '../utils/validation';
import { email, login, nameText, phone, password } from '../utils/regular-expressions';
import Router from '../services/router';

const emailInput = new Input({
  label: 'Почта',
  type: 'email',
  id: 'email',
  name: 'email',
  events: {
    blur: {
      element: 'input',
      event: (e: Event) => { inputVal(email, e) }
    },
  }
})

const loginInput = new Input({
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

const nameInput = new Input({
  label: 'Имя',
  type: 'text',
  id: 'first_name',
  name: 'first_name',
  events: {
    blur: {
      element: 'input',
      event: (e: Event) => { inputVal(nameText, e) }
    },
  }
})

const surnameInput = new Input({
  label: 'Фамилия',
  type: 'text',
  id: 'second_name',
  name: 'second_name',
  events: {
    blur: {
      element: 'input',
      event: (e: Event) => { inputVal(nameText, e) }
    },
  }
})

const phoneInput = new Input({
  label: 'Телефон',
  type: 'text',
  id: 'phone',
  name: 'phone',
  events: {
    blur: {
      element: 'input',
      event: (e: Event) => { inputVal(phone, e) }
    },
  }
})

const passwordInput = new Input({
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

const passwordRepeatInput = new Input({
  label: 'Пароль (ещё раз)',
  type: 'password',
  id: 'password_sec',
  name: 'password_sec',
  events: {
    blur: {
      element: 'input',
      event: (e: Event) => { passRepeatVal(e) }
    }
  },
})

const inputs: Input[] = [emailInput, loginInput, nameInput, surnameInput, phoneInput, passwordInput, passwordRepeatInput];

const registrationButton = new Button({
  text: 'Зарегистрироваться',
  attributes: {
    class: 'form__button_1',
    link: '/messenger',
    type: 'submit',
  }
})

const enterButton = new Button({
  text: 'Войти',
  attributes: {
    class: 'form__button_2',
    link: '/',
    type: 'button',
  },
  events: {
    click: {
      element: '',
      event: () => { Router.go('/') }
    }
  }
})

const registrationInitData = {
  title: 'Регистрация',
  email: emailInput,
  login: loginInput,
  name: nameInput,
  surname: surnameInput,
  phone: phoneInput,
  password: passwordInput,
  passwordRepeat: passwordRepeatInput,
  registration: registrationButton,
  enter: enterButton,
  attributes: {
    action: '#',
    method: '#',
  },
  events: {
    submit: {
      element: '',
      event: (e: Event) => {
        e.preventDefault();
        RegistrationController.signUp(inputs);
      },
    }
  }
};

export default registrationInitData
