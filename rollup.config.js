import commonjs from 'rollup-plugin-commonjs';
import { eslint } from 'rollup-plugin-eslint';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

export default [{
  input: 'src/tag.js',
  output: {
    name: 'howLongUntilLunch',
    file: pkg.browser,
    format: 'umd',
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
