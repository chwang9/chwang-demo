const path = require("path");
const WebpackBar = require("webpackbar");

module.exports = {
  publicPath: './',
  outputDir: './dist',
  productionSourceMap: false,
  lintOnSave: false,
  devServer: {
    // host: '0.0.0.0',
    // port: '9898',
    // proxy: {
    //   '/aidemo': {
    //     target: 'http://localhost:5070',
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/aidemo': '/aidemo'
    //     }
    //   }
    // }
  },
  chainWebpack: config => {
    const svgRule = config.module.rule("svg");
    svgRule.uses.clear();
    svgRule.use("vue-svg-loader").loader("vue-svg-loader");
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.js$/,
          include: path.resolve("src"),
          use: ["thread-loader"]
        }
      ]
    },
    plugins: [new WebpackBar()]
  }
};
