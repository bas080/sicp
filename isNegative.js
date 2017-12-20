const isZero = require('./isZero')
const lt = require('./lt')
const and = require('./and')

const isNegative = n => lt(0, n) && !isZero(n)

and(lt(0), isZero)

module.exports = isNegative
