const {cons, cdr, car} = require('./cons')

// PLANES

const makePlane = (w,h) => cons(w,h)
const width = car
const height = cdr
const area = plane => width(plane) * height(plane)
const perim = plane => (width(plane) + height(plane)) * 2

module.exports = {
  makePlane,
  width,
  height,
  area,
  perim,
}
