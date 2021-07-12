module.exports = {
  cluster: {
    listen: { // 设置启动信息
      port: 3000,
      hostname: '10.201.40.52'
    }
  },
  keys: 'my-ximalaya-secret-key',
  xiami_api_host: 'https://www.ximalaya.com/revision',
  middleware: ['cors', 'parseBody'],
  // 配置cors，需要同时配置安全中的白名单
  security: {
    domainWhiteList: ['http://10.201.40.52:8080/']
  },
  //配置跨域信息
  cors: {
    origin: '*',
    allowMethods: ['GET', 'POST'],
    credentials: true // 配置是否可以提交cookie
    // exposeHeaders:
    // allowHeaders:
  }
}