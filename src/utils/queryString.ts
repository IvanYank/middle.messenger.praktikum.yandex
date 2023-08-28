import { Indexed } from "../services/types";

function queryStringify(data: Indexed): string | never {
  return Object.entries(data).reduce((acc, item) => {
    const [key, value] = item;

    if (Array.isArray(value)) {
      let str: string = '';
      value.forEach((elem, index) => {
        if (Array.isArray(elem) || elem instanceof Object) {
          str = queryStringify(elem);
        } else {
          str = str + key + '[' + index + ']' + '=' + elem + '&';
        }
      })
      return acc + str;
    }

    if (value instanceof Object) {
      const newObj: Indexed = {};

      Object.entries(value).forEach((item) => {
        const newKey = '[' + item[0] + ']';
        const newValue = item[1];

        newObj[newKey] = newValue;
      })

      return acc + key + queryStringify(newObj) + '&';
    }
    return acc + key + '=' + value + '&';
  }, '').slice(0, -1)
}

export default queryStringify
