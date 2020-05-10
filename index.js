const fs = require('fs')
const { join } = require('path')

const validators = fs.readdirSync( join(__dirname, './rules') ).map( path => {
	return require(`./rules/${path}`)
})

module.exports = validators
