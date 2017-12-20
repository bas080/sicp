const assert = require('assert')

const subtract = (s, x) => x - s

assert(subtract(1, 2) === 1)

module.exports = subtract
