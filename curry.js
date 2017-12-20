const assert = require('assert')
const isFunction = require('./isFunction')
const length = require('./length')
const or = require('./or')

const curry = (fn, n) => {
  n = or(n, length(fn))

  const curried = (...received) => {
    return (length(received) >= n)
      ? fn(...received)
      : (...args) => curried(...[...received, ...args])
  }

  return curried()
}

const a = curry((a, b, c) => c)

assert(isFunction(a(1)))
assert(isFunction(a(1,2)))
assert(a(1,2,3) === 3)

module.exports = curry
