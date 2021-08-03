const Controller = require('egg').Controller
class InfoController extends Controller {
  async details () {
    const {ctx, service} = this
    const {type, id} = ctx.params
    const ret = await service.commonService.index({name: 'tdk', data: {typeName: 'ALBUM', url: `/${type}/${id}/`}})
    console.log('ret----', ret)
    ctx.body = ret
  }
}

module.exports = InfoController