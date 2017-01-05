var webpack = require('webpack');


module.exports = {
  entry: {
  app: ['webpack/hot/dev-server', './javascripts/index.jsx']
},
output: {
  path: './public/built',
  filename: 'bundle.js',
  publicPath: 'http://localhost:8080/built/'
},
devServer: {
  contentBase: './public',
  publicPath: 'http://localhost:8080/built/'
},
module: {
 loaders: [
   { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
   { test: /\.css$/, loader: 'style!css?modules', include: /flexboxgrid/ },
   { test: /\.less$/, loader: 'style-loader!css-loader!less-loader'},
   { test: /\.(png|jpg|svg)$/, loader: 'url-loader?limit=8192' }
 ]
},
 plugins: [new webpack.HotModuleReplacementPlugin()],
 target: 'electron-renderer'


}