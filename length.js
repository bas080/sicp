const assert = require('assert')
const prop = require('./prop')

const length = prop('length')

assert(length([1,2,3]) === 3)

module.exports = length
