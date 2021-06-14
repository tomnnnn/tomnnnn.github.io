const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const fs = require('fs')

// Our function that generates our html plugins
function generateHtmlPlugins (templateDir) {
  // Read files in template directory
  const templateFiles = fs.readdirSync(path.resolve(__dirname, templateDir))
  return templateFiles.map(item => {
    // Split names and extension
    const parts = item.split('.')
    const name = parts[0]
    const extension = parts[1]
    // Create new HTMLWebpackPlugin with options
    return new HTMLWebpackPlugin({
      filename: `${name}.${extension}`,
      template: path.resolve(__dirname, `${templateDir}/${name}.${extension}`),
      chunks: [`${name}`]
    })
  })
}

const generateHtml = generateHtmlPlugins('./src/templates')
//const generatePhp = generateHtmlPlugins('./src/php')

module.exports = {
    mode: process.env.WEBPACK_MOD,

    entry: {
        index: './src/index.js'
    },
    resolve: {
        modules: ['node_modules']
    },
    module: {
        rules: [
            //---json---
            {
                type: 'javascript/auto',
                test: /\.(json|geojson)$/,
                use: {
                    loader: 'json-loader'
                }
            },
            //---scss---
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {loader: 'sass-loader'}
                ]
            },
            //---babel---
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            //---images (assets) ----
            {
                test: /\.(png|jpg|jpeg|svg|gif)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'media/'
                    }
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        })
    ]
    .concat(generateHtml)
}