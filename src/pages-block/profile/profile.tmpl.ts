import './profile.scss'

const template =
`{{{customLink1}}}
<div class="profile__content">
  <div class="profile__wrapper">
    <div class="profile__static-data">
      <button type="button" class="profile__avatar">
        <img src="{{profile-image}}" alt="avatar" class="profile__image">
        <p class="profile__avatar-text">Поменять аватар</p>
      </button>
      <h2 class="profile__title">{{name-title}}</h2>
      <div class="profile__info">
        {{{email}}}
        {{{login}}}
        {{{name}}}
        {{{surname}}}
        {{{nickname}}}
        {{{phone}}}
      </div>
      <div class="profile__buttons">
        <button class="profile-button profile__change-data-button">Изменить данные</button>
        <button class="profile-button profile__change-password-button">Изменить пароль</button>
        {{{customLink2}}}
      </div>
    </div>
    <form action="#" class="profile__change-data">
      <div class="profile__change-data-list">
        {{{email-input}}}
        {{{login-input}}}
        {{{name-input}}}
        {{{surname-input}}}
        {{{nickname-input}}}
        {{{phone-input}}}
      </div>
      <button type="button" class="profile__change-data-submit">Сохранить</button>
    </form>
    <form action="#" class="profile__change-password">
      <div class="profile__change-password-list">
        {{{oldPassword-input}}}
        {{{newPassword-input}}}
        {{{repeatPassword-input}}}
      </div>
      <button type="button" class="profile__change-password-submit">Сохранить</button>
    </form>
  </div>
  <div class="profile__change-avatar-wrapper">
    <form action="#" class="change-avatar profile__change-avatar">
      <p class="change-avatar__title">Загрузите файл</p>
      <label for="avatar" class="change-avatar__label">Выбрать файл на компьютере</label>
      <input id="avatar" type="file" class="change-avatar__input" name="avatar">
      <button type="button" class="change-avatar__submit">Поменять</button>
    </form>
  </div>
</div>`;

export default template
