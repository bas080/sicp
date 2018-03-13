const assert = require('assert')

const {divide, makeRatio, numer, denom, multiply, equals, subtract} = require('./rational')

assert(equals(
  divide(
    makeRatio(1,2),
    makeRatio(1,4),
  ),
  makeRatio(2,1)
))

assert(equals(
  divide(
    makeRatio(2, 1),
    makeRatio(1, 3)
  ),
  makeRatio(6, 1)
))

assert(equals(makeRatio(2, 4), makeRatio(1,2)))
assert(equals(
  multiply(
    makeRatio(2, 4),
    makeRatio(3, 6)
  ),
  makeRatio(1,4)
))
assert(equals(
  subtract(
    makeRatio(1,4),
    makeRatio(1,2)
  ),
  makeRatio(1,4)
))

