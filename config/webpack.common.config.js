const webpack = require("webpack"); // 访问内置的插件
const path = require("path");
module.exports = {
  entry: {
    index: "./src/index.tsx",
  },
  //   mode: "development",
  output: {
    filename: "js/bundle.js",
    path: path.resolve(__dirname, "./dist"),
  },
  resolve: {
    //下面后缀的文件导入时可以省略文件名，js必须要有，否则会react.js文件会无法被解析
    extensions: [".ts", ".tsx", ".js"],
  },
  devtool: "source-map",
  devServer: {
    //告诉服务器从哪个目录中提供内容。只有在你想要提供静态文件时才需要
    static: {
      directory: path.join(__dirname, "dist"),
    },

    compress: false, //是否压缩
    port: 12333, //端口号
    host: "0.0.0.0", //外部服务器可以访问
    open: true, //是否运行时打开浏览器
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/, //不解析node_modules
        loader: "ts-loader",
      },
      //加载json，png等文件
      //安装npm install --save-dev file-loader
      {
        test: /\.[(png)|(obj)|(json)]$/,
        loader: "file-loader",
      },
      //加载css
      //安装npm install --save-dev css-loader
      //npm install style-loader --save-dev
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
