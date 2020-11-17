export default {
  state: {
    settings: {
      draggable: true,
    },
  },
  getters: {
    settings(state) {
      return state.settings;
    },
  },
  mutations: {
    setting(state, { name, value }) {
      state.settings[name] = value;
    },
  },
  actions: {
    changeSetting({ commit }, { name, value }) {
      commit('setting', { name, value });
    },
  },
};
