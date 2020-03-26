const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');
module.exports = {
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    autoprefixer(),
                    pxtorem({
                        rootValue: 37.5,//px转为rem
                        propList: ['*']
                    })
                ]
            },
            
        }
    },
    lintOnSave: false,//关闭eslint校验
    devServer: {
        // 自动打开浏览器
        open: true,
        //host: '0.0.0.0',
        port: 8590,
        https: false,
        // TIP 修复热更新失效问题
        hot: true,
        inline: true,
        hotOnly: false,
    }
}