const { defineConfig } = require("@vue/cli-service");
const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

// 项目名称
const appName = "xw-view";
// 开发环境启动本地服务的端口号
const port = 9099;

module.exports = defineConfig({
  pages: {
    index: {
      // page 的入口
      entry: "examples/main.js",
      // 模板来源
      template: "public/index.html",
      // 在 dist/index.html 的输出
      filename: "index.html",
    },
  },
  transpileDependencies: true,
  filenameHashing: true,
  lintOnSave: false,
  productionSourceMap: false,
  configureWebpack: (config) => {
    config.name = appName;
    config.cache = {
      type: "filesystem",
      compression: "gzip",
    };
  },
  chainWebpack: (config) => {
    // 移除 prefetch 插件
    config.plugins.delete("prefetch");
    config.plugins.delete("preload");
    config.resolve.alias.set("@", resolve("packages"));
    config.resolve.symlinks(true);

    config.module
      .rule("js")
      .include.add("/packages")
      .end()
      .use("babel")
      .loader("babel-loader");

    config.module
      .rule("images")
      .delete("generator")
      .set("type", "asset/inline");
  },
  css: {
    extract: true,
    sourceMap: false,
  },
  devServer: {
    host: "localhost",
    port,
    open: true,
    client: {
      // 全屏显示编译错误或警告
      overlay: {
        warnings: true,
        errors: true,
      },
    },
  },
});
