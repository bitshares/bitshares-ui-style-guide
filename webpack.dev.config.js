const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
    
    devtool: "cheap-module-eval-source-map",
    
    mode: "development",
    
    devServer: {
        hot: true,
        //     contentBase: path.resolve(__dirname, "app"),
    },
    
    entry: [
        path.resolve(__dirname, "app/index.js"),
    ],
    
    output: {
        path      : path.resolve(__dirname, "dist"),
        publicPath: "",
    },
    
    context: path.resolve(__dirname, "app"),
    
    resolve: {
        extensions: [".js", ".jsx"],
        
        modules: [
            path.resolve(__dirname, "app"),
            path.resolve(__dirname, "node_modules"),
        ],
        
        alias: {
            'react-dom': '@hot-loader/react-dom'
        },
    },
    
    plugins: [
        new HtmlWebpackPlugin({     // Create HTML file that includes references to bundled CSS and JS.
            template: 'index.html',
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
                    'style-loader',
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
                test   : /\.scss$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    {
                        loader : 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: "sass-loader",
                        query : {
                            sourceMap: false,
                        },
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
