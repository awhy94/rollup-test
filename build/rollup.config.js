import vue from 'rollup-plugin-vue';
import commonjs from 'rollup-plugin-commonjs';

export default [{
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'esm',
  },
  plugins: [
    commonjs(),
    vue(),
  ]
}];