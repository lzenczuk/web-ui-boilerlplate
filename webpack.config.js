const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.js',

    module: {
        rules: [
            {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
        ]
    },

    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        port: 9000,
        hot: true,
        //open: 'chrome', // Windows
        //open: 'Chrome', // macOS
        //open: 'google-chrome', // linux
        proxy: {
            // Example proxy configuration to avoid CORS errors
            '/eos_api' : {
                target: 'https://node2.liquideos.com:443',
                pathRewrite: {'^/eos_api' : ''}
            }
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        })
    ]
};
