import Input from '../../components/input/input';
import ButtonLink from '../../components/button_link/button_link';
import multiRender from '../../utils/multi-render';
import { email, login, nameText, phone, password } from '../../utils/regular-expressions';

document.addEventListener('DOMContentLoaded', ()=>{
  const emailInput = new Input({
    label: 'Почта',
    type: 'email',
    id: 'email',
    name: 'email',
    attributes:{
      class: 'form__item',
    },
    events: {
      blur: {
        element:'input',
        event: (e: Event)=>{
          const target = e.target as HTMLInputElement;
          const errorElem = target.parentElement?.querySelector('.form__error'); 
          
          if(!email.test(target.value)){
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

  const loginInput = new Input({
    label: 'Логин',
    type: 'text',
    id: 'login',
    name: 'login',
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

  const nameInput = new Input({
    label: 'Имя',
    type: 'text',
    id: 'first_name',
    name: 'first_name',
    attributes:{
      class: 'form__item',
    },
    events: {
      blur: {
        element:'input',
        event: (e: Event)=>{
          const target = e.target as HTMLInputElement;
          const errorElem = target.parentElement?.querySelector('.form__error'); 

          if(!nameText.test(target.value)){
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

  const surnameInput = new Input({
    label: 'Фамилия',
    type: 'text',
    id: 'second_name',
    name: 'second_name',
    attributes:{
      class: 'form__item',
    },
    events: {
      blur: {
        element:'input',
        event: (e: Event)=>{
          const target = e.target as HTMLInputElement;
          const errorElem = target.parentElement?.querySelector('.form__error'); 
          
          if(!nameText.test(target.value)){
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

  const telInput = new Input({
    label: 'Телефон',
    type: 'text',
    id: 'phone',
    name: 'phone',
    attributes:{
      class: 'form__item',
    },
    events: {
      blur: {
        element:'input',
        event: (e: Event)=>{
          const target = e.target as HTMLInputElement;
          const errorElem = target.parentElement?.querySelector('.form__error'); 
          
          if(!phone.test(target.value)){
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

  const passwordInput = new Input({
    label: 'Пароль',
    type: 'password',
    id: 'password',
    name: 'password',
    attributes:{
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

  const passwordRepeatInput = new Input({
    label: 'Пароль (ещё раз)',
    type: 'password',
    id: 'password_sec',
    name: 'password_sec',
    attributes:{
      class: 'form__item',
    },
    events: {
      blur: {
        element: 'input',
        event: (e: Event)=>{
          const target = e.target as HTMLInputElement;
          const errorElem = target.parentElement?.querySelector('.form__error');
          const passwordInput = document.querySelector('input[name="password"]') as HTMLInputElement;
          
          if(passwordInput.value != target.value){
            target.classList.add('form__input_error');
            errorElem?.classList.add('form__error_active');
          } else {
            target.classList.remove('form__input_error');
            errorElem?.classList.remove('form__error_active');
          }
        }
      }
    },
  })

  const inputs: Input[] = [emailInput, loginInput, nameInput, surnameInput, telInput, passwordInput, passwordRepeatInput];

  const buttonRegistration = new ButtonLink({
    text: 'Зарегистрироваться',
    attributes: {
      class: 'form__button form__button_1',
      href: '/src/pages/chats/index.html',
    },
    events: {
      click: {
        element: '',
        event: (e: Event)=>{
          e.preventDefault();
          const passes: boolean[] = [];
          const info: Record<string, string> = {};

          inputs.forEach((block)=>{
            const input = block.getContent().querySelector('input') as HTMLInputElement;
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
    text: 'Войти',
    attributes: {
      class: 'form__button form__button_2',
      href: '/',
    }
  })

  const buttons: ButtonLink[] = [buttonRegistration, buttonEnter];

  const obj = {
    '.form__inputs': inputs,
    '.form__lower': buttons,
  };

  multiRender(obj);
});
