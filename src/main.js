// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import iView from 'iview';
import axios from "axios";
import 'iview/dist/styles/iview.css';
// import jQuery from 'jquery'
import "./assets/3rd/bootstrap/3.3.7/css/bootstrap.min.css";
import "./assets/3rd/jquery/3.2.1/jquery.min.js";
import "./assets/3rd/bootstrap/3.3.7/js/bootstrap.min.js";
import VueLocalStorage from 'vue-localstorage';//本地存储.


Vue.use(ElementUI);
Vue.use(iView);
<<<<<<< .mine
||||||| .r384

=======
Vue.use(VueLocalStorage);

>>>>>>> .r430

Vue.prototype.$http = axios;
Vue.prototype.$Ip = 'http://localhost:9090';
Vue.config.productionTip = false;
// 全局变量
Vue.prototype.gcurrentgIndex = 0;//当前模块index.
Vue.prototype.gmenucurrentIndex = 0;//当前menu index.
Vue.prototype.gsubmenucurrentIndex = 0;//当前menu 子 index.
Vue.prototype.glogingStatus = false;//登录状态.
// Vue.localStorage.set('currentindex', 0);
// Vue.localStorage.set('menuindex', 0);
// Vue.localStorage.set('submenuindex', 0);
// Vue.localStorage.set('loginstatus', false);
// Vue.localStorage.set('currentroute', '');
// end.
// Vue.prototype.$axios = axios;
// 路由跳转
Vue.prototype.$goRoute = function (index) {
  // alert(index);
  this.$router.push(index)
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
