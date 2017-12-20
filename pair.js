const {cons, car, cdr} = require('./cons.js')
const typed = require('./typed')

module.exports = {
  ...typed(cons, 'Pair'),
  car,
  cdr,
}
