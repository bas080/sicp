const negate = require('./negate')
const gcd = require('./gcd')
const ratioSymbol = Symbol('ratio')
const set = require('./set')
const {car, cdr, makePair} = require('./pair')
const isNegative = require('./isNegative')
const typed = require('./typed')
const multiply = require('./multiply')
const curry = require('./curry')
const sum = require('./sum')
const subtract = require('./subtract')
const divide = require('./divide')

/**
 * Implementation of rational numbers. It uses the cons implemenation for
 * defining pairs
 */

const numer = car
const denom = cdr
const makeRatio = (num, div) => {
  const _gcd = gcd(num, div)
  num = num / _gcd
  div = div / _gcd

  return isNegative(div)
    ? makeRatio(negate(num), negate(div))
    : set(ratioSymbol, true, makePair(num, div))
}

const apply = curry((numerFn, denomFn, a, b) => makeRatio(
  numerFn(a, b),
  denomFn(a, b)
))

const equals = (ratioA, ratioB) => {
  return (denom(ratioA) === denom(ratioB)) && (numer(ratioA) === numer(ratioB))
}

/**
 * Implementation of the operations that can be performed on rational numbers.
 */

const print = rat => console.log(`${numer(rat)}/${denom(rat)}`)

module.exports = {
  ...typed(makeRatio, 'Ratio'),
  numer,
  denom,
  equals,
  print,

  // multiply and divide have common procedures

  multiply: apply(
    (a, b) => multiply(numer(a), numer(b)),
    (a, b) => multiply(denom(a), denom(b))
  ),

  divide: apply(
    (a, b) => divide(numer(a), numer(b)),
    (a, b) => divide(denom(a), denom(b))
  ),

  // sum and subtract have common procedures

  sum: apply(
    (a, b) => sum(multiply(numer(a), denom(b)), multiply(numer(b), denom(a))),
    (a, b) => multiply(denom(a), denom(b))
  ),

  subtract: apply(
    (a, b) => subtract(multiply(numer(a), denom(b)), multiply(numer(b), denom(a))),
    (a, b) => multiply(denom(a), denom(b))
  ),
}
