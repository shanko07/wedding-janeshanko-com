var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

const { resolve } = require('path');

var config = {
    context: resolve(__dirname, 'src'),

      entry: [
    //'react-hot-loader/patch',
    // activate HMR for React

    'webpack-dev-server/client?http://localhost:8080',
    // bundle the client for webpack-dev-server
    // and connect to the provided endpoint

    'webpack/hot/only-dev-server',
    // bundle the client for hot reloading
    // only- means to only hot reload for successful updates

    './client/app/wedding.jsx'
    // the entry point of our app
  ],
    
  output: {
    filename: 'bundle.js',
    // the output bundle

    path: resolve(__dirname, 'src/client/public'),

    publicPath: '/'
    // necessary for HMR to know where to load the hot update chunks
  },
    
  devServer: {
    hot: true,
    // enable HMR on the server

    contentBase: resolve(__dirname, 'src/client/public'),
    // match the output path

    publicPath: '/'
    // match the output `publicPath`
  },
    
    module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loaders: ['react-hot-loader', 'babel-loader']
      },
        {
  test: /\.css$/,
  loader: 'style-loader'
}, {
  test: /\.css$/,
  loader: 'css-loader',
  query: {
    modules: true,
    localIdentName: '[name]__[local]___[hash:base64:5]'
  }
}, {
    test : /\.(png|jpg)$/,
    loader : 'url-loader'
}
    ]
  },
    plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // enable HMR globally

    new webpack.NamedModulesPlugin(),
    // prints more readable module names in the browser console on HMR updates
  ]
};

module.exports = config;