const webpackDevServer = require("webpack-dev-server");
const webpack = require("webpack");
const webpackConfig = require("../config/webpack.config");
const devServerConfig = require("../config/webpackDevserver.config");

// compile webpack
const compiler = webpack(webpackConfig("development"));

// server webpack compile over a webserver
const serverConfig = devServerConfig();

const devServer = new webpackDevServer(compiler, serverConfig);

devServer.listen(3000, "0.0.0.0", (error) => {
  if (error) console.log(error);
});
