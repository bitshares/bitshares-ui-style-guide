const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const config = {
    
    mode: "production",
    
    entry: [
        "./bitshares-ui-style-guide/index.js"
    ],
    
    context: path.resolve(__dirname, "app"),
    
    resolve: {
        extensions: [".js", ".jsx"],
        modules   : [
            path.resolve("./app"),
            path.resolve("./node_modules")
        ]
    },
    
    externals: {
        react             : {
            "commonjs" : "react",
            "commonjs2": "react",
            "amd"      : "react",
            "root"     : "React"
        },
        "react-dom"       : {
            "commonjs" : "react-dom",
            "commonjs2": "react-dom",
            "amd"      : "react-dom",
            "root"     : "ReactDOM"
        },
        "react-router-dom": {
            "commonjs" : "react-router-dom",
            "commonjs2": "react-router-dom",
            "amd"      : "react-router-dom",
            "root"     : "ReactDOM"
        },
        "antd"            : {
            "commonjs" : "antd",
            "commonjs2": "antd",
            "amd"      : "antd"
        }
    },
    
    output: {
        filename      : "[name].js",
        path          : path.resolve(__dirname, "dist"),
        publicPath    : "",
        library       : "bitshares",
        libraryTarget : "umd",
        umdNamedDefine: true
    },
    
    plugins: [
        new MiniCssExtractPlugin({
            filename     : 'styles/style.css',
            chunkFilename: '[id].css',
            ignoreOrder  : false, // Enable to remove warnings about conflicting order
        }),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorPluginOptions: {
                preset: ['default', { discardComments: { removeAll: true } }],
            },
            canPrint: true
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
