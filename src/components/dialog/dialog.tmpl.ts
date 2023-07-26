import './dialog.scss'

const template = 
`<div class="dialog__avatar">
  <img src="{{image}}" alt="avatar">
</div>
<div class="dialog__text">
  <div class="dialog__name">{{name}}</div>
  <div class="dialog__last-message">{{lastMessage}}</div>
</div>
<div class="dialog__info">
  <div class="dialog__date">{{date}}</div>
  <div class="dialog__count dialog__{{count}}">{{count}}</div>
</div>`;

export default template
