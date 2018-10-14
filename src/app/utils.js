import random from './random'

const getLeft = width => width * random()

const getTop = height => height * random()

const scalePosition = (x, pattern, value) =>
  pattern === value ? x : Math.floor(x * (value / pattern))

const getScale = () => random().toFixed(3)

const colors = [`red`, `green`, `blue`, `yellow`, `gold`, `pink`]

const getColor = () => colors[Math.floor(random() * colors.length)]

const generateArr = ({ width, height }) => {
  const arr = []

  for (let i = 0; i < random() * 15; i++) {
    const left = getLeft(width)
    const top = getTop(height)
    const scale = getScale()

    arr.push({
      index: i,
      init: {
        width,
        left,
        height,
        top,
      },
      style: {
        transform: `translate(-50%, -50%) scale(${scale}, ${scale}) rotate(${random() *
          71}deg)`,
        left,
        top,
      },
      star: getColor(),
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
