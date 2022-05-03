const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { VueLoaderPlugin } = require('vue-loader')


module.exports = {
    mode: 'development',
    // entry: './src/main.js',
    devServer: {
        port: 8084
    },
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
          ],
        },
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        },
        // this will apply to both plain `.js` files
        // AND `<script>` blocks in `.vue` files
        {
          test: /\.js$/,
          loader: 'babel-loader'
        },
        // this will apply to both plain `.css` files
        // AND `<style>` blocks in `.vue` files
        {
          test: /\.css$/,
          use: [
            'vue-style-loader',
            'css-loader'
          ]
        }
      ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new ModuleFederationPlugin({
            name: 'vueMfe',
            filename: 'remoteEntry.js',
            exposes: {
              './VueMfeIndex': './src/index',
            },
        }),
        // new HtmlWebpackPlugin({
        //   template: './public/index.html',
        // }),
    ],
}