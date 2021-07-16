const apps = [
  {
    name: 'x-find', // 发现子应用
    entry: '//10.201.140.75:8081',
    container: '#micro_wrapper',
    activeRule: '/findPage'
  },
  {
    name: 'x-channel', // 频道子应用
    entry: '//10.201.140.75:8082',
    container: '#micro_wrapper',
    activeRule: '/channelPage'
  }
]
export default apps
