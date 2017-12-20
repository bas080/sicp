const first = require('./first')

const tap = fn => (...args) => {
  fn(...args)

  return first(args)
}

module.exports = tap
