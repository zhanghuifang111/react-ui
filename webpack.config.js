var webpack = require('webpack');
var path = require('path');

module.exports = {
    devtool:'eval-source-map',
    entry:'./scripts/app.js',
    output:{
        path:path.join(__dirname,'dist'),
        filename:'bundle.js',
        publicPath:'/dist/'
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.UglifyJsPlugin({minimize:true}),
        new webpack.ProvidePlugin({
            $:"jquery",
            jQuery:"jquery",
            "window.jQuery":"jquery"
        })
    ],
    module:{
        loaders:[
            {
                test:/\.js$/,
                loaders:['react-hot','babel?presets[]=es2015&presets[]=react'],
                include:path.join(__dirname,'scripts')
            },
            {
                test:/\.css$/,
                loader:'style-loader!css-loader'
            },
            {
                test:/\.scss$/,
                loader:'style!css!sass?sourceMap'
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'url-loader?limit=8192'
            },
              //以下五项配置是字体文件的处理方式
            {
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=application/font-woff"
            }, {
                test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=application/font-woff"
            }, {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=application/octet-stream"
            }, {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file"
            }, {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=image/svg+xml"
            }
        ]
    },
    devServer:{
        contentBase:'./',
        host:'192.168.200.92',
        port:'9090',
        inline:true,
        hot:true
    }
}