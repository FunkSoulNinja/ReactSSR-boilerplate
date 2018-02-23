const path = require('path');
const compressionPlugin = require('compression-webpack-plugin');
const webpack = require('webpack');
const merge = require('webpack-merge');

const baseConfig = require('./webpack.base');

const config = {
    entry: './src/client/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    }
    // plugins: [
    //     new webpack.optimize.UglifyJsPlugin(), //minify everything
    //     new compressionPlugin({
    //         asset: '[path].gz[query]',
    //         algorithm: 'gzip',
    //         test: /\.js$|\.css$|\.html$/,
    //         threshold: 10240,
    //         minRatio: 0.8
    //     })
    // ]
};

module.exports = merge(baseConfig, config);
