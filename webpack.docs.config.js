const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const config = {
    
    mode: "production",
    
    target: "web",
    
    entry: [
        "index.js"
    ],
    
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    
    context: path.resolve(__dirname, "app"),
    
    resolve: {
        extensions: [".js", ".jsx"],
        modules   : [
            path.resolve("./app"),
            path.resolve("./node_modules")
        ]
    },
    
    output: {
        path         : path.resolve(__dirname, 'docs'),
        publicPath   : '/',
        chunkFilename: '[name].[chunkhash].bundle.js',
        filename     : '[name].[chunkhash].js',
    },
    
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp          : /\.css$/g,
            cssProcessor             : require('cssnano'),
            cssProcessorPluginOptions: {
                preset: ['default', {discardComments: {removeAll: true}}],
            },
            canPrint                 : true
        }),
        new HtmlWebpackPlugin({
            template: 'index.html',
            favicon : 'favicon.ico',
            minify  : {
                removeComments               : true,
                collapseWhitespace           : true,
                removeRedundantAttributes    : true,
                useShortDoctype              : true,
                removeEmptyAttributes        : true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash             : true,
                minifyJS                     : true,
                minifyCSS                    : true,
                minifyURLs                   : true
            },
            inject  : true
        })
    ],
    
    module: {
        rules: [
            {
                test   : /\.jsx?$/,
                loaders: [
                    "babel-loader",
                ],
                exclude: /node_modules/,
            },
            {
                test: /(\.css|\.less)$/,
                use : [
                    {
                        loader : MiniCssExtractPlugin.loader,
                        options: {
                            // you can specify a publicPath here
                            // by default it uses publicPath in webpackOptions.output
                            publicPath: './app/',
                        },
                    },
                    {
                        loader : 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    }, {
                        loader: 'less-loader',
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use : [
                    {
                        loader : "url-loader",
                        options: {
                            limit   : 8192,
                            mimetype: "image/png",
                            name    : "images/[name].[ext]",
                        }
                    }
                ],
            },
            {
                test: /\.eot(\?v=\d+.\d+.\d+)?$/,
                use : [
                    {
                        loader : "file-loader",
                        options: {
                            name: "fonts/[name].[ext]"
                        }
                    }
                ],
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use : [
                    {
                        loader : "url-loader",
                        options: {
                            limit   : 8192,
                            mimetype: "application/font-woff",
                            name    : "fonts/[name].[ext]",
                        }
                    }
                ],
            },
            {
                test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/,
                use : [
                    {
                        loader : "url-loader",
                        options: {
                            limit   : 8192,
                            mimetype: "application/octet-stream",
                            name    : "fonts/[name].[ext]",
                        }
                    }
                ],
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                use : [
                    {
                        loader : "url-loader",
                        options: {
                            limit   : 8192,
                            mimetype: "image/svg+xml",
                            name    : "images/[name].[ext]",
                        }
                    }
                ],
            },
        ]
    }
    
};

module.exports = config;
