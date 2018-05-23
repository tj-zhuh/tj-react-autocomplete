var path = require('path');

module.exports = {
  entry: path.join(__dirname, 'src', 'index.js'),
  output: {
    path: path.join(__dirname),
    filename: 'index.js',
    library: 'tjReactAutocomplete',
    libraryTarget: "umd"
  },
  externals: {
    react: 'react',
    antd: 'antd'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      include: [
        path.join(__dirname, 'src')
      ]
    }]
  }
}