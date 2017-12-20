const assert = require('assert')

const always = v => () => v

const a = always('same')

assert.equal(a(), 'same')
assert.equal(a('other'), 'same')

module.exports = always
