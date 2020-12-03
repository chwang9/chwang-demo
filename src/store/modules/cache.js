const state = {};

const getters = {};

const mutations = {};
Object.keys(state).forEach(item => {
  mutations[item] = (state, value) => {
    state[item] = value;
  };
});

const actions = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
