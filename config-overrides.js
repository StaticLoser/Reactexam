const { override, fixBabelImports, addWebpackAlias } = require('customize-cra');
const path = require('path')
module.exports = {
    webpack: override(
        fixBabelImports('import', {
            libraryName: 'antd',
            libraryDirectory: 'es',
            style: 'css',
        }),
        addWebpackAlias({
            //路径别名
            '@src': path.resolve(__dirname, 'src'),
            '@containers': path.resolve(__dirname, './src/containers'),
            '@action': path.resolve(__dirname, './src/redux/action'),
            '@redcuer': path.resolve(__dirname, './src/redux/redcuer'),
            '@redux': path.resolve(__dirname, './src/redux'),
        }),
        (config) => {
            //暴露webpack的配置
            // 去掉打包生产map 文件
            config.devtool = config.mode === 'development' ? 'cheap-module-source-map' : false;
            //在报错的状态下才输出日志
            config.stats = 'errors-only' || 'errors-warnings'
            return config
        }
    ),
}