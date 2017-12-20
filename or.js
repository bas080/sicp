const assert = require('assert')
const or = (a, b) => a || b

assert.equal(or(false, false), false)
assert.ok(or(false, true))
assert.equal(or(undefined, 'hello'), 'hello')
assert.equal(or(true, true), true)

module.exports = or
