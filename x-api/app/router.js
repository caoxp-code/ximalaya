module.exports = app => {
  const {router, controller} = app
  router.get('/category/all', controller.header.category)
  router.get('/home/banner', controller.home.banner)
  router.get('/category/detail/:type/:id', controller.info.details)
  router.get('/category/detail/:type/:id/:infoid', controller.info.commonts)
}