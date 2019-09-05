module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? './' : '/',
    productionSourceMap:false,
    configureWebpack: {
        // 兼容ie11
        entry: ["babel-polyfill", "./src/main.js"]
    }
}