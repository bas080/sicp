const assert = require('assert')

const lt = (c, x) => x < c

assert(lt(1, 2) === false)
assert(lt(1, 1) === false)
assert(lt(1, 0) === true)

module.exports = lt
