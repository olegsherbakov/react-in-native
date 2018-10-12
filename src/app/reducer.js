import { combineReducers } from 'redux'
import random from './random'

const getTop = () => {
  return `${random() * 200}px`
}

const getLeft = () => {
  return `${random() * 500}px`
}

const getWidth = () => {
  return `${random() * 100}px`
}

const getHeight = () => {
  return `${random() * 100}px`
}

const getColor = () => {
  return `rgb(${random() * 254}, ${random() * 254}, ${random() * 254})`
}

const getBackground = () => {
  return `rgb(${random() * 254}, ${random() * 254}, ${random() * 254})`
}

const generateArr = () => {
  const arr = []

  for (let i = 0; i < random() * 10; i++) {
    arr.push({
      index: i,
      style: {
        background: getBackground(),
        height: getHeight(),
        color: getColor(),
        width: getWidth(),
        left: getLeft(),
        top: getTop(),
      },
    })
  }

  return arr
}

const shuffle = a => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

let counter = 0

const elements = (state = [], action) => {
  const { id, type, payload = {} } = action

  if (type === `CREATE`) {
    return [...state, { id: ++counter, title: ``, arr: generateArr() }]
  }

  if (type === `EDIT`) {
    return state.map(x => (x.id === id ? { ...x, ...payload } : x))
  }

  if (type === `DELETE`) {
    return state.filter(element => element.id !== id)
  }

  if (type === `SHUFFLE`) {
    return shuffle(state.slice())
  }

  return state
}

export default combineReducers({ elements })
