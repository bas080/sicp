// used to print data types
const tap = require('./tap')
const isNil = require('./isNil')
const {cdr, car} = require('./cons')

const {isList} = require('./list')
const {isPair} = require('./cons')

// todo: implement printing nested structures
const logList = tap((list, string = '') =>
  eol(list)
  ? console.log(`(${string}${car(list)})`)
  : logList(cdr(list), `${string}${car(list)} `))


const print = data => {
  console.log(
    cond(
      isList, logList
    )
  )
}

module.exports = {}
