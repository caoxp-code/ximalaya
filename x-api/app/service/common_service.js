/**
 * 根据配置的第三方地址请求，返回相应的数据
 */
const {Service} = require('egg')
const querys = require('../../xiami.data.url').urls
class CommonService extends Service {
  async index ({name, method = 'get', data} = {}) {
    const {config, logger, ctx} = this
    const keys = Object.keys(querys)
    logger.info('query keys:%o, filter: %s', keys, `${method} ${name}`)
    const key = keys.filter(r => r === `${method} ${name}`)
    if (key.length > 0) {
      const opt = {method, data, dataType: 'json'}
      if (method === 'get') opt.dataAsQueryString = true
      const url = `${config.xiami_api_host}${querys[key[0]]}`
      logger.info('xima url:%s', url)
      const ret = await ctx.curl(url, opt)
      return ret.data
    }
  }
}
module.exports = CommonService
