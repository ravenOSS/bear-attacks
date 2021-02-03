import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import nodePolyfills from 'rollup-plugin-node-polyfills'

export default [
	{
		input: './src/getFile.js',
		output: {
			file: './dist/getFileBundle.js',
			format: 'iife',
			name: 'bundleGetFile',
			globals: 'parse',
		},
		plugins: [commonjs(), nodePolyfills(), nodeResolve()],
		external: 'csv-parse',
	},
	{
		input: './src/chart.js',
		output: {
			file: './dist/chartBundle.js',
			format: 'iife',
			name: 'bundleChart',
		},
		plugins: [commonjs(), nodePolyfills(), nodeResolve()],
		external: ['chart'],
	},
]
