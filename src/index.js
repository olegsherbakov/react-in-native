import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { connect } from 'react-redux'

import App from 'app'
import AppController from 'app/controller'
import reducer from 'app/reducer'

const store = createStore(reducer)

global.ControlledComponent = function(element, props) {
  if (!new.target) {
    throw Error(`ControlledComponent() must be called with new!`)
  }

  const controller = new AppController(store, connect)

  ReactDOM.render(
    <Provider store={store}>
      <App {...props} />
    </Provider>,
    element
  )

  return () => controller
}
