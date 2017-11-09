// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import util from "./util/util";
// import swfobject from "./util/swfobject";
import "iview/dist/styles/iview.css";
import "element-ui/lib/theme-default/index.css";
import axios from "axios";
// import jQuery from 'jquery'
import "./assets/3rd/bootstrap/3.3.7/css/bootstrap.min.css";
import "./assets/3rd/jquery/3.2.1/jquery.min.js";
import "./assets/3rd/bootstrap/3.3.7/js/bootstrap.min.js";
import Element from "element-ui";
import VuePreview from "vue-preview";
Vue.use(util);
// Vue.use(swfobject)

Vue.prototype.$http = axios;
Vue.config.productionTip = false;
Vue.use(Element);
Vue.prototype.$Ip = 'http://localhost:8080';
Vue.prototype.websocket = '192.168.123.82:8080';
Vue.use(VuePreview);
// 路由跳转
Vue.prototype.$goRoute = function (index) {
  // alert(index);
  this.$router.push(index)
}

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
