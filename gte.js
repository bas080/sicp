const assert = require('assert')

// greater than or equal
const gte = (c, x) => x >= c

assert(gte(2, 4) === true)
assert(gte(3, 3) === true)
assert(gte(3, 2) === false)

module.exports = gte
