import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ClassComponent extends Component {
  render() {
    const { foo, bar, baz } = this.props

    return (
      <div>
        {foo}
        {bar}
        {baz}
      </div>
    )
  }
}

ClassComponent.propTypes = {
  foo: PropTypes.string,
  bar: PropTypes.string,
  baz: PropTypes.string,
}

export default ClassComponent
