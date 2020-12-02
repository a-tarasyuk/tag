module.exports = function (config) {
  config.set({
    files: [
      {
        pattern: 'test/**/*.spec.js',
        watched: false,
      },
    ],

    preprocessors: {
      'test/**/*.spec.js': ['rollup'],
    },

    frameworks: ['jasmine'],
    autoWatch: true,
    reporters: ['spec'],
    logLevel: config.LOG_INFO,
    basePath: '',
    colors: true,
    port: 9876,

    rollupPreprocessor: {
      plugins: [require('rollup-plugin-buble')()],
      output: { format: 'iife', name: 'tag', sourcemap: 'inline' },
    },

    customLaunchers: {
      ChromeHeadlessNoSandbox: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox'],
      },
    },
  });
};
