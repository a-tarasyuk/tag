module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai'],
    
    files: [
      'lib/*.js',
      'test/*.js'
    ],

    client: {
      mocha: {
        ui: 'tdd'
      }
    },

    exclude: [],
    preprocessors: {},
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome', 'Firefox'],
    singleRun: true
  });
};