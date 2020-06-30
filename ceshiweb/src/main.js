// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// vant ui
import Vant from 'vant';
import 'vant/lib/index.css'
Vue.use(Vant);

// 引入 rem
import './js/rem'

// 引入默认清除样式
import './css/reset.css'

// axios
import axios from 'axios'
Vue.prototype.$axios=axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
