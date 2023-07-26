import './input.scss'

const template = 
`<label class="form__label" for="{{id}}">{{label}}</label>
<input class="form__input" id="{{id}}" type="{{type}}" name="{{name}}">
<p class="form__error">Неверный формат поля</p>`;

export default template
