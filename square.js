const assert = require('assert')

const square = (x, s=2) => {
  const iter = (v, l) => {
    return (l === 1)
      ? v
      : iter(v * x, l - 1)
  }

  return iter(x, s)
}

assert.equal(square(2), 4)
assert.equal(square(2, 3), 8)
assert.equal(square(3), 9)
assert.equal(square(3, 3), 27)

module.exports = square
