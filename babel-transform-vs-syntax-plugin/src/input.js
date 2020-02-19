import input2, { sum } from './input2'

const obj1 = { a: 1 }
const obj2 = { b: 2 }

const obj12 = { ...obj1, ...obj2 }
const { a, ...rest } = obj12

// optional chaining
const obj3 = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
    },
  },
}

const obj3e = obj3?.b?.d?.e

const sumAB = sum(1, 2)
const mulAB = input2.mul(1, 2)

class Shape {
  x = 0
  y = 0

  boundArrowFunction = () => {
    return this.x + this.y
  }

  boundFunction() {
    return this.x + this.y
  }
}
