import './registration.scss'

const template =
`<div class="form-reg__wrapper">
  <div class="form-reg__upper">
    <div class="form-reg__title">{{title}}</div>
    <div class="form-reg__inputs">
      {{{email}}}
      {{{login}}}
      {{{name}}}
      {{{surname}}}
      {{{phone}}}
      {{{password}}}
      {{{passwordRepeat}}}
    </div>
  </div>
  <div class="form-reg__lower">
    {{{registration}}}
    {{{enter}}}
  </div>
</div>`;

export default template
