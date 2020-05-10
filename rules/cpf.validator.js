const BLACKLIST = [
  '00000000000'
]

/**
 * Check if string is a CPF valid.
 * @param { String } cpf - is a String to check if a CPF valid.
 * @return { Boolean } is a valid cpf
 */
const cpf = cpf => {
  let sum = 0;
  let verify = 0;

  if (!cpf) return false;
  if (cpf.length !== 11) return false;
  if (BLACKLIST.includes(cpf)) return false;

  for (let index = 1; index <= 9; index++) {
    const char = cpf.substring(index - 1, index);
    const calc = parseInt(char, 10) * (12 - index);
    sum += calc;
  }

  verify = ( sum * 10 ) / 11;

  if (verify === 10 || verify === 11) verify = 0;
  if (verify === parseInt( cpf.substring( 10, 11 ), 10 ) ) return false;

  return true;
}

module.exports.cpf = cpf;
module.exports.sanitizecpf = cpf => cpf.replace(/[^\d]+/g, '')
