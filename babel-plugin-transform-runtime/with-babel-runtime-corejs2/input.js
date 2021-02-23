import React from 'react'
import Button from './input2'
import Text from './input3'
import { handleAsyncAwait2, handleGenerator2, handleAsyncAwaitGenerator2 } from './async'

handleAsyncAwait2()
handleGenerator2()
handleAsyncAwaitGenerator2()

export const handlePromise = () =>
  new Promise((resolve) => {
    resolve('hi')
  })

export const handleAsyncAwait = async () => {
  const data = await Promise.resolve('hi')
  return data
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

export const myWeakMap = new WeakMap()

export const mySet = new Set()

export const myWeakSet = new WeakSet()

export const mySymbol = new Symbol()

export const myArray = Array.from([1, 2, 3], (x) => x + x)

export const cloneArray = [...myArray]

export const myObject = { name: 'Dai', age: 26 }

export const cloneObject = { ...myObject }

export const isExistedInArray = ['a', 'b'].includes('a')

export const isExistedInString = 'ab'.includes('a')

class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
    this.handleIncrement = this.handleIncrement.bind(this)
  }

  handleIncrement() {
    this.setState(({ count }) => ({ count: count + 1 }))
  }

  handleDecrement = () => {
    this.setState(({ count }) => ({ count: count - 1 }))
  }

  render() {
    return (
      <div>
        <Button onClick={this.handleIncrement}>+</Button>
        <Button onClick={this.handleDecrement}>-</Button>
        <Text>{this.state.count}</Text>
      </div>
    )
  }
}

export default Counter
