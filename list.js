const assert = require('assert')
const isNil = require('./isNil')
const {isPair, makePair, cdr, car} = require('./pair')
const typed = require('./typed')
const square = require('./square')
const tap = require('./tap')

const {makeList, isList} = typed(
  (head, ...rest) => isNil(head) ? null : makePair(head, makeList(...rest)),
  'List'
);
const lastPair = list => isNil(cdr(list)) ? list : lastPair(cdr(list))
const append = (a, b) => isNil(a) ? b : makePair(car(a), append(cdr(a), b))
const reverse = list => {
  const iter = (rest, sub) => {
    return isNil(rest)
      ? sub
      : iter(cdr(rest), makePair(car(rest), sub))
  }

  return iter(list, null)
}


const map = (fn, list) =>
  isNil(list)
    ? null
    : makePair(fn(car(list)), map(fn, cdr(list)))

const squareList = list => map(square, list)

// could first do length check and then the equal check. This removes the need
// to check if have rea
const equal = (a, b) => (car(a) === car(b))
  ? ((isNil(cdr(a)) && isNil(cdr(b))) ? true : equal(cdr(a), cdr(b)))
  : false

const deepReverse = tree => {
  const iter = (rest, sub) => {
    if (isNil(rest)) return sub

    const item = car(rest)

    return iter(cdr(rest), makePair(isList(item) ? deepReverse(item) : item, sub))
  }

  return iter(tree, null)
}

const fringe = tree => {
  const iter = (rest, sub) => {
    if (isNil(rest))
      return sub

    const item = car(rest)

    if (isLeaf(rest))
      return makePair(item, sub)

    return iter(cdr(rest), isList(item) ? iter(item, sub) : sub)
  }

  return iter(tree, null)
}

const isLeaf = pair => isNil(cdr(pair)) && !isList(car(pair))

const print = tap((list, string = '') =>
  isNil(cdr(list))
  ? console.log(`(${string}${car(list)})`)
  : print(cdr(list), `${string}${car(list)} `))


module.exports = {
  makeList,
  print,
  equal,
  fringe,
}

assert(equal(
  squareList(makeList(1,2,3)),
  makeList(1, 4, 9)
))
