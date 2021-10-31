const path = require("path")
module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "build.js",
    path: path.resolve(__dirname, "./build")
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
        use: [
          "file-loader"
        ]
      }
    ]
  }
}