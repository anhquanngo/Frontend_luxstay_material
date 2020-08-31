const path = require("path");

module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        useBuiltIns: "entry",
        corejs: 3,
      },
    ],
    [
      "@babel/preset-react",
      {
        useBuiltIns: true,
      },
    ],
  ],
  plugins: [
    ["@babel/plugin-transform-runtime", { corejs: false, regenerator: true }],
    [
      "@babel/plugin-proposal-class-properties",
      {
        loose: true,
      },
    ],
    "@babel/plugin-proposal-numeric-separator",
    "@babel/plugin-proposal-optional-chaining",
    "@babel/plugin-proposal-nullish-coalescing-operator",
    [
      "module-resolver",
      {
        alias: {
          "@root": path.resolve("src/client"),
          "@shared": path.resolve("src/client/shared"),
          "@components": path.resolve("src/client/shared/components"),
          "@services": path.resolve("src/client/services"),
          "@modules": path.resolve("src/client/modules"),
        },
      },
    ],
  ],
};
