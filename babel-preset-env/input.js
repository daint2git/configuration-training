import React from 'react'
import Button from './input2'

export const handlePromise = () => {
  return new Promise((resolve, reject) => {
    resolve('hi')
  })
}

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

export const mySet = new Set()

export const myWeakSet = new WeakSet()

export const myArray = Array.from([1, 2, 3], x => x + x)

export const isExistedInArray = ['a', 'b'].includes('a')

export const isExistedInString = 'ab'.includes('a')

export const myObject = { name: 'Dai', age: 26 }

export const cloneObject = { ...myObject }

export const { name, ...rest } = myObject

class Counter extends React.Component {
  state = { count: 0, Text: null }

  handleIncrement = () => {
    this.setState(({ count }) => ({ count: count + 1 }))
  }

  handleDecrement = () => {
    this.setState(({ count }) => ({ count: count - 1 }))
  }

  loadComponent() {
    import('./input3').then(Text => {
      this.setState(prevState => ({ ...prevState, Text: Text.default }))
    })
  }

  render() {
    return (
      <div>
        <Button onClick={this.handleIncrement}>+</Button>
        <Button onClick={this.handleDecrement}>-</Button>
        {this.state.Text && <Text>{this.state.count}</Text>}
      </div>
    )
  }
}

export default Counter
