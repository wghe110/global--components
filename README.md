# vue-wgh-components

## 介绍
  `vue`组件，全局组件，不依赖任何`ui`框架，使用`vue2`语法，所以同时适用`vue2`和`vue3`
## 组件列表
  - 暂无
## 安装
```sh
npm install vue-wgh-components --save
```
## 使用
- `vue2`
```js
import Vue from 'vue'
import WghComponents from 'vue-wgh-components'

Vue.use(WghComponents)
```
- `vue3`
```js
import { createApp } from 'vue'
import WghComponents from 'vue-wgh-components'
import 'element-plus/dist/index.css'
import App from './App.vue'

const app = createApp(App)

app.use(WghComponents)
app.mount('#app')
```
