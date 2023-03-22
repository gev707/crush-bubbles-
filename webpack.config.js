const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        bundle: path.resolve(__dirname, 'src/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name][contenthash].js',
        clean: true
    },
    resolve: {
        extensions: ['.js', '.scss', '.css'],
        alias: {
            'images': path.join(__dirname, 'src/assets/images')
        }
    },
    devtool: "source-map",
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true

    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                    }
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "style-loader"
                    }, {
                        loader: "css-loader",
                    },
                    {
                        loader: "resolve-url-loader",
                    },
                    {
                        loader: 'sass-loader',
                        options: { sourceMap: true }
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.(png|jpg|gif)$/i,
                dependency: { not: ['url'] },
                use: [
                    {
                        loader: 'url-loader',
                    },
                ],
                type: 'javascript/auto'
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Crush Bubbles',
            filename: 'index.html',
            template: 'src/main.html'
        })
    ]
}