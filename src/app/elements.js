import React from 'react'
import { connect } from 'react-redux'
import Element from './element'

const Elements = ({ elements }) =>
  elements.map(({ id, title, arr }, index) => (
    <React.Fragment key={id}>
      <Element title={title} arr={arr} zIndex={index} />
    </React.Fragment>
  ))

export default connect(state => ({ ...state }))(Elements)
