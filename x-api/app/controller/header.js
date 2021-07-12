const {Controller} = require('egg')
class HeaderController extends Controller {
  async category () {
    const {ctx, service, logger} = this
    // 校验出入的参数
    const ret = await service.commonService.index({name: 'all'})
    ctx.body = ret
  }
}
module.exports = HeaderController