const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const Dotenv = require('dotenv-webpack')

module.exports = {
    entry: './src/client/index.js',
    mode: 'development',
    target: 'web',
    output: {
        libraryTarget: 'var',
        library: 'Client'
    },
    devtool: 'source-map',
    stats: 'verbose',
    devServer: {
        host: 'localhost',
        proxy: {
            context: () => true,
            target: "http://localhost:8081",
            secure: false
        }
    },
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|gif)$/i,
                use: [
                   {
                    loader: 'file-loader',
                    }
                ],
            },
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                use: [ 'style-loader', 'css-loader', 'sass-loader' ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/view/index.html",
            filename: "./index.html",
        }),
        new CleanWebpackPlugin({
            // Simulate the removal of files
            dry: true,
            // Write Logs to Console
            verbose: true,
            // Automatically remove all unused webpack assets on rebuild
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false
        }),
        new Dotenv()
    ]
}