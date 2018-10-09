const path = require('path');

module.exports = {
  mode: `production`,
  entry: `./src/index.js`,
  output: {
    path: path.resolve(__dirname, `public`),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: `babel-loader`,
        query: {
          cacheDirectory: true
        }
      }
    ]
  },
  resolve: {
    extensions: [`.js`, `.json`],
    modules: [`node_modules`, path.resolve(__dirname, `src`)]
  }
}
