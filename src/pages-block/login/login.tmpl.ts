import './login.scss'

const template =
`<div class="form-login__wrapper">
  <div class="form-login__upper">
    <div class="form-login__title">{{title}}</div>
    <div class="form-login__inputs">
      {{{login}}}
      {{{password}}}
    </div>
  </div>
  <div class="form-login__lower">
    {{{enter}}}
    {{{registration}}}
  </div>
</div>`;

export default template
