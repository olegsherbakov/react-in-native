import React from 'react'

export default class App extends React.Component {
  render() {
    const { x, y } = this.props

    return (
      <div onClick={this.onClick}>
        X: {x}, Y: {y}
      </div>
    )
  }

  onClick = event => {
    console.log(`event`, event)
    console.log(`this`, this)
    console.log(`this.props`, this.props)
    console.log(`this.props.callback`, this.props.callback)
  }
}
