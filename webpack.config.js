var ExtractTextPlugin = require("extract-text-webpack-plugin");
var LiveReloadPlugin = require('webpack-livereload-plugin');
const combineLoaders = require('webpack-combine-loaders');

module.exports = {
    entry: {
        App: [ './src/ui/App.js' ]
    },
    output: {
        path: './www/build',
        publicPath: '/build/',
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: combineLoaders([{
                    loader: 'babel',
                    query: {
                        presets: ['es2015', 'react', 'stage-1'],
                        compact: false,
                    },
                }]),
            },
            {
                test: /\.sass$/,
                exclude: /svg\-edit\.sass$/,
                loader: 'style!css!sass?indentedSyntax'
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            {
                test: /\.png$/,
                loader: "url?mimetype=image/png&limit=10000"
            },
            {
                test: /svg\-edit\.sass$/,
                loader: ExtractTextPlugin.extract("css!sass?indentedSyntax")
            }
        ]
    },
    plugins: [
        new LiveReloadPlugin()
    ]
};