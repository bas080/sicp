const {cdr, car, isPair, makePair} = require('./pair')
const {makeList} = require('./list')
const isNil = require('./isNil')
const square = require('./square')
const trace = require('./trace')

const map = (fn, tree) => {
  const iter = (rest, sub) =>  {
    if (isNil(rest))
      return sub

    const item = car(rest)

    return iter(cdr(rest), makePair(isPair(item) ? map(fn, item) : fn(item), sub))
  }

  return iter(tree)
}

const squareTree = tree => map(square, tree)

squareTree(makeList(makeList(1,2), makeList(3, makeList(4, 5))))

module.exports = {
  map
}

// maybe move the deep and fringe functions to this module
