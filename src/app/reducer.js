import { combineReducers } from 'redux'
import utils from './utils'

const defaultWidth = 700
const defaultHeight = 400

let counter = 0
let currentSize = { width: defaultWidth, height: defaultHeight }

const elements = (state = [], action) => {
  const {
    id,
    type,
    width = defaultWidth,
    height = defaultHeight,
    payload = {},
  } = action

  if (type === `CREATE`) {
    const arr = utils.generateArr(currentSize)

    return [...state, { id: ++counter, title: ``, arr }]
  }

  if (type === `EDIT`) {
    return state.map(x => (x.id === id ? { ...x, ...payload } : x))
  }

  if (type === `DELETE`) {
    return state.filter(x => x.id !== id)
  }

  if (type === `SHUFFLE`) {
    return utils.shuffleArr(state.slice())
  }

  if (type === `RESIZE`) {
    const prevWidth = currentSize.width,
      prevHeight = currentSize.height

    currentSize = { width, height }

    if (width !== prevWidth && height !== prevHeight) {
      return state.map(x => {
        const arr = utils.resizeArr(x.arr, currentSize)

        return {
          ...x,
          arr,
        }
      })
    }
  }

  if (type === `CLEAR`) {
    return []
  }

  return state
}

export default combineReducers({ elements })
