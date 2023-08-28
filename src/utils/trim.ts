function trim(str: string, param: string = '') {
  let newReg = '';
  param.split('').forEach((symbol) => {
    newReg = newReg + symbol + '|';
  })

  newReg = newReg.slice(0, -1)

  return str
    .replace(new RegExp('^ *'), '')
    .replace(new RegExp(' *$'), '')
    .replace(new RegExp(newReg, 'g'), '');
}

export default trim;
