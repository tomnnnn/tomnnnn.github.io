const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path')

module.exports = merge(common, {
    mode: 'development',
    watch: true,
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    devServer: {
        contentBase: './dist',
    },

    module: {
        rules: [
            //---html---
            {
                test: /\.(html|php)$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            }
        ]
    }
})