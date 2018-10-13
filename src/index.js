import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from 'app/reducer'
import App from 'app'

global.ControlledComponent = function(element, props = {}) {
  const store = createStore(reducer)
  const resize = ({ width, height }) =>
    store.dispatch({ type: `RESIZE`, width, height })

  global.addEventListener(`resize`, () => {
    const { innerWidth, innerHeight } = global

    resize({ width: innerWidth, height: innerHeight })
  })

  const { innerWidth, innerHeight } = global

  resize({ width: innerWidth, height: innerHeight })

  ReactDOM.render(
    <Provider store={store}>
      <App {...props} />
    </Provider>,
    element
  )

  return () => ({
    create: () => store.dispatch({ type: `CREATE` }),
    edit: (id, payload) => store.dispatch({ type: `EDIT`, id, payload }),
    shuffle: () => store.dispatch({ type: `SHUFFLE` }),
    remove: id => store.dispatch({ type: `DELETE`, id }),
    clear: () => store.dispatch({ type: `CLEAR` }),
  })
}
