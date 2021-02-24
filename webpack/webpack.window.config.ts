import path from "path";
import webpack from "webpack";
import { CleanWebpackPlugin } from "clean-webpack-plugin";

const config: webpack.Configuration = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: 'window.js',
    library: "myDemo",
    libraryTarget: 'window'
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-typescript",
            ],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
   // new CleanWebpackPlugin(),
  ],
};

export default config;