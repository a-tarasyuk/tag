module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai'],

    files: [
      'tests.webpack.js'
    ],

    client: {
      mocha: { ui: 'tdd' }
    },

    preprocessors: {
      'tests.webpack.js': ['webpack']
    },

    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome', 'Firefox'],
    singleRun: true,

    webpack: {
      module: {
        loaders: [
          { test: /\.js$/, exclude: /node_modules/, loader: 'babel' }
        ]
      }
    },

    webpackMiddleware: {
      noInfo: true
    }
  });
};