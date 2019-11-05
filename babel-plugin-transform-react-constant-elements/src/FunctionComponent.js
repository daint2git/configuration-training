import React from 'react'
import PropTypes from 'prop-types'

const FunctionComponent = ({ foo, bar, baz }) => (
  <div>
    {foo}
    {bar}
    {baz}
  </div>
)

FunctionComponent.propTypes = {
  foo: PropTypes.string,
  bar: PropTypes.string,
  baz: PropTypes.string,
}

export default FunctionComponent
