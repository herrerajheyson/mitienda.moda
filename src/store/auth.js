import axios from "axios";
import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      authentication: null,
      user: null,
    };
  },

  getters: {
    authenticated(state) {
      if (state.authentication && state.user) {
        return true;
      } else {
        return false;
      }
    },

    user(state) {
      return state.user;
    },
  },

  mutations: {
    authentication(state, token) {
      state.token = token;
    },

    user(state, data) {
      state.user = data;
    },
  },

  actions: {
    /**
     *
     * @param  {JSON}
     * @return  {Promise}
     */
    async login({ dispatch }, credentials) {
      let response = await axios.post(credentials.route, credentials);

      if (response.data.data.authentication) {
        return dispatch("attempt", response.data.data);
      }

      return response;
    },

    /**
     *
     * @param  {JSON}
     * @return  {Promise}
     */
    async attempt({ commit, state }, data) {
      if (data) {
        commit("authentication", data.authentication);
        commit("user", data.user);
      }

      if (!state.authentication) {
        commit("user", null);
        return;
      }
    },

    /**
     *
     */
    async logout({ commit }, route) {
      await axios.get(route).then(() => {
        commit("authentication", null);
        commit("user", null);
      });
    },
  },
});

export { store };
