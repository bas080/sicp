const curry = require('./curry')

const sum = curry((a, b) => a + b)

module.exports = sum
