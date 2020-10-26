import Vue from 'vue'
import App from './App.vue'

//导入路由模块
import router from "./router/index.js"

//下载安装mint-ui    cnpm install mint-ui --save   /cnpm install mint-ui -S
import MintUI from 'mint-ui'  //引入mint-ui模块
import 'mint-ui/lib/style.css' //引入mint-ui的css

//引入store模块
import store from "@/vuex/store.js";
//ly-tab  一个用于移动端的可触摸滑动具有回弹效果的可复用Vue组件
//npm i ly-tab -S  下载
import LyTab from 'ly-tab'  //引入
Vue.use(LyTab)  //使用
Vue.use(MintUI) //使用mint-ui

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
