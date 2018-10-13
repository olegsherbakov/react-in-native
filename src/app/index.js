import React from 'react'
import Elements from './elements'

const App = ({ x, y }) => (
  <React.Fragment>
    init input X: `{x}` Y: `{y}`
    <div className="container">
      <Elements />
    </div>
  </React.Fragment>
)

export default App
