const assert = require('assert')
const {print, equal, makeList, fringe} = require('./list')

assert(equal(makeList(1,2,3), makeList(1,2,3)))
assert(!equal(makeList(1,2,3), makeList(2,3,4)))

//print(fringe(makeList(makeList(1,2), makeList(3,4, makeList(5, 6)))))
// printList(makeList(2,4))

// assert(equal(
//   printList(fringe(makeList(makeList(1,2), makeList(3,4)))),
//   makeList(2,4)
// ))
