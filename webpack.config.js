const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: process.env.WEBPACK_SERVE ? 'development' : 'production',
  entry: {
    main: path.resolve(__dirname, './src/', 'index.js')
  },
  output: {
    path: path.resolve(__dirname, './dist/'),
    publicPath: '/',
    filename: '[name]-[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/],
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        exclude: [/node_modules/],
        use: [
          'style-loader',
          { loader: 'css-loader', options: { url: false, modules: true } }
        ]
      }
    ]
  },
  devtool: 'source-map',
  serve: {
    open: true,
    port: 8080,
    content: path.resolve(__dirname, 'public')
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'src'),
    inline: true,
    hot: true
  },
  plugins: [new HtmlWebpackPlugin({ template: 'src/index.html' })]
}
