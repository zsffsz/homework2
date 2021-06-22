const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/script/a.js',
    },
    output: {
        filename: '[name][chunkhash:8].js',
        path: __dirname + '/dist',
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: './',
                        }
                    },
                    'css-loader',
                    'less-loader',
                ],
            }
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name][contenthash:8].css',
        }),
        new HtmlWebpackPlugin({
            title: 'this is title',
            template: './src/index.html',
            inject: 'body',
            filename: './index.html',
        }),
    ],
}