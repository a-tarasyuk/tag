import commonjs from 'rollup-plugin-commonjs';
import { eslint } from 'rollup-plugin-eslint';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

export default [{
  input: 'src/tag.js',
  output: {
    interop: false,
    format: 'umd',
    name: 'tag',
    file: pkg.browser,
  },
  plugins: [
    eslint(),
    commonjs(),
    terser(),
  ]
}, {
  input: 'src/tag.js',
  output: [
    { file: pkg.main, format: 'cjs' },
    { file: pkg.module, format: 'es' },
  ],
}];
