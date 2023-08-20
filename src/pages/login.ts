import Button from '../components/button/button';
import Input from '../components/input/input';
import LoginPage from '../pages-block/login/login';
import { login, password } from '../utils/regular-expressions';
import { inputVal } from '../utils/validation';
import Router from '../services/router';

const router = new Router('.app');

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

// const inputs: Input[] = [inputLogin, inputPass];

const buttonAuth = new Button({
  text: 'Авторизоваться',
  attributes: {
    class: 'form__button_1',
    link: '/messenger',
    type: 'button',
  },
  events: {
    click: {
      element: '',
      event: () => {
        router.go('/messenger');
      }
    }
  }
  // events: {
  //   click: {
  //     element: '',
  //     event: (e: Event) => {
  //       // e.preventDefault();
  //       // router.go('/messenger')
  //       // const passes: boolean[] = [];
  //       // const info: Record<string, string> = {};

  //       // inputs.forEach((block) => {
  //       //   const input: HTMLInputElement | null = block.getContent().querySelector('input') as HTMLInputElement;
  //       //   const name = input.getAttribute('name') as string;
  //       //   const error: HTMLElement | null = block.getContent().querySelector('p');

  //       //   input?.dispatchEvent(new Event('blur'))
  //       //   error?.classList.contains('form__error_active') ? passes.push(false) : passes.push(true);

  //       //   info[name] = input.value;
  //       // })

  //       // if (!passes.includes(false)) {
  //       //   console.log(info);

  //       //   setTimeout(() => {
  //       //     document.location.href = '/src/pages/chats/index.html';
  //       //   }, 5000)
  //       // }


  //     },
  //   }
  // }
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
        router.go('/sign-up')
      }
    }
  }
})

const page = new LoginPage({
  title: 'Вход',
  login: inputLogin,
  password: inputPass,
  enter: buttonAuth,
  registration: buttonEnter,
  attributes: {
    action: '',
    method: '#',
  },
});

export default page
