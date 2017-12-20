const assert = require('assert')
const curry = require('./curry')

const divide = curry((x, v) => v / x)

assert.equal(divide(2, 1), 0.5)

module.exports = divide
