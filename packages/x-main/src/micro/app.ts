const apps = [
  {
    name: 'x-find', // 发现子应用
    entry: '//localhost:8081',
    container: '#micro_wrapper',
    activeRule: '/findPage'
  },
  {
    name: 'x-channel', // 频道子应用
    entry: '//localhost:8082',
    container: '#micro_wrapper',
    activeRule: '/channelPage'
  }
]
export default apps
