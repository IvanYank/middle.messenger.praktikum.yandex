const password = document.querySelector('[name="password"]');
const passwordRepeat = document.querySelector('[name="password_sec"]');
const message = document.querySelector('.form__issue');

passwordRepeat.addEventListener('input', (e)=>{
  if(e.target.value != password.value){
    message.style = 'display:block';
    password.style = 'color:#FF2F2F';
    passwordRepeat.style = 'color:#FF2F2F';
  } else {
    message.style = 'display:none';
    password.style = 'color:#000';
    passwordRepeat.style = 'color:#000';
  }
})

