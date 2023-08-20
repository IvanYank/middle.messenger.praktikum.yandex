function inputVal(test: RegExp, e: Event) {
  const target = e.target as HTMLInputElement;
  const errorElem = target.parentElement?.querySelector(`.form__error`);

  console.log(errorElem)

  if (!test.test(target.value)) {
    target.classList.add(`form__input_error`);
    errorElem?.classList.add(`form__error_active`);
  } else {
    target.classList.remove(`form__input_error`);
    errorElem?.classList.remove(`form__error_active`);
  }
}

function passRepeatVal(e: Event) {
  const target = e.target as HTMLInputElement;
  const errorElem = target.parentElement?.querySelector(`.form__error`);
  const passwordInput = target.parentElement?.parentElement?.querySelector(`input[name="password"]`) as HTMLInputElement;

  if (passwordInput.value != target.value) {
    target.classList.add(`form__input_error`);
    errorElem?.classList.add(`form__error_active`);
  } else {
    target.classList.remove(`form__input_error`);
    errorElem?.classList.remove(`form__error_active`);
  }
}

function dataVal(test: RegExp, e: Event) {
  const target = e.target as HTMLInputElement;
  const errorElem = target.parentElement?.parentElement?.querySelector('.data-input__error');
  const input = target.parentElement?.parentElement;

  if (!test.test(target.value)) {
    input?.classList.add('data-input_error');
    errorElem?.classList.add('data-input__error_active');
  } else {
    input?.classList.remove('data-input_error');
    errorElem?.classList.remove('data-input__error_active');
  }
}

function dataRepeatVal(e: Event) {
  const target = e.target as HTMLInputElement;
  const errorElem = target.parentElement?.parentElement?.querySelector('.data-input__error');
  const passwordInput = document.querySelector('input[name="newPassword"]') as HTMLInputElement;
  const input = target.parentElement?.parentElement;

  if (passwordInput.value != target.value) {
    input?.classList.add('data-input_error');
    errorElem?.classList.add('data-input__error_active');
  } else {
    input?.classList.remove('data-input_error');
    errorElem?.classList.remove('data-input__error_active');
  }
}

export { inputVal, passRepeatVal, dataVal, dataRepeatVal }
