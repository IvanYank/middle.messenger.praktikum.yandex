import Data from '../../components/data/data';
import DataInput from '../../components/data-input/data-input';
import multiRender from '../../utils/multi-render';
import { email, login, nameText, phone, password } from '../../utils/regular-expressions';

document.addEventListener('DOMContentLoaded', ()=>{
  const profileStatic = document.querySelector('.profile__static-data') as HTMLElement;

  const changeAvatar = document.querySelector('.profile__avatar') as HTMLElement;
  const changeData = document.querySelector('.profile__change-data-button') as HTMLElement;
  const changePassword = document.querySelector('.profile__change-password-button') as HTMLElement;

  const changeAvatarWrap = document.querySelector('.profile__change-avatar-wrapper') as HTMLElement;
  const changeDataForm = document.querySelector('.profile__change-data') as HTMLElement;
  const changePasswordForm = document.querySelector('.profile__change-password') as HTMLElement;

  const changeAvatarSubmit = document.querySelector('.change-avatar__submit') as HTMLElement;
  const changeDataSubmit = document.querySelector('.profile__change-data-submit') as HTMLElement;
  const changePasswordSubmit = document.querySelector('.profile__change-password-submit') as HTMLElement;

  const emailData: Data = new Data({
    value:'pochta@yandex.ru',
    label:'Почта',
    attributes:{
      class: 'data',
    }
  })

  const loginData: Data = new Data({
    value:'ivanivanov',
    label:'Логин',
    attributes:{
      class: 'data',
    }
  })

  const nameData: Data = new Data({
    value:'Иван',
    label:'Имя',
    attributes:{
      class: 'data',
    }
  })

  const surnameData: Data = new Data({
    value:'Иванов',
    label:'Фамилия',
    attributes:{
      class: 'data',
    }
  })

  const nicknameData: Data = new Data({
    value:'Иван',
    label:'Имя в чате',
    attributes:{
      class: 'data',
    }
  })

  const telData: Data = new Data({
    value:'+7 (909) 967 30 30',
    label:'Телефон',
    attributes:{
      class: 'data',
    }
  })



  const emailInput: DataInput = new DataInput({
    label:"Почта",
    placeholder:"pochta@yandex.ru",
    id:"email",
    name:"email",
    type:"email",
    attributes:{
      class: 'data-input',
    },
    events: {
      blur: {
        element:'input',
        event: (e: Event)=>{
          const target = e.target as HTMLInputElement;
          const errorElem = target.parentElement?.parentElement?.querySelector('.data-input__error');
          const input = target.parentElement?.parentElement; 
          
          if(!email.test(target.value)){
            input?.classList.add('data-input_error');
            errorElem?.classList.add('data-input__error_active');
          } else {
            input?.classList.remove('data-input_error');
            errorElem?.classList.remove('data-input__error_active');
          }
        }
      },
    }
  })

  const loginInput: DataInput = new DataInput({
    label:"Логин",
    placeholder:"ivanivanov",
    id:"login",
    name:"login",
    type:"text",
    attributes:{
      class: 'data-input',
    },
    events: {
      blur: {
        element:'input',
        event: (e: Event)=>{
          const target = e.target as HTMLInputElement;
          const errorElem = target.parentElement?.parentElement?.querySelector('.data-input__error');
          const input = target.parentElement?.parentElement; 
          
          if(!login.test(target.value)){
            input?.classList.add('data-input_error');
            errorElem?.classList.add('data-input__error_active');
          } else {
            input?.classList.remove('data-input_error');
            errorElem?.classList.remove('data-input__error_active');
          }
        }
      },
    }
  })

  const nameInput: DataInput = new DataInput({
    label:"Имя",
    placeholder:"Иван",
    id:"first_name",
    name:"first_name",
    type:"text",
    attributes:{
      class: 'data-input',
    },
    events: {
      blur: {
        element:'input',
        event: (e: Event)=>{
          const target = e.target as HTMLInputElement;
          const errorElem = target.parentElement?.parentElement?.querySelector('.data-input__error');
          const input = target.parentElement?.parentElement; 
          
          if(!nameText.test(target.value)){
            input?.classList.add('data-input_error');
            errorElem?.classList.add('data-input__error_active');
          } else {
            input?.classList.remove('data-input_error');
            errorElem?.classList.remove('data-input__error_active');
          }
        }
      },
    }
  })

  const surnameInput: DataInput = new DataInput({
    label:"Фамилия",
    placeholder:"Иванов",
    id:"second_name",
    name:"second_name",
    type:"text",
    attributes:{
      class: 'data-input',
    },
    events: {
      blur: {
        element:'input',
        event: (e: Event)=>{
          const target = e.target as HTMLInputElement;
          const errorElem = target.parentElement?.parentElement?.querySelector('.data-input__error');
          const input = target.parentElement?.parentElement; 
          
          if(!nameText.test(target.value)){
            input?.classList.add('data-input_error');
            errorElem?.classList.add('data-input__error_active');
          } else {
            input?.classList.remove('data-input_error');
            errorElem?.classList.remove('data-input__error_active');
          }
        }
      },
    }
  })

  const nicknameInput: DataInput = new DataInput({
    label:"Имя в чате",
    placeholder:"Иван",
    id:"display_name",
    name:"display_name",
    type:"text",
    attributes:{
      class: 'data-input',
    },
    events: {
      blur: {
        element:'input',
        event: (e: Event)=>{
          const target = e.target as HTMLInputElement;
          const errorElem = target.parentElement?.parentElement?.querySelector('.data-input__error');
          const input = target.parentElement?.parentElement; 
          
          if(!nameText.test(target.value)){
            input?.classList.add('data-input_error');
            errorElem?.classList.add('data-input__error_active');
          } else {
            input?.classList.remove('data-input_error');
            errorElem?.classList.remove('data-input__error_active');
          }
        }
      },
    }
  })

  const telInput: DataInput = new DataInput({
    label:"Телефон",
    placeholder:"+7 (909) 967 30 30",
    id:"phone",
    name:"phone",
    type:"text",
    attributes:{
      class: 'data-input',
    },
    events: {
      blur: {
        element:'input',
        event: (e: Event)=>{
          const target = e.target as HTMLInputElement;
          const errorElem = target.parentElement?.parentElement?.querySelector('.data-input__error');
          const input = target.parentElement?.parentElement; 
          
          if(!phone.test(target.value)){
            input?.classList.add('data-input_error');
            errorElem?.classList.add('data-input__error_active');
          } else {
            input?.classList.remove('data-input_error');
            errorElem?.classList.remove('data-input__error_active');
          }
        }
      },
    }
  })



  const oldPassInput: DataInput = new DataInput({
    label:"Старый пароль",
    placeholder:"**********",
    id:"oldPassword",
    name:"oldPassword",
    type:"password",
    attributes:{
      class: 'data-input',
    },
    events: {
      blur: {
        element:'input',
        event: (e: Event)=>{
          const target = e.target as HTMLInputElement;
          const errorElem = target.parentElement?.parentElement?.querySelector('.data-input__error');
          const input = target.parentElement?.parentElement; 
          
          if(!password.test(target.value)){
            input?.classList.add('data-input_error');
            errorElem?.classList.add('data-input__error_active');
          } else {
            input?.classList.remove('data-input_error');
            errorElem?.classList.remove('data-input__error_active');
          }
        }
      },
    }
  })

  const newPassInput: DataInput = new DataInput({
    label:"Новый пароль",
    placeholder:"**********",
    id:"newPassword",
    name:"newPassword",
    type:"password",
    attributes:{
      class: 'data-input',
    },
    events: {
      blur: {
        element:'input',
        event: (e: Event)=>{
          const target = e.target as HTMLInputElement;
          const errorElem = target.parentElement?.parentElement?.querySelector('.data-input__error');
          const input = target.parentElement?.parentElement; 
          
          if(!password.test(target.value)){
            input?.classList.add('data-input_error');
            errorElem?.classList.add('data-input__error_active');
          } else {
            input?.classList.remove('data-input_error');
            errorElem?.classList.remove('data-input__error_active');
          }
        }
      },
    }
  })

  const repeatNewPassInput: DataInput = new DataInput({
    label:"Повторите новый пароль",
    placeholder:"**********",
    id:"newPasswordRepeat",
    name:"newPasswordRepeat",
    type:"password",
    attributes:{
      class: 'data-input',
    },
    events: {
      blur: {
        element: 'input',
        event: (e: Event)=>{
          const target = e.target as HTMLInputElement;
          const errorElem = target.parentElement?.parentElement?.querySelector('.data-input__error');
          const passwordInput = document.querySelector('input[name="newPassword"]') as HTMLInputElement;
          const input = target.parentElement?.parentElement; 
          
          if(passwordInput.value != target.value){
            input?.classList.add('data-input_error');
            errorElem?.classList.add('data-input__error_active');
          } else {
            input?.classList.remove('data-input_error');
            errorElem?.classList.remove('data-input__error_active');
          }
        }
      }
    }
  })

  const data: Data[] = [emailData, loginData, nameData, surnameData, nicknameData, telData];
  const dataInputs: DataInput[] = [emailInput, loginInput, nameInput, surnameInput, nicknameInput, telInput];
  const passwordInputs: DataInput[] = [oldPassInput, newPassInput, repeatNewPassInput];

  const obj = {
    '.profile__info': data,
    '.profile__change-data-list':dataInputs,
    '.profile__change-password-list':passwordInputs,
  };



  changeAvatar.addEventListener('click', ()=>{
    changeAvatarWrap.style.display='block';
  })

  changeAvatarWrap.addEventListener('click', (e)=>{
    const target = e.target as HTMLElement;
    if(target.classList.contains('profile__change-avatar-wrapper')){
      changeAvatarWrap.style.display='none';
    }
  })

  changeAvatarSubmit.addEventListener('click', ()=>{
    changeAvatarWrap.style.display='none';
  })

  changeData.addEventListener('click', ()=>{
    changeDataForm.style.display='flex';
    profileStatic.style.display='none';
  })

  changeDataSubmit.addEventListener('click', ()=>{
    const passes: boolean[] = [];
    const info: Record<string, string> = {};

    dataInputs.forEach((block)=>{
      const input = block.getContent().querySelector('input') as HTMLInputElement;
      const name = input.getAttribute('name') as string;
      const error: HTMLElement | null = block.getContent().querySelector('p');

      input?.dispatchEvent(new Event('blur'))
      error?.classList.contains('data-input__error_active') ? passes.push(false) : passes.push(true);

      info[name] = input.value;
    })

    if(!passes.includes(false)){
      console.log(info);

      changeDataForm.style.display='none';
      profileStatic.style.display='flex';
    }
  })

  changePassword.addEventListener('click', ()=>{
    changePasswordForm.style.display='flex';
    profileStatic.style.display='none';
  })

  changePasswordSubmit.addEventListener('click', ()=>{
    const passes: boolean[] = [];
    const info: Record<string, string> = {};

    passwordInputs.forEach((block)=>{
      const input = block.getContent().querySelector('input') as HTMLInputElement;
      const name = input.getAttribute('name') as string;
      const error: HTMLElement | null = block.getContent().querySelector('p');

      input?.dispatchEvent(new Event('blur'))
      error?.classList.contains('data-input__error_active') ? passes.push(false) : passes.push(true);

      info[name] = input.value;
    })

    if(!passes.includes(false)){
      console.log(info);

      changePasswordForm.style.display='none';
      profileStatic.style.display='flex';
    }
  })

  multiRender(obj);
});
