import './message.scss';

const template = 
`<div class="message__text">{{text}}</div>
<div class="message__time message__time_{{position}} message__time_{{status}}">{{time}}</div>`;

export default template
