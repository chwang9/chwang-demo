import router from "./index";

router.beforeEach((to, from, next) => {
  to.meta && typeof to.meta.title !== "undefined"
    ? (document.title = to.meta.title)
    : "";

  next();
});
