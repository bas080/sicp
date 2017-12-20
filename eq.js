const curry = require('./curry')

const eq = curry((a, b) => a === b)

module.exports = eq
