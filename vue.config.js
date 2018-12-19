module.exports = {
  baseUrl:
    process.env.NODE_ENV === "production" ? `${process.cwd()}/dist/` : "/",
  devServer: {
    port: 8888
  },
  configureWebpack: config => {
    config.target = "electron-renderer";
  }
};
