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
          "css-loader"
        ]
      },
      {
        test: /\.less$/,
        // 从右往左的
        use: [
          "style-loader",
          "css-loader",
          "less-loader"
        ]
      }
    ]
  }
}