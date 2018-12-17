module.exports = {
  baseUrl:
    process.env.NODE_ENV === "production" ? `${process.cwd()}/dist/` : "/",
  devServer: {
    port: 8888
  }
};
