module.exports = {
  baseUrl: process.env.NODE_ENV === "DEV" ? "/" : "./",
  devServer: {
    port: 8888
  },
  configureWebpack: config => {
    config.target = "electron-renderer";
    config.node = {
      __dirname: false,
      __filename: false
    };
  }
};
