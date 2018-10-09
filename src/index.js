import React from 'react'
import ReactDOM from 'react-dom'
import App from 'app'

window.MyComponent = (element, props) => {
  console.log(`#MyComponent props`, props)

  ReactDOM.render(<App {...props} />, element)
}
