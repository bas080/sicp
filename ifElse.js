const identity = require('./identity')

const ifElse = (predFn, thenFn, elseFn = identity) => (...args) => predFn(...args) ? thenFn(...args) : elseFn(...args)

module.exports = ifElse
