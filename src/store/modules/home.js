//保存所有数据，以对象的方式导出
const state = {
    isVoice: false
};

const getters = {};

// 保存所有方法，用来改变state的数据
const mutations = {
    isVoiceSet(state,isVoice) {
        state.isVoice = isVoice
    }
};
Object.keys(state).forEach(item => {
  mutations[item] = (state, value) => {
    state[item] = value;
  };
});

// 暴露给用户使用，借此触发mutations中的方法，保存数据
const actions = {
    isVoiceSet ({commit},payload) {
        commit("isVoice",payload)
    }
}
;

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
