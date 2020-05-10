/**
 * Regular expression used to validate if email is within valid standard
 */
const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

/**
 * Rule to Check if email format is valid
 * @param { String } value - is a e-mail string.
 * @example 'foo@bar.dev is a valid format'
 * @example 'www.foo@bar.developer.com.tom is a invalid format'
 * @return { Boolean } is a valid email
 */
const email = value => value && value.length && regex.test(value)


module.exports.email = email;
