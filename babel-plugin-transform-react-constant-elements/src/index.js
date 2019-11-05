import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import FunctionComponent from './FunctionComponent'
import ClassComponent from './ClassComponent'

const App = () => (
  <div>
    <FunctionComponent foo="foo" bar="bar" baz="baz" />
    <ClassComponent foo="foo" bar="bar" baz="baz" />
  </div>
)

ReactDOM.render(<App />, document.getElementById('app'))
