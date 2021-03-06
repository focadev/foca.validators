const ddds = [
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  21,
  22,
  24,
  27,
  28,
  31,
  32,
  33,
  34,
  35,
  37,
  38,
  41,
  42,
  43,
  44,
  45,
  46,
  47,
  48,
  49,
  51,
  53,
  54,
  55,
  61,
  62,
  63,
  64,
  65,
  66,
  67,
  68,
  69,
  71,
  73,
  74,
  75,
  77,
  79,
  81,
  82,
  83,
  84,
  85,
  86,
  87,
  88,
  89,
  91,
  92,
  93,
  94,
  95,
  96,
  97,
  98,
  99,
]

/**
 * Cellphone Rule
 * isCellPhone - Checks if the mobile format is valid, this includes the DDD entered
 * Validation covers 9-digit and 8-digit format
 * @param {String} value - is a Cellphone format valid with mask
 * @example
 *  '(##) 9####-####'
 *  '(##) ####-####'
 * @return { Boolean } is a valid cellphone
 */
const isCellPhone = value => {
  if (value === null) return false
  if (!/\([0-9]{2}\) 9?[0-9]{4}-[0-9]{4}/.test(value)) return false
  if (value.split(' ').length < 2) return false
  const ddd = value.split(' ')[0].match(/\d/g)
  if (ddds.indexOf(parseInt(ddd.join(''), 10)) === -1) return false
  const number = value.split(' ')[1].match(/\d/g)
  if (number.every(x => x === number[0])) return false
  return true
}

/**
 * LandLine Rule
 * isLandLine - Verify that the landline format is valid, this includes the entered DDD.
 * @param {String} value - is a landline format valid with mask
 * @example
 *  '(##) ####-####'
 * @return { Boolean } is a valid landline
 */
const isLandLine = value => {
  if (!value) return true
  if (!/\([0-9]{2}\) [2-5]{1}[0-9]{3}-[0-9]{4}/.test(value)) return false
  if (value.split(' ').length < 2) return false
  const ddd = value.split(' ')[0].match(/\d/g)
  if (ddds.indexOf(parseInt(ddd.join(''), 10)) === -1) return false
  const number = value.split(' ')[1].match(/\d/g)
  if (number.every(x => x === number[0])) return false
  return true
}

module.exports.isCellPhone = isCellPhone;
module.exports.isLandLine = isLandLine;
