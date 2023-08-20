import './chats.scss'

const template =
`<div class="chats__left-block">
  <div class="chats__search">
    {{{customLink}}}
    <form method="#" action="#" class="search chats__search-line">
      <input id="search" type="text" class="search__input" name="message">
      <label for="search" class="search__label">Поиск</label>
    </form>
  </div>
  <div class="chats__list"></div>
</div>
<div class="chats__right-block">
  <div class="chats__chat-info">
    <div class="chats__left-info">
      <div class="chats__avatar">
        <img src="{{personImage}}" alt="avatar" class="chats__img">
      </div>
      <div class="chats__name">{{personName}}</div>  
    </div>
    <button class="chats__settings" type="button"></button>
  </div>
  <div class="chats__messages-display"></div>
  <form method="#" action="#" class="chats__send-panel">
    <button type="button" class="chats__send-file"></button>
    <input  type="text" name="message" class="chats__send-message" placeholder="Сообщение">
    <button type="button" class="chats__send-button"></button>
  </form>
</div>`;

export default template
