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
    path: "/test",
    name: "首页1",
    component: () => import("@/pages/test"),
    meta: { title: "首页1" }
  },
  {
    path: "/vuex",
    name: "首页1",
    component: () => import("@/pages/vuex"),
    meta: { title: "首页1" }
  },
  {
    path: "/vuex1",
    name: "首页1",
    component: () => import("@/pages/vuex1"),
    meta: { title: "首页1" }
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
