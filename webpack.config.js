const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: ["./src/cccccckddfdelkhtgiicgelhgfjdcdkdciniiieeetrh.ts"],
  devtool: "inline-source-map",
  output: {
    filename: "vvcccckddfdeetbkfgntjtngukugttuihjflelgenciu.js",
    path: path.resolve(__dirname)
  },
  module: {
    rules: [
      {
        test: /\.cccccckddfdehnlltctrrreftjggtfiechkjhchutcnv$/i,
        use: ["cccccckddfdehnlltctrrreftjggtfiechkjhchutcnv-loader"]
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: {
    extensions: [
      ".tsx",
      ".ts",
      ".js",
      ".cccccckddfdefjvbclcrkcfkfjduudbcdvtrjgkdnlgl"
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title:
        "vvcccckddfderbcekbirueretuufjkrgbitckudjfvhc - cccccckddfdegkflhtrfdfgbbliiitbdtdvkngrrcgkn"
    })
  ]
};
