import babelrc from 'babelrc-rollup';
import babel from 'rollup-plugin-babel';
import filesize from 'rollup-plugin-filesize';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';
import { minify } from 'uglify-js-harmony';
import replace from 'rollup-plugin-replace';

export default {
  entry: 'src/index.js',
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    nodeResolve({
      jsnext: true,
      main: true
    }),
    commonjs(),
    babel({
      exclude: 'node_modules/**'
    }),
    filesize()
  ],
  targets: [
    {
      dest: 'dist/index.js',
      format: 'iife',
      moduleName: 'rollup-test',
      sourceMap: true
    }
  ]
};
