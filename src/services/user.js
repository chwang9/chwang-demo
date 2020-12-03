import request from "@/utils/request";

export async function accountLogin(params) {
  return request("/user/login", {
    method: "post",
    data: params
  });
}

export async function accountLogout(params) {
  return request("/user/logout", {
    method: "get",
    params: params
  });
}
