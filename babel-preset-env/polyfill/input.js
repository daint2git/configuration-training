import '@babel/polyfill'

export const handlePromise = () =>
  new Promise(resolve => {
    resolve('hi')
  })

export const handleAsyncAwait = async () => {
  const greeting = await Promise.resolve('hi')
  return greeting
}

export function* handleGenerator() {
  yield 1
  yield 2
}

export async function* handleAsyncAwaitGenerator() {
  await 1
  yield 2
}

export const myMap = new Map()

export const myWeekMap = new WeakMap()

export const myArray = Array.from([1, 2, 3], x => x + x)

export const cloneArray = [...myArray]

export const [first, second, ...restArray] = cloneArray

export const myObject = { name: 'Dai', age: 26, skill: 'js' }

export const cloneObject = { ...myObject }

export const { name, age, ...restObject } = cloneObject

export const newObject = { ...rest }

export const isExistedInArray = ['a', 'b'].includes('a')

export const isExistedInString = 'ab'.includes('a')

export const isValidNum = myArray.every(val => val < 3)
