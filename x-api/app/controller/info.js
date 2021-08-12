const Controller = require('egg').Controller
class InfoController extends Controller {
  async details () {
    const {ctx, service} = this
    const {type, id} = ctx.params
    const ret = await service.commonService.index({name: 'tdk', data: {typeName: 'ALBUM', uri: `/${type}/${id}/`}})
    // 组装下页面的数据
    let data = {}
    if (ret && ret.data && ret.data.tdkMeta) {
      data = ret.data.tdkMeta
      Object.assign(data, {
        catogaryType: '少儿',
        imgIcon: 'https://imagev2.xmcdn.com/storages/af3d-audiofreehighqps/92/DD/CKwRIasEndbXAAm9iQC5x8gf.jpg!strip=1&quality=7&magick=jpg&op_type=5&upload_type=album&name=mobile_large&device_type=ios',
        isSerial: 1, // 1为连载
        score: 9.8, // 评分
        listener: 84.1, // 收听人数
        buttons: ['6元开会员，免费听', '购买 | 0.15 喜点/集'],
        imgLists: ['http://fdfs.xmcdn.com/storages/9fb2-audiofreehighqps/E4/F6/CKwRIDoEndbwAAKcLAC5x9BN.jpg', 'http://fdfs.xmcdn.com/storages/b71d-audiofreehighqps/2E/5E/CKwRIJEErzm0AAasqwC_1Yg_.jpg', 'http://fdfs.xmcdn.com/storages/d178-audiofreehighqps/91/CF/CMCoOSUErzm_ABbTdwC_1YuJ.jpg'],
        introduce: [{
          title: '内容简介',
          details: ['陆玄难得发善心，准备把横尸荒野的少女挖个坑埋了，不料少女突然睁开了眼。 他骇了一跳，强作淡定，就见少女挣扎向他爬来……这下陆玄无法淡定了。']
        }, {
          title: '大神作者',
          details: ['冬天的柳叶，大神作者，文字老练，文风爽利。代表作品：《凡女仙葫》、《妙偶天成》、《韶光慢》、《似锦》、《掌欢》、《逢春》.']
        }, {
          title: '领衔演播',
          details: ['主播温水：旁白、冯橙', '代表作：有声剧《听说你喜欢我》《致命亲爱的》《亲爱到的绵羊先生》《神仙肉》《春日宴》。', '毁音绅士：陆玄、陆墨']
        }, {
          title: '特邀主播',
          name: '（男神女神排名无先后）',
          details: ['高旭东：成国公、尤大舅等', '配音演员 代表作:影视剧《老九门》等；有声剧《听说你喜欢我》《神仙肉》等', '张占坤：冯尚书、汪景等', '配音演员 代表作：《一人之下》等']
        }, {
          title: '大神主播',
          name: '（男神女神排名无先后）',
          details: ['润为有声：庆春帝、欧阳庆', '讲故事的周默：韩呈硕、贺北等']
        }],
        sounds: [{
          type: 1, // 1试听，2购买
          name: '逢春-片花（新书《日月的容曜》抽奖）',
          uri: '/youshengshu/50342705/424768142',
          count: 2.7,
          time: '1月前'
        }, {
          type: 1, // 1试听，2购买
          name: '逢春001你到底是人是鬼（陆玄：毁音绅士）',
          uri: '/youshengshu/50342705/424768145',
          count: 2.7,
          time: '1月前'
        }, {
          type: 1, // 1试听，2购买
          name: '逢春002我不是壮士（新书《日月的容曜》抽奖）',
          uri: '/youshengshu/50342705/424768240',
          count: 2.7,
          time: '1月前'
        },],
        soundsCount: 126,
        evaluationCount: 122
      })
    }
    ctx.body = {data: data}
  }

  async commonts () {
    const {ctx, service} = this
    const {type, id, infoid} = ctx.params
    const ret = await service.commonService.index({name: 'commonts'})
    console.log(ret)
    ctx.body = ret
  }
}

module.exports = InfoController