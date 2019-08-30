import React from 'react'
import Button from './input2'
import Text from './input3'

export const handlePromise = () => {
  return new Promise((resolve, reject) => {
    resolve('hi')
  })
}

export const handleAsyncAwait = async () => {
  const greeting = await Promise.resolve('hi')
  return greeting
}

export const myWeekMap = new WeakMap()

export const mySet = new Set()

export const myArray = Array.from([1, 2, 3], x => x + x)

export const isExistedInArray = ['a', 'b'].includes('a')

export const isExistedInString = 'ab'.includes('a')

class Counter extends React.Component {
  state = { count: 0 }

  handleIncrement = () => {
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
