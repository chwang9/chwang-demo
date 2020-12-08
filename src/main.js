import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./router/authority";
import store from "./store";

// 引入echarts
import * as echarts from "echarts";
Vue.prototype.$echarts = echarts

// 引入ElementUI
import ElementUI from "element-ui";
import "./styles/global.scss";
Vue.use(ElementUI);

// 引入markdown
import VueMarkdownEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
VueMarkdownEditor.use(vuepressTheme);
Vue.use(VueMarkdownEditor);

// import SvgIcon from "svg-icon";
// import "svg-icon/main.css";
// Vue.use(SvgIcon);

// import moment from "moment";
// Vue.prototype.$moment = moment
// moment.locale('zh-cn')


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
