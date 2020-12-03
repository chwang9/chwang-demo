import axios from "axios";
require("promise.prototype.finally").shim();
import { Message } from "element-ui";

axios.interceptors.request.use(
  config => {
    config.headers["X-Requested-With"] = "XMLHttpRequest";
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
axios.interceptors.response.use(
  response => {
    if (response.status === 403) {
      Message.error({
        message: "您尚未登录，请登录后再试"
      });
      return false;
    }
    return response;
  },
  error => {
    let errorMsg = error.response.data;
    if (error.response.status === 403) {
      // 未登录，手动跳转
      window.location.href = errorMsg;
      return false;
    } else {
      // 提示错误信息
      Message.error({
        message: errorMsg.data
      });
    }
    return Promise.reject(error);
  }
);

export default axios;
