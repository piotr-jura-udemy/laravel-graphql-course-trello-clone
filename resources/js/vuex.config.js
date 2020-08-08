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
  actions: {}
};

export default new Vuex.Store(store);