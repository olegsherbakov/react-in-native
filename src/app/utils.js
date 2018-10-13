import random from './random'

const getLeft = width => width * random()

const getTop = height => height * random()

const getWidth = () => `${random() * 100}px`

const getHeight = () => `${random() * 100}px`

const getColor = () =>
  `rgb(${random() * 254}, ${random() * 254}, ${random() * 254})`

const getBackground = () =>
  `rgb(${random() * 254}, ${random() * 254}, ${random() * 254})`

const scalePosition = (x, pattern, value) =>
  pattern === value ? x : Math.floor(x * (value / pattern))

const generateArr = ({ width, height }) => {
  const arr = []

  for (let i = 0; i < random() * 10; i++) {
    const left = getLeft(width)
    const top = getTop(height)

    arr.push({
      index: i,
      init: {
        width,
        left,
        height,
        top,
      },
      style: {
        background: getBackground(),
        height: getHeight(),
        color: getColor(),
        width: getWidth(),
        left,
        top,
      },
    })
  }

  return arr
}

const resizeArr = (arr, { width, height }) =>
  arr.map(x => ({
    ...x,
    style: {
      ...x.style,
      left: scalePosition(x.init.left, x.init.width, width),
      top: scalePosition(x.init.top, x.init.height, height),
    },
  }))

const shuffleArr = arr => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

export default {
  generateArr,
  shuffleArr,
  resizeArr,
}
