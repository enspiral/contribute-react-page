const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const Dotenv = require('dotenv-webpack')
const glob = require('glob')

const extractCSS = new ExtractTextPlugin({ filename: './build/static/css/extracted.bundle.css' })

module.exports = {
  entry: {
    'bundle.js': glob.sync('build/static/?(js|css)/main.*.?(js|css)').map(f => path.resolve(__dirname, f))
  },
  output: {
    filename: 'build/static/js/bundle.min.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: extractCSS.extract({ // Instance 1
          fallback: 'style-loader',
          use: [ 'css-loader' ]
        })
      }
    ]
  },
  plugins: [
    new UglifyJsPlugin(),
    extractCSS,
    new Dotenv()
  ]
}
