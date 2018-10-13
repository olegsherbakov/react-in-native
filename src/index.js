import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from 'app/reducer'
import App from 'app'

global.ControlledComponent = function(element, props = {}) {
  const store = createStore(reducer)
  const onResize = ({ width, height }) => {
    store.dispatch({ type: `RESIZE`, width, height })
  }

  global.addEventListener(`resize`, () => {
    const { innerWidth, innerHeight } = global

    onResize({ width: innerWidth, height: innerHeight })
  })

  ReactDOM.render(
    <Provider store={store}>
      <App {...props} />
    </Provider>,
    element
  )

  const { innerWidth, innerHeight } = global

  onResize({ width: innerWidth, height: innerHeight })

  return () => ({
    create: () => store.dispatch({ type: `CREATE` }),
    edit: (id, payload) => store.dispatch({ type: `EDIT`, id, payload }),
    shuffle: () => store.dispatch({ type: `SHUFFLE` }),
    remove: id => store.dispatch({ type: `DELETE`, id }),
    clear: () => store.dispatch({ type: `CLEAR` }),
  })
}
