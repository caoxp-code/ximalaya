module.exports = app => {
  const {router, controller} = app
  router.get('/category/all', controller.header.category)
}