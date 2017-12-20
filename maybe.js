const isNil = require('./isNil')
const value = Symbol('value')

function Maybe(v) {
  this[value] = v
}

Maybe.of = v => new Maybe(v)

Maybe.prototype.isNothing = function isNothing() {
  return isNil(this[value])
}

function maybe(isNothing, elseFn) {
  return (...args) => Maybe.of(isNothing(...args)
    ? null
    : elseFn(...args))
}

Maybe.prototype.map = function map(fn) {
  return this.isNothing() ? this : Maybe.of(fn(this[value]))
}

Maybe.maybe = maybe

module.exports = Maybe
