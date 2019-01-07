export const resize = ({ innerWidth: width, innerHeight: height }) => {
  return function(dispatch) {
    return Promise.resolve(dispatch({ type: `RESIZE`, width, height }))
  }
}
