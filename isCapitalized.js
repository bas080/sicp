const eq = require('./eq')
const first = require('./first')
const assert = require('assert')
const uppercase = require('./uppercase')

const isCapitalized = string => eq(first(string), uppercase(first(string)))

assert(isCapitalized('Hello world') === true)
assert(isCapitalized('name') === false)

module.exports = isCapitalized
