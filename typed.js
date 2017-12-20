const assert = require('assert')
const wrap = require('./wrap')
const isCapitalized = require('./isCapitalized')
const typeSymbol = Symbol('type')
const set = require('./set')
const isNil = require('./isNil')

// used to provide type meta data to data
const typed = (makeFn, name) => {
  assert(name, 'expected type to have a name')
  assert(makeFn, 'expected makeFn to be defined')
  assert(isCapitalized(name), 'expected type name to be Capitalized')

  const symbol = Symbol(name)

  make = wrap(makeFn, (original, ...args) => {
    const value = original(...args)

    return isNil(value) ? value : set(symbol, true, value)
  })

  isType = data => Boolean(data[symbol])

  return {
    [`make${name}`]: make,
    [`is${name}`]: isType,
  }
}

module.exports = typed
