import webpack from 'webpack';

export default {
  context: `${ __dirname }/lib`,
  entry: './tag.js',
  output: {
    path: `${ __dirname }/build`,
    filename: 'tag.js',
    libraryTarget: 'umd'
  },

  module: {
    preLoaders: [{
      test: /\.js$/,
      loader: 'eslint',
      exclude: /node_modules/
    }],

    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel'
    }],
  },

  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      mangle: true
    })
  ]
};