const {name} = require('./package.json')
module.exports = {
  webpack: (config, env) => {
    config.output.library = `${name}-[name]`;
    config.output.libraryTarget = 'umd';
    config.output.jsonpFunction = `webpackJsonp_${name}`;
    config.output.globalObject = 'window';

    // 设置css样式中将-命名的转换成驼峰方式
    let oneOf = config.module.rules.filter(r => r.oneOf)
    oneOf = oneOf[0].oneOf
    const csstest = oneOf.filter(r => String(r.test) === String(/\.module\.(scss|sass)$/) || String(r.test) === String(/\.module\.css$/))
    const cssrules = csstest.filter(r => r.use && r.use.filter(u => u.loader && u.loader.includes('/css-loader/')).length > 0)

    for(let u of cssrules[0].use) {
      if (u && u.loader && u.loader.includes('/css-loader/')) {
        Object.assign(u.options.modules, {exportLocalsConvention: 'camelCase'})
      }
    }
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