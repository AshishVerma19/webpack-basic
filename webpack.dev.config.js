const path = require('path');
//by default it is applied in production config
//const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// add [contenthash] for browser cash
module.exports = {
    entry:'./src',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname,'./dist'),
        publicPath: ''
    },
    mode: 'development',
    devServer: {
        contentBase: path.resolve(__dirname,'./dist'),
        index: 'index.html',
        port: 9000
    },
    plugins: [
        //new TerserPlugin(),
        new MiniCssExtractPlugin({
            filename: 'style.css'
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'webpack basic setup',
            filename: 'index.html',
            meta: {
                viewport: 'width=device-width, initial-scale=1.0'
            }
        })
    ],
    module: {
        rules: [
            {
                test: /\.(png|jpg)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env'],
                        plugins: ['transform-class-properties']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader'    //'style-loader', 'css-loader'
                ]
            }
        ]
    }
}
