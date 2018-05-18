const path = require('path')

// console.log(path.join(__dirname, 'public')); jak sprawdzic absolutna sciezke

module.exports = (env) => {
    const isProduction = env === 'production';
    return {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
        
            test: /\.s?css$/, //binduje wszystko co ma konie .css
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]

    },
    devtool: isProduction ? "source-map" : 'cheap-module-eval-source-map', //przydaje sie do debugowania
    devServer: {
        contentBase: path.join(__dirname, 'public'), //dzieki temu nie musimy miec bundle.js w public dir
        historyApiFallback: true //dzieki temu Route wie gdzie ma wyrenderowac 
    }
}
}

//loader 