import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import cache from "./modules/cache";
import home from "./modules/home";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    cache,
    home
  },
  plugins: [
    createPersistedState({
      storage: window.sessionStorage
    })
  ]
});
