
   
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = 
            require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  mode: 'development',
  devServer: {
    port: 8081,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        htmlMfe: 'htmlMfe@http://localhost:8082/remoteEntry.js',
        reactMfe: 'reactMfe@http://localhost:8083/remoteEntry.js',
        vueMfe: 'vueMfe@http://localhost:8084/remoteEntry.js'
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};