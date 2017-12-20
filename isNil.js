const assert = require('assert')

const isNil = v => v == null

assert(isNil(null) === true)
assert(isNil(undefined) === true)
assert(isNil('') === false)
assert(isNil(0) === false)

module.exports = isNil
