var uglify    = require('broccoli-uglify-js'),
    pickFiles = require('broccoli-static-compiler'); 

var app = pickFiles('lib', {
  srcDir: '/',
  files: ['**.js'],
  destDir: '/'
});

module.exports = uglify(app, {
  compress: true,
  mangle: true
});