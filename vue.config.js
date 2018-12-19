module.exports = {
  baseUrl:
    process.env.NODE_ENV === "production" ? `${process.cwd()}/dist/` : "/",
  devServer: {
    port: 8888
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === "production") {
      config.output.publicPath = `${process.cwd()}/dist/`;
    }
    config.target = "electron-renderer";
  }
};
