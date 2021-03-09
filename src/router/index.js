import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/homePage"
  },
  {
    path: "*",
    component: () => import("@/pages/404"),
    meta: { title: "404" },
    children: []
  },
  {
    path: "/homePage",
    name: "表格",
    component: () => import("@/pages/homePage"),
    meta: { title: "表格" },
    children: []
  },
  {
    path: "/test",
    name: "组件",
    component: () => import("@/pages/test"),
    meta: { title: "组件" },
    children: []
  },
  {
    path: "/CSS-flex",
    name: "组件",
    component: () => import("@/pages/CSS-flex"),
    meta: { title: "组件" },
    children: []
  },
  {
    path: "/layout",
    name: "组件",
    component: () => import("@/pages/layout"),
    meta: { title: "组件" },
    children: []
  },
  // {
  //   path: "/vuex",
  //   name: "首页1",
  //   component: () => import("@/pages/vuex"),
  //   meta: { title: "首页1" }
  // },
  // {
  //   path: "/vuex1",
  //   name: "首页1",
  //   component: () => import("@/pages/vuex1"),
  //   meta: { title: "首页1" }
  // },
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
