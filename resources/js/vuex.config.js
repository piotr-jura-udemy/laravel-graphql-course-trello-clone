import Vue from "vue";
import Vuex from "vuex";
import apollo from "./apollo.config";
import Me from "./graphql/Me.gql";

Vue.use(Vuex);

const store = {
  state: {
    isLoggedIn: false,
    user: {
      id: null,
      name: null,
      email: null
    }
  },
  mutations: {
    setLoggedIn(state, payload) {
      state.isLoggedIn = Boolean(payload);
    },
    setUser(state, payload) {
      state.user = payload;
    }
  },
  actions: {
    async setLoggedIn({ commit }, payload) {
      const isLoggedIn = Boolean(payload);
      localStorage.setItem("isLoggedIn", isLoggedIn);
      commit("setLoggedIn", isLoggedIn);
    },
    async fetchCurrentUser({ commit, dispatch }) {
      const result = await apollo.defaultClient.query({
        query: Me,
        fetchPolicy: "no-cache"
      });
      const user = result.data?.me;

      if (user) {
        commit("setUser", user);
        dispatch("setLoggedIn", true);
      } else {
        commit("setUser", {
          id: null,
          name: null,
          email: null
        });
        dispatch("setLoggedIn", false);
      }
    }
  }
};

export default new Vuex.Store(store);