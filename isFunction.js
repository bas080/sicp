const assert = require('assert')

const isFunction = x => typeof x === 'function'

assert(isFunction(isFunction) === true)
assert(isFunction(20) === false)

module.exports = isFunction;
