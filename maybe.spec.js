const assert = require('assert')
const Maybe = require('./maybe')
const sum = require('./sum')
const mod = require('./mod')
const divide = require('./divide')
const isZero = require('./isZero')

const safeHead = (list) => Maybe.of(list[0])
const safeMod = Maybe.maybe((_, m) => isZero(m), mod)
const safeDivide = Maybe.maybe(isZero, divide)

assert.equal(safeDivide(0, 10).isNothing(), true)
assert.equal(safeDivide(1, 10).isNothing(), false)
assert.equal(safeMod(10, 0).isNothing(), true)
assert.equal(safeMod(10, 1).isNothing(), false)

safeHead([1]).map(sum(2)).map(v => assert.equal(v, 3))

let didNotRun = true
safeHead([])
  .map(() => didNotRun = false)
  .map(() => didNotRun = false)
assert(didNotRun)
