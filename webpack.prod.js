import * as webpack from "webpack";

const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const config = require("./webpack.config.js");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = merge(config, {
    mode: "production",
    devtool: "source-map",
    plugins: [new CleanWebpackPlugin({
        cleanAfterEveryBuildPatterns: ['dist'],
    }), new webpack.HotModuleReplacementPlugin()],
    optimization: {
        minimizer: [new UglifyJsPlugin({ sourceMap: true })],
        splitChunks: {
            chunks: "all"
        }
    },
});
