"use strict";

const path = require("path");

const resolveApp = (relativePath) => path.resolve(process.cwd(), relativePath);

module.exports = {
  appIndexJs: resolveApp("src/client/index"),
  appPublic: resolveApp("public"),
  appHtml: resolveApp("public/index.html"),
  appBuild: resolveApp("src/server/public"),
  publicUrlOrPath: "/",
  appSrc: resolveApp("src"),
};

module.exports.moduleFileExtensions = [".js", ".jsx", ".json"];
