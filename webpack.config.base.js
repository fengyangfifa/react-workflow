const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports.cssRegex = /\.css$/;
module.exports.cssModuleRegex = /\.module\.css$/;
module.exports.sassRegex = /\.(scss|sass)$/;
module.exports.sassModuleRegex = /\.module\.(scss|sass)$/;

module.exports.getStyleLoaders = (cssOptions = {}, isDevelopment = true, preProcessor = '') => {
  const loaders = [
    isDevelopment
      ? require.resolve("style-loader")
      : {
        loader: MiniCssExtractPlugin.loader,
      },
    {
      loader: require.resolve("css-loader"),
      options: cssOptions
    },
    {
      loader: "postcss-loader"
    }
  ];

  if (preProcessor) {
    loaders.push(
      {
        loader: require.resolve("resolve-url-loader"),
        options: {
          root: path.resolve(__dirname, 'src'),
          sourceMap: true
        }
      },
      {
        loader: require.resolve(preProcessor),
        options: {
          sourceMap: true
        }
      }
    );
  }

  return loaders;
};

module.exports.baseConf = {
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: "babel-loader"
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '...']
  },
  output: {
    clean: true,
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash:8].js",
    chunkFilename: "[name].[contenthash:8].chunk.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "react-workflow",
      template: "public/index.html"
    })
  ]
}
