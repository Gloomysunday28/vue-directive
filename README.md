# Vue 指令

## 安装
```
  npm i @kvinc/vue-directive -S
```

### LazyLoad

| 修饰符 | 说明|
| :---: | :---:|
| immedite | 是否立即加载图片 |

> v-lazy.immedite="图片路径(不是字符串, 而是图片的绝对路径)"

> 配置项
```
  {
    error: 加载失败时显示的图片,
    loading: 加载中的图片
  }
```