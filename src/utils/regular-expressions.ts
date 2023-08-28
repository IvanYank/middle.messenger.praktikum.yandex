const nameText = new RegExp('^([А-Я]{1}[а-яё]{1,23}|[A-Z]{1}[a-z]{1,23})$');
const email = new RegExp('^([a-z0-9]+(?:[._-][a-z0-9]+)*)@([a-z0-9]+(?:[.-][a-z0-9]+)*.[a-z]{2,})$');
const password = new RegExp('(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}');
const phone = new RegExp('^(?=^.{10,15}$)(\\+?[0-9\\-\\s])*$');
const login = new RegExp('^(?=^.{3,20}$)[A-Za-z]+([A-Za-z0-9]*|[._-]?[A-Za-z0-9]+)*$');

export { email, login, password, nameText, phone }
