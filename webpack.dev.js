const { merge } = require("webpack-merge");
const config = require("./webpack.config.js");
const webpack = require("webpack");

const watchOptions = {
    ignored: /node_modules/,
    aggregateTimeout: 300,
    poll: 1000
};

module.exports = merge(config, {
    mode: "development",
    devtool: "inline-source-map",
    watch: true,
    watchOptions,
    devServer: {
        hot: true,
        contentBase: "./dist",
        historyApiFallback: true,
        watchOptions
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
});
