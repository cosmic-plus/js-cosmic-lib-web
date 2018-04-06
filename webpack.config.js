const webpack = require('webpack')

const config = {
  devtool: 'source-map',
  module: {
    rules: [
     {
        test: /\.(js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}

const library = Object.assign({}, config, {
  entry: './src/cosmic-lib.js',
  output: {
    path: __dirname,
    filename: 'cosmic-lib.js',
    library: 'cosmicLib',
    libraryTarget: 'umd'
  },
  externals: {
    'stellar-sdk': 'Stellar SDK'
  }
})

const debug = Object.assign({}, config, {
  entry: './src/debug.js',
  output: {
    path: __dirname,
    filename: 'debug.js',
    library: 'debug',
    libraryTarget: 'var'
  },
//  externals: './cosmic-lib.js'
})

module.exports = [ debug, library ]
