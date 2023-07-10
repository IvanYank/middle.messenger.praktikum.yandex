const profileStatic = document.querySelector('.profile__static-data');

const changeAvatar = document.querySelector('.profile__avatar');
const changeData = document.querySelector('.profile__change-data-button');
const changePassword = document.querySelector('.profile__change-password-button');

const changeAvatarWrap = document.querySelector('.profile__change-avatar-wrapper');
const changeDataForm = document.querySelector('.profile__change-data');
const changePasswordForm = document.querySelector('.profile__change-password');

const changeDataSubmit = document.querySelector('.profile__change-data-submit');
const changePasswordSubmit = document.querySelector('.profile__change-password-submit');

changeAvatar.addEventListener('click', ()=>{
  changeAvatarWrap.style="display:block"
})

changeAvatarWrap.addEventListener('click', (e)=>{
  if(e.target.classList.contains('profile__change-avatar-wrapper')){
    changeAvatarWrap.style="display:none;"
  }
})

changeData.addEventListener('click', ()=>{
  changeDataForm.style="display:flex"
  profileStatic.style="display:none"
})

changeDataSubmit.addEventListener('click', ()=>{
  changeDataForm.style="display:none"
  profileStatic.style="display:flex"
})

changePassword.addEventListener('click', ()=>{
  changePasswordForm.style="display:flex"
  profileStatic.style="display:none"
})

changePasswordSubmit.addEventListener('click', ()=>{
  changePasswordForm.style="display:none"
  profileStatic.style="display:flex"
})

