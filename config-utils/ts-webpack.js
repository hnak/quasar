const appPaths = require('quasar-cli/lib/build/app-paths');

module.exports = function(webpackConfig) {
    webpackConfig.resolve.extensions.push('.ts', '.tsx');

    webpackConfig.resolve.alias.router = appPaths.resolve.src('router');
    webpackConfig.resolve.alias.store = appPaths.resolve.src('store');

    webpackConfig.module.rules.push({
        test: /\.ts(x?)$/,
        use: [
            {
                loader: 'babel-loader'            
            },
            {
                loader: 'ts-loader',
                options: {
                    appendTsSuffixTo: [/\.vue$/]
                }
            }
        ],
        include: [
            appPaths.srcDir
        ]
    });
}
