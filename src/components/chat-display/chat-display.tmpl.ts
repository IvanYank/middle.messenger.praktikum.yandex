import './chat-display.scss'

const template = 
`<div class="display__chat-info">
  <div class="display__left-info">
    <div class="display__avatar">
      <img src="{{personImage}}" alt="avatar" class="display__img">
    </div>
    <div class="display__name">{{personName}}</div>  
  </div>
  <button class="display__settings" type="button"></button>
  <div class="display__settings-list">
    <button type="button" class="display__setting display__change-avatar">Поменять аватар чата</button>
    <button type="button" class="display__setting display__add-user">Добавить пользователя</button>
    <button type="button" class="display__setting display__delete-user">Удалить пользователя</button>
    <button type="button" class="display__setting display__delete-chat">Удалить чат</button>
  </div>
</div>
<ul class="display__messages-display">
{{#each messages}}
  {{{this}}}
{{/each}}
</ul>
<form method="#" action="#" class="display__send-panel">
  <button type="button" class="display__send-file"></button>
  <input  type="text" name="message" class="display__send-message" placeholder="Сообщение">
  <button type="submit" class="display__send-button"></button>
</form>
<div class="display__forms-wrapper">
  <form method="#" action="#" class="change-data-form display__change-avatar-wrapper">
    <div class="change-data-form__title">Загрузите файл</div>
    <label for="chatAvatar" class="change-data-form__file-label">Выбрать файл на компьютере</label>
    <input id="chatAvatar" type="file" class="change-data-form__file-input" name="avatar">
    <button type="submit" class="change-data-form__submit">Поменять</button>
  </form>
  <form method="#" action="#" class="change-data-form display__add-user-list-wrapper">
    <label for="addUserId" class="change-data-form__title">Введите Id пользователя, которого хотите добавить</label>
    <input id="addUserId" type="text" class="change-data-form__input" name="userId" placeholder="id пользователя">
    <button type="submit" class="change-data-form__submit">Добавить</button>
  </form>
  <form method="#" action="#" class="change-data-form display__delete-user-list-wrapper">
    <label for="deleteUserId" class="change-data-form__title">Введите Id пользователя, которого хотите удалить</label>
    <input id="deleteUserId" type="text" class="change-data-form__input" name="userId" placeholder="id пользователя">
    <button type="submit" class="change-data-form__submit">Удалить</button>
  </form>
  <div class="change-data-form display__delete-chat-wrapper">
    <div class="change-data-form__title">Вы уверены, что хотите удалить этот чат ?</div>
    <div class="change-data-form__answers-wrapper">
      <button type="button" class="change-data-form__answer change-data-form__answer_yes">Да</button>
      <button type="button" class="change-data-form__answer change-data-form__answer_no">Нет</button>
    </div>
  </div>
</div>`;

export default template
