var webpack = require('webpack'),
    path = require('path');

module.exports = {
    entry: {
        app: [
            //'webpack-dev-server/client?http://0.0.0.0:8080', // livereload
            './entry.js',
        ],
        vendor: ['react', 'jquery'],
    },
    output: {
        path: path.join(__dirname, '/build'),
        filename: "bundle.js",
        publicPath: 'http://localhost:8899/assets/build/',
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.json'],
        modulesDirectories: ['node_modules', 'bower_components'],
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['babel'],
                exclude: /node_modules|bower_components/
            }
        ]
    },
    plugins: [
        new webpack.ResolverPlugin(
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
        ),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.CommonsChunkPlugin(
            /* chunkName= */"vendor", /* filename= */"vendor.bundle.js"
        )
    ],
    devtool: 'source-map' // source maps with debugging, slow
    //devtool: 'eval-source-map'
};