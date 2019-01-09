module.exports = {
    configureWebpack: {
        module: {
            rules: [
                {
                    test: /\.(react)\.?(jsx|tsx)(\?.*)?$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-react'],
                            plugins: ['transform-react-jsx']
                        }
                    }
                },
            ]
        }
    },
}
