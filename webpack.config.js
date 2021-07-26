const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintWebpackPlugin = require('eslint-webpack-plugin');
const WebpackPwaManifestPlugin = require('webpack-pwa-manifest');
const path = require('path');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin'); 

module.exports = {
    devtool: "source-map",
    output: {
        filename: 'app.bundle.js',
        publicPath : '/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new ESLintWebpackPlugin({
            failOnError: false,
        }),
        new WebpackPwaManifestPlugin({
            name: 'Petgram - Your favorite pet app',
            shortname: 'Petgram',
            description: 'With Petgram you can find domestic animal photos easily',
            background_color: '#fff',
            theme_color: '#8d00ff',
            icons: [
                {
                    src: path.resolve('src/assets/icon.png'),
                    sizes: [96, 128, 192, 256, 384, 512]
                },
                {
                    src: path.resolve('src/assets/maskable-icon.png'),
                    size: '1024x1024',
                    purpose: 'maskable'
                }
            ]
        }),
        new WorkboxWebpackPlugin.GenerateSW({
            runtimeCaching: [
                {
                    urlPattern: new RegExp('https://(res.cloudinary.com|images.unsplash.com)'),
                    handler: 'CacheFirst',
                    options: {
                        cacheName: 'images'
                    }
                },
                {
                    urlPattern: new RegExp('https://petgram-server-juan-seven.vercel.app'),
                    handler: 'NetworkFirst',
                    options: {
                        cacheName: 'api'
                    }
                },
            ]
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options : {
                        presets: [
                            '@babel/preset-env', 
                            '@babel/preset-react'
                        ]
                    }
                }
            }
        ]
    }
};
