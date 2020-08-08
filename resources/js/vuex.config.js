import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = {
  state: {
    isLoggedIn: false
  },
  mutations: {
    setLoggedIn(state, payload) {
      state.isLoggedIn = Boolean(payload);
    }
  },
  actions: {
    async setLoggedIn({ commit }, payload) {
      const isLoggedIn = Boolean(payload);
      localStorage.setItem("isLoggedIn", isLoggedIn);
      commit("setLoggedIn", isLoggedIn);
    }
  }
};

export default new Vuex.Store(store);