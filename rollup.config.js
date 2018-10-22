import { eslint } from 'rollup-plugin-eslint';
import { uglify } from 'rollup-plugin-uglify';
import babel from 'rollup-plugin-babel'
import pkg from './package.json';

export default [{
  input: 'src/tag.js',
  output: {
    interop: false,
    format: 'iife',
    name: 'tag',
    file: pkg.browser,
  },
  plugins: [
    eslint(),
    babel({ exclude: 'node_modules/**' }),
    uglify(),
  ]
}, {
  input: 'src/tag.js',
  output: [
    { file: pkg.main, format: 'cjs' },
    { file: pkg.module, format: 'es' },
  ],
}];
