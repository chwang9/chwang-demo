import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./router/authority";
import store from "./store";

// 引入echarts
import * as echarts from "echarts";
Vue.prototype.$echarts = echarts

import ElementUI from "element-ui";
import "./styles/global.scss";
Vue.use(ElementUI);

// import SvgIcon from "svg-icon";
// import "svg-icon/main.css";
// Vue.use(SvgIcon);

// import moment from "moment";
// Vue.prototype.$moment = moment
// moment.locale('zh-cn')



import 'mavon-editor/dist/css/index.css'
import mavonEditor from 'mavon-editor'
Vue.use(mavonEditor)

import VueCodeMirror from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'
Vue.use(VueCodeMirror)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
