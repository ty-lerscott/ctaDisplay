const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

dotenv.config();

const package = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../package.json'), 'utf-8'));

console.warn('-----------------------------', path.resolve(__dirname, 'assets'));

const alias = {
	assets: path.resolve(__dirname, 'assets'),
	actions: path.resolve(__dirname, 'actions'),
    components: path.resolve(__dirname, 'components'),
    config: path.resolve(__dirname, 'config'),
    constants: path.resolve(__dirname, 'constants'),
    controllers: path.resolve(__dirname, 'controllers'),
    libraries: path.resolve(__dirname, 'libraries'),
    reducers: path.resolve(__dirname, 'reducers'),
    styles: path.resolve(__dirname, 'styles'),
    utils: path.resolve(__dirname, 'utils'),
    views: path.resolve(__dirname, 'views')
}

module.exports = {
	name: 'client',
	target: 'web',
	entry: [
		'@babel/polyfill',
		'./client/index.js'
	],
	output: {
		path: path.join(__dirname, `../dist/${package.version}/client`),
		filename: 'bundle.js',
		publicPath: '/dist/'
	},
	mode: 'development',
	devtool: 'source-map',
	module: {
		rules: [
			//run all javascript through babel loader
			{
				test: /\.jsx?$/,
				exclude: /(node_modules\/)/,
				loader: 'babel-loader',
			}
		]
	},
	resolve: {
		extensions: ['.js', '.jsx'],
		alias
	},
	plugins: [
		new Dotenv(),
		new webpack.optimize.OccurrenceOrderPlugin(),
		new BundleAnalyzerPlugin({
			analyzerMode: 'static',
			openAnalyzer: false
		})
	]
};