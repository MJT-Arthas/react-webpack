const commConfig = require("./config/webpack.common.config");
const developmentConfig = require("./config/webpack.dev.config.js");
const productionConfig = require("./config/webpack.prod.config");
const { merge } = require("webpack-merge");
module.exports = (mode) => {
  if (mode === "production") {
    return merge(commConfig, productionConfig);
  }
  return merge(commConfig, developmentConfig);
};
