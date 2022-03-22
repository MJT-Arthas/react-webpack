const webpack = require("webpack"); // 访问内置的插件
const path = require("path");
const ProgressBarPlugin = require("progress-bar-webpack-plugin");
const handler = (percentage, message, ...args) => {
  // e.g. Output each progress message directly to the console:
  console.info((percentage * 100).toFixed(2) + "%", message, ...args);
  if (percentage == 100) {
    console.clear();
  }
};
module.exports = {
  entry: {
    index: "./src/index.tsx",
  },
  plugins: [new webpack.ProgressPlugin(handler)],
  //   mode: "development",
  output: {
    filename: "js/bundle.js",
    path: path.resolve(__dirname, "./dist"),
    publicPath: "/",
  },
  stats: "normal",
  // { assets: false, timings: true },
  resolve: {
    //下面后缀的文件导入时可以省略文件名，js必须要有，否则会react.js文件会无法被解析
    extensions: [".ts", ".tsx", ".js"],
    alias: {
      "@": path.resolve("src"),
      // "@component": path.resolve("src/component"),
      // "@pages": path.resolve("src/pages"),
      // "@utils": path.resolve("src/utils"),
    },
  },
  devtool: "source-map",
  devServer: {
    //告诉服务器从哪个目录中提供内容。只有在你想要提供静态文件时才需要
    static: {
      directory: path.join(__dirname, "dist"),
    },
    historyApiFallback: true,

    compress: false, //是否压缩
    port: 12333, //端口号
    host: "0.0.0.0", //外部服务器可以访问
    open: false, //是否运行时打开浏览器
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          "ts-loader",
          {
            loader: "ui-component-loader",
            options: {
              lib: "antd",
              camel2: "-",
              style: "style/css.js",
            },
          },
        ],
        // the path you import antd
        // include: path.resolve("node_modules/antd"),
      },

      //加载json，png等文件
      //安装npm install --save-dev file-loader
      {
        test: /\.[(png)|(obj)|(json)]$/,
        loader: "file-loader",
      },
      //加载scss
      //安装npm install --save-dev css-loader
      //npm install style-loader --save-dev
      {
        test: /\.scss$/,

        exclude: /(node_modules)/,
        use: [
          "style-loader",
          {
            loader: "css-loader",

            options: {
              modules: {
                localIdentName: "[path][name]__[local]",
              },
            },
          },
          "sass-loader",
        ],
      },
      {
        //antd样式处理
        test: /\.css$/,
        exclude: /(src)/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
            },
          },
        ],
      },
      {
        test: /.less$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader", // translates CSS into CommonJS
          },
          {
            loader: "less-loader", // compiles Less to CSS
            options: {
              modifyVars: {
                "primary-color": "#ff0000",
              },
              javascriptEnabled: true,
            },
          },
        ],
      },
    ],
  },
};
