"use strict";

const paths = require("./paths");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ErrorOverlayPlugin = require("error-overlay-webpack-plugin");

const postcssNormalize = require("postcss-normalize");
const webpack = require("webpack");

module.exports = (webpackEnv) => {
  const isProd = webpackEnv === "production";
  const isDev = webpackEnv === "development";

  const cssRegex = /\.css$/;
  const cssModuleRegex = /\.module\.css$/;
  const sassRegex = /\.(scss|sass)$/;
  const sassModuleRegex = /\.module\.(scss|sass)$/;

  const getStyleLoaders = (cssOptions, preProcessor) => {
    const loaders = [
      isDev && require.resolve("style-loader"),
      {
        loader: require.resolve("css-loader"),
        options: cssOptions,
      },
      {
        loader: "postcss-loader",
        options: {
          ident: "postcss",
          plugins: () => [
            require("postcss-flexbugs-fixes"),
            require("postcss-preset-env")({
              autoprefixer: {
                flexbox: "no-2009",
              },
              stage: 3,
            }),
            require("autoprefixer"),
            postcssNormalize(),
          ],
          sourceMap: isDev,
        },
      },
    ].filter(Boolean);

    // console.log(loaders);

    if (preProcessor) {
      loaders.push(
        {
          loader: require.resolve("resolve-url-loader"),
          options: {
            sourceMap: isDev,
            root: paths.appSrc,
          },
        },
        {
          loader: require.resolve(preProcessor),
          options: {
            sourceMap: true,
          },
        }
      );
    }

    return loaders;
  };

  return {
    mode: isProd ? "production" : isDev && "development",
    bail: isProd,
    entry: paths.appIndexJs,
    devtool: isDev ? "cheap-module-source-map" : !isProd,
    output: {
      path: isProd ? paths.appBuild : undefined,
      filename: isProd
        ? "static/js/[name].[contenthash:8].js"
        : isDev && "static/js/[name].js",
      publicPath: paths.publicUrlOrPath,
      chunkFilename: isProd
        ? "static/js/[name].[contenthash:8].chunk.js"
        : isDev && "static/js/[name].chunk.js",
    },

    optimization: {
      minimize: isProd,
      splitChunks: {
        chunks: "all",
        name: false,
      },
      runtimeChunk: {
        name: (entrypoint) => `runtime-${entrypoint.name}`,
      },
    },
    resolve: {
      // Attempt to resolve these extensions in order.
      extensions: paths.moduleFileExtensions,
    },
    module: {
      strictExportPresence: true,
      rules: [
        { parser: { requireEnsure: false } },
        {
          oneOf: [
            {
              test: /\.j(s|sx)$/,
              exclude: /node_modules/,
              use: {
                loader: "babel-loader",
              },
            },
            {
              test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
              loader: require.resolve("url-loader"),
              options: {
                name: "static/media/[name].[hash:8].[ext]",
                limit: 10000,
              },
            },
            {
              test: cssRegex,
              exclude: cssModuleRegex,
              use: getStyleLoaders({
                importLoaders: 1,
                sourceMap: isDev,
              }),
              sideEffects: true,
            },
            {
              test: cssModuleRegex,
              use: getStyleLoaders({
                importLoaders: 1,
                sourceMap: isDev,
              }),
            },
            {
              test: sassRegex,
              exclude: sassModuleRegex,
              use: getStyleLoaders(
                {
                  importLoaders: 3,
                  sourceMap: isDev,
                },
                "sass-loader"
              ),
              sideEffects: true,
            },
            {
              test: sassModuleRegex,
              use: getStyleLoaders(
                {
                  importLoaders: 3,
                  sourceMap: isDev,
                },
                "sass-loader"
              ),
            },
            {
              loader: require.resolve("file-loader"),
              exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/],
              options: {
                name: "static/media/[name].[hash:8].[ext]",
              },
            },
          ],
        },
      ],
    },
    plugins: [
      // Generates an `index.html` file with the <script> injected.
      new HtmlWebpackPlugin(
        Object.assign(
          {},
          {
            inject: true,
            template: paths.appHtml,
          },
          isProd
            ? {
                minify: {
                  removeComments: true,
                  collapseWhitespace: true,
                  removeRedundantAttributes: true,
                  useShortDoctype: true,
                  removeEmptyAttributes: true,
                  removeStyleLinkTypeAttributes: true,
                  keepClosingSlash: true,
                  minifyJS: true,
                  minifyCSS: true,
                  minifyURLs: true,
                },
              }
            : undefined
        )
      ),
      new webpack.DefinePlugin({
        __IS_PROD__: isProd,
      }),
      isDev && new ErrorOverlayPlugin(),
      isProd &&
        new MiniCssExtractPlugin({
          filename: "static/css/[name].[contenthash:8].css",
          chunkFilename: "static/css/[name].[contenthash:8].chunk.css",
        }),
    ].filter(Boolean),
  };
};
