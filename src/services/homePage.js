import request from "@/utils/request";

export async function word(params) {
  return request("/aidemo/tp/process", {
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
