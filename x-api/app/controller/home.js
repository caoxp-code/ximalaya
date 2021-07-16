const Controller = require('egg').Controller
class HomeController extends Controller {
  banner () {
    const {ctx} = this
    const banners = [{
      channel: 1,
      contentType: 2,
      coverPath: "https://imagev2.xmcdn.com/storages/7ee0-audiofreehighqps/3A/35/CKwRIaIEsjEeAAHPOQDBDokN.jpg",
      focusId: 20708,
      index: 0,
      longTitle: "落难千金：霍少的倔强小娇妻",
      position: 1,
      url: "/youshengshu/47208001/"
    }, {
      channel: 1,
      contentType: 2,
      coverPath: "https://imagev2.xmcdn.com/storages/75ab-audiofreehighqps/2E/75/CKwRIDoEsi_9AAHk5gDBDUtK.jpg",
      focusId: 20707,
      index: 1,
      longTitle: "逻辑表达力丨说话缜密有趣",
      position: 2,
      url: "/gerenchengzhang/34803781/"
    }, {
      channel: 1,
      contentType: 2,
      coverPath: "https://imagev2.xmcdn.com/storages/9cfb-audiofreehighqps/57/5C/CMCoOSQEoftrAAH3WwC7WxMQ.jpg",
      focusId: 20700,
      index: 2,
      longTitle: "心流：最优体验心理学丨畅销全球28年，影响千万人的幸福秘诀",
      position: 3,
      url: "/gerenchengzhang/38153736/"
    }, {
      channel: 1,
      contentType: 2,
      coverPath: "https://imagev2.xmcdn.com/storages/1aa8-audiofreehighqps/4E/A2/CKwRIJIEpkspAAEoSwC8yS1p.jpg",
      focusId: 20704,
      index: 3,
      longTitle: "逢春",
      position: 4,
      url: "/youshengshu/50342705/"
    }]
    ctx.body = {data: banners}
  }
}
module.exports = HomeController