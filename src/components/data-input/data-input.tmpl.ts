import './data-input.scss'

const template = 
`<div class="data-input__info">
  <label for="{{id}}" class="data-input__label">{{label}}</label>
  <input id="{{id}}" name="{{name}}" type="{{type}}" placeholder="{{placeholder}}" class="data-input__value"></input>
</div>
<p class="data-input__error">Неправильный формат данных</p>`;

export default template
