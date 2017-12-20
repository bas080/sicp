const {makeList} = require('./list')
const {cdr, car, isPair, makePair} = require('./pair')
const sum = require('./sum')
const ifElse = require('./ifElse')
const assert = require('assert')
const typed = require('./typed')
const trace = require('./trace')
const multiply = require('./multiply')
const eq = require('./eq')
const always = require('./always')

const {makeMobile, isMobile} = typed((left, right) => makePair(left, right), 'Mobile')

const {makeBranch, isBranch} = typed((length, structure) => makePair(length, structure), 'Branch')

const leftBranch = car
const rightBranch = cdr
const branchLength = leftBranch
const branchStructure = rightBranch

const branchWeight = ifElse(
  branch => isMobile(branchStructure(branch)), // consider using compose
  branch => totalWeight(branchStructure(branch)),
  branchStructure
)

const totalWeight = mobile => sum(
  branchWeight(leftBranch(mobile)),
  branchWeight(rightBranch(mobile))
)

const branchTorque = branch => multiply(branchLength(branch), branchWeight(branch))

const singleMobileIsBalanced = mobile => eq(branchTorque(leftBranch(mobile)), branchTorque(rightBranch(mobile)))

const isBalanced = mobile => {
  if (!isMobile(mobile))
    return true

  if (!singleMobileIsBalanced(mobile))
    return false

  const left = leftBranch(branchStructure(mobile))
  const right = rightBranch(branchStructure(mobile))

  return isBalanced(left) && isBalanced(right)
}

assert(isBalanced(makeMobile(makeBranch(2,3), makeBranch(2,3))))

assert.equal(isBalanced(makeMobile(makeBranch(3,3), makeBranch(2,3))), false)

assert.equal(isBalanced(makeMobile(
  makeBranch(3, 4),
  makeBranch(2, makeMobile(
    makeBranch(1, 6),
    makeBranch(2, 6)
  ))
)), false)

assert.equal(isBalanced(makeMobile(
  makeBranch(3, 4),
  makeBranch(2, makeMobile(
    makeBranch(1, 6),
    makeBranch(1, 6)
  ))
)), false)

assert.equal(branchTorque(makeBranch(2, makeMobile(makeBranch(1,2), makeBranch(2,2)))), 8)

assert.equal(
  totalWeight(
    makeMobile(
      makeBranch(1, 1),
      makeBranch(
        1,
        makeMobile(
          makeBranch(1, 1),
          makeBranch(1, 1)
        )
      )
    )
  ), 3
)
