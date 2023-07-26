import ButtonLink from './src/components/button_link/button_link';
import Input from './src/components/input/input'
import multiRender from './src/utils/multi-render';
import { login, password } from './src/utils/regular-expressions';

document.addEventListener('DOMContentLoaded', ()=>{
  const inputLogin = new Input({
    label:'Логин',
    type:'text',
    id:'login',
    name:'login',
    attributes:{
      class: 'form__item',
    },
    events: {
      blur: {
        element:'input',
        event: (e: Event)=>{
          const target = e.target as HTMLInputElement;
          const errorElem = target.parentElement?.querySelector('.form__error'); 
          
          if(!login.test(target.value)){
            target.classList.add('form__input_error');
            errorElem?.classList.add('form__error_active');
          } else {
            target.classList.remove('form__input_error');
            errorElem?.classList.remove('form__error_active');
          }
        }
      },
    }
  })

  const inputPass = new Input({
    label:'Пароль',
    type:'password',
    id:'password',
    name:'password',
    attributes: {
      class: 'form__item',
    },
    events: {
      blur: {
        element:'input',
        event: (e: Event)=>{
          const target = e.target as HTMLInputElement;
          const errorElem = target.parentElement?.querySelector('.form__error'); 
          
          if(!password.test(target.value)){
            target.classList.add('form__input_error');
            errorElem?.classList.add('form__error_active');
          } else {
            target.classList.remove('form__input_error');
            errorElem?.classList.remove('form__error_active');
          }
        }
      },
    }
  })

  const buttonAuth = new ButtonLink({
    text: 'Авторизоваться',
    attributes: {
      class: 'form__button form__button_1',
      href: 'src/pages/chats/index.html',
    },
    events: {
      click: {
        element: '',
        event: (e: Event)=>{
          e.preventDefault();
          const passes: boolean[] = [];
          const info: Record<string, string> = {};

          inputs.forEach((block)=>{
            const input: HTMLInputElement | null = block.getContent().querySelector('input') as HTMLInputElement;
            const name = input.getAttribute('name') as string;
            const error: HTMLElement | null = block.getContent().querySelector('p');

            input?.dispatchEvent(new Event('blur'))
            error?.classList.contains('form__error_active') ? passes.push(false) : passes.push(true);

            info[name] = input.value;
          })

          if(!passes.includes(false)){
            console.log(info);

            setTimeout(()=>{
              document.location.href = '/src/pages/chats/index.html';
            }, 5000)
          }
        },
      }
    }
  })

  const buttonEnter = new ButtonLink({
    text: 'Нет аккаунта?',
    attributes: {
      class: 'form__button form__button_2',
      href: 'src/pages/registration/index.html',
    }
  })

  const inputs: Input[] = [inputLogin, inputPass];
  const buttons: ButtonLink[] = [buttonAuth, buttonEnter];

  const obj = {
    '.form__upper': inputs,
    '.form__lower': buttons,
  };

  multiRender(obj);
});
