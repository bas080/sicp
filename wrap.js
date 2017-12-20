const assert = require('assert')

const wrap = (original, wrapFn) => {
  return (...args) => {
    return wrapFn(original, ...args)
  }
}

const a = x => x
const b = wrap(a, (original, x, y) => {
  return original(x) + y
})

assert(a(1) === 1)
assert(b(1,2) === 3)

module.exports = wrap
