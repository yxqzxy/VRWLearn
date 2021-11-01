const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const path = require("path")
module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "build.js",
    path: path.resolve(__dirname, "./build"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // 从右往左的
        use: [
          "style-loader",
          "css-loader",
          "postcss-loader"
        ]
      },
      {
        test: /\.less$/,
        // 从右往左的
        use: [
          "style-loader",
          "css-loader",
          "less-loader",
          "postcss-loader"
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        // type: "asset/resource",
        type: "asset",
        generator: {
          filename: "img/[name].[hash:6][ext]"
        },
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024
          }
        }
      },
      {
        test: /\./
      }
    ]
  },
  plugin: [
    new CleanWebpackPlugin(),
  ]
}