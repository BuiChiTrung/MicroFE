
   
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
        microFrontEnd1: 'microFrontEnd1@http://localhost:8082/remoteEntry.js',
        // microFrontEnd2: 'microFrontEnd2@http://localhost:8083/remoteEntry.js',
        // reactMicroFrontEnd3: 'reactMicroFrontEnd3@http://localhost:8084/remoteEntry.js',
        vueMicroFrontEnd4: 'vueMicroFrontEnd4@http://localhost:8085/remoteEntry.js',
        htmlMicroFrontEnd5: 'htmlMicroFrontEnd5@http://localhost:8086/remoteEntry.js'
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};