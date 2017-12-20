const assert = require('assert')

const inc = n => n + 1

assert.equal(inc(1), 2)

module.exports = inc
