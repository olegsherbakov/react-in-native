import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducer from 'app/reducer'
import { resize } from 'app/action'
import App from 'app'

global.ControlledComponent = function(element, props = {}) {
  const store = createStore(reducer, applyMiddleware(thunk))

  global.addEventListener(`resize`, () => store.dispatch(resize(global)))

  store.dispatch(resize(global)).then(() =>
    ReactDOM.render(
      <Provider {...{ store }}>
        <App {...props} />
      </Provider>,
      element
    )
  )

  return () => ({
    create: () => store.dispatch({ type: `CREATE` }),
    shuffle: () => store.dispatch({ type: `SHUFFLE` }),
    remove: id => store.dispatch({ type: `DELETE`, id }),
    clear: () => store.dispatch({ type: `CLEAR` }),
  })
}
