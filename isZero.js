const assert = require('assert')

const isZero = n => n === 0 || n === -0

assert(isZero(-0) === true)
assert(isZero(0) === true)
assert(isZero(1) === false)
assert(isZero(-1) === false)

module.exports = isZero
