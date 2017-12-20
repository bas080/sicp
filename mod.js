const assert = require('assert')
const identity = require('./identity')
const gte = require('./gte')
const subtract = require('./subtract')
const ifElse = require('./ifElse')

const mod = (x, m) => gte(m, x)
  ? mod(subtract(m, x), m)
  : x

assert.equal(mod(66, 6), 0)
assert.equal(mod(66, 5), 1)
assert.equal(mod(66, 4), 2)

// Could have mod return a maybe monad when mo
// assert.equal(mod(10, 0), 0)

module.exports = mod
