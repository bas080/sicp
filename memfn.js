const isFunction = require('./isFunction')
const assert = require('assert')
const memfn = name => (instance, ...args) => instance[name](...args)

a = memfn('toUpperCase')
assert(isFunction(a))
assert.equal(a('hello'), 'HELLO')

module.exports = memfn
