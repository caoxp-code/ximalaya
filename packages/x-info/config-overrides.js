const {name} = require('./package.json')
module.exports = {
  webpack: (config, env) => {
    config.output.library = `${name}-[name]`;
    config.output.libraryTarget = 'umd';
    config.output.jsonpFunction = `webpackJsonp_${name}`;
    config.output.globalObject = 'window';
    return config
  },
  devServer: (configFunc) => {
    return (proxy, alloedhost) => {
      const config  = configFunc(proxy, alloedhost)
      config.headers = {
        'Access-Control-Allow-Origin': '*'
      }
      // 关闭热更新
      config.historyApiFallback = true
      config.hot = false
      config.watchContentBase  =false
      config.liveReload = false
      return config
    }
  }
}