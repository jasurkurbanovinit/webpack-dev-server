const path = require('path')

module.exports = {
    // mode: 'development',
    entry: './app/app.js',
    output: {
        filename:'bundle.js',
        path: path.resolve(__dirname,'build') 
    },
    //watch: true
    devServer: {
        port: 8080,
        contentBase: path.resolve(__dirname, 'build'),
        hot: true
    },
}