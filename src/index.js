import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from 'app'
import reducer from 'app/reducer'

global.ControlledComponent = function(element, props = {}) {
  if (!new.target) {
    throw Error(`ControlledComponent() must be called with new!`)
  }

  const store = createStore(reducer)
  const hooks = {
    create: () => store.dispatch({ type: `CREATE` }),
    edit: (id, payload) => store.dispatch({ type: `EDIT`, id, payload }),
    shuffle: () => store.dispatch({ type: `SHUFFLE` }),
    remove: id => store.dispatch({ type: `DELETE`, id }),
  }

  ReactDOM.render(
    <Provider store={store}>
      <App {...props} />
    </Provider>,
    element
  )

  return () => hooks
}
