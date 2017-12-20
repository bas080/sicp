/**
 * A simple list data representation
 */
const cons = (a, b) => f => f(a, b)
const car = f => f(a => a)
const cdr = f => f((_, b) => b)

module.exports = {
  cons,
  car,
  cdr,
}
