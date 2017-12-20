const assert = require('assert')
const isNil = require('./isNil')

const and = (...predFns) => {
  const iter = (predFns, args) => {
    const [pred, ...preds] = predFns

    if (isNil(pred))
      return true

    return pred(...args)
      ? iter(preds, args)
      : false
  }

  return (...args) => {
    return iter(predFns, args)
  }
}

(...args) => pred(...args)
  ? (isNil(pred) ? true : and(...rest)(...args))
  : false

assert.equal(and(_ => true, _ => true)(), true)
assert.equal(and(_ => true, _ => false)(), false)
assert.equal(and(_ => false, _ => true)(), false)
assert.equal(and(_ => false, _ => false)(), false)
assert.equal(and(_ => true, _ => true, _ => false)(), false)

module.exports = and
