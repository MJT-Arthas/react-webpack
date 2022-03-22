const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
console.log("当前环境:development");
module.exports = {
  mode: "development",
  plugins: [
    //该插件将为你生成一个HTML5文件，其中包括使用script标签的body中的所有webpack包
    //安装npm install --save-dev html-webpack-plugin
    new HtmlWebpackPlugin({
      title: "标题", //用于生成的HTML文档的标题
      template: "./public/index.html", //默认index.html位置
    }),
    new BundleAnalyzerPlugin(),
  ],
};
