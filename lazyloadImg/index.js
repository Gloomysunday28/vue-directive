let defaultConfig = {}

let io

const directive = {
  bind(e, binding) {
    const img = new Image()
    if (binding.modifiers.immedite) { // 立即渲染图片
      return e.src = binding.value
    }

    const src = binding.value // 绑定真正的图片
    
    e.src = defaultConfig.loading // 预先加载配置好的loading图片
    io = new IntersectionObserver(
      entries => {
        entries.forEach(v => {
          if (v.isIntersecting && src !== e.src) {
            img.src = src

            /*
              解码, 将图片预加载, 以便在添加图片到DOM上时能够立即呈现图像, decode具有cache, 在一定时间内不会同一张图片不会被再次解析
            */
            img.decode().then(() => {
              e.src = src
            }).catch(() => {
              e.src = defaultConfig.error
            })
          }
        })
      }
    )

    io.observe(e)
  },
  unbind() {
    io = null
  },
}

export default {
  install(Vue, config) {
    Vue.directive('lazy', directive)
    Object.assign(defaultConfig, config)
  }
}
