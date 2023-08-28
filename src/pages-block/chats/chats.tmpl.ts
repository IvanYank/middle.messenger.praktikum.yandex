import './chats.scss'

const template =
`<div class="chats__left-block">
  <div class="chats__search">
    {{{customLink}}}
    <form action="#" method="#" class="chats__creater">
      <input type="text" name="title" class="chats__title-input">
      <button type="button" class="chats__add-chat">Создать</button>
    </form>
    <form method="#" action="#" class="search chats__search-line">
      <input id="search" type="text" class="search__input" name="message">
      <label for="search" class="search__label">Поиск</label>
    </form>
  </div>
  <ul class="chats__list">
  {{#each dialogs}}
    <li>{{{this}}}</li>
  {{/each}}
  </ul>
</div>
{{{chat}}}`;

export default template
