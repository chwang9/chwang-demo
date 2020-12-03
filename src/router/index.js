import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/homePage"
  },
  {
    path: "/homePage",
    name: "首页",
    component: () => import("@/pages/homePage"),
    meta: { title: "首页" }
  },
  {
    path: "/taskManagement",
    name: "任务管理",
    component: () => import("@/pages/taskManagement"),
    meta: { title: "任务管理" }
  },
  {
    path: "/CSS",
    name: "任务管理1",
    component: () => import("@/pages/CSS"),
    meta: { title: "任务管理1" }
  },
  {
    path: "/vuex",
    name: "任务管理3",
    component: () => import("@/pages/vuex"),
    meta: { title: "任务管理3" }
  },
  {
    path: "/vuex1",
    name: "任务管理4",
    component: () => import("@/pages/vuex1"),
    meta: { title: "任务管理4" }
  },
  {
    path: "*",
    component: () => import("@/pages/404"),
    meta: { title: "404" }
  }
  
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
