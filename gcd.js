const mod = require('./mod')
const assert = require('assert')

const gcd = (a,b) => {
  const r = mod(a,b)

  if (r === 0)
    return b

  return gcd(b, r)
}

assert.equal(gcd(1, 1), 1)
assert.equal(gcd(206, 40), 2)
assert.equal(gcd(10000, 100), 100)
assert.equal(gcd(100, 10000), 100)

module.exports = gcd
