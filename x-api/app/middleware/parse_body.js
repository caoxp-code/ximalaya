/**
 * 校验body返回结果，规范化
 * 返回{code, message, data}
 */
const isJson = require('koa-is-json')
module.exports = option => {
  return async function parseBody (ctx, next) {
    await next()
    let body = ctx.body
    let defaultRet = {
      code: 1,
      data: null,
      message: null
    }
    if (isJson(body)) {
      Object.assign(defaultRet, body)
    } else if (body) {
      defaultRet.data = body
    }
    ctx.body = defaultRet
  }
}