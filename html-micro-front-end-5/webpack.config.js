const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = 
          require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode: 'development',
    devServer: {
        port: 8086
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'htmlMicroFrontEnd5',
            filename: 'remoteEntry.js',
            exposes: {
              './HtmlMicroFrontEnd5Index': './src/index',
            },
        }),
        new HtmlWebpackPlugin({
          template: './public/index.html',
        }),
      ],
}