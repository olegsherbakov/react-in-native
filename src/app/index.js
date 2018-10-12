import React from 'react'
import Elements from './elements'

export default class App extends React.Component {
  render() {
    const { x, y } = this.props

    return (
      <React.Fragment>
        init input X: `{x}` Y: `{y}`
        <div onClick={this.onClick} className="container">
          <Elements />
        </div>
      </React.Fragment>
    )
  }

  onClick = event => {
    console.log(
      `#onClick`,
      `\nevent`,
      event,
      `\nthis`,
      this,
      `\nprops`,
      this.props,
      `\ncallback`,
      this.props.callback
    )
  }
}
