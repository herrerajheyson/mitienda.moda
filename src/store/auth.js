import axios from "axios";
import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      customer: null,
    };
  },

  getters: {
    authenticated(state) {
      if (state.customer) {
        return true;
      } else {
        return false;
      }
    },

    customer(state) {
      return state.customer;
    },
  },

  mutations: {
    customer(state, data) {
      state.customer = data;
    },
  },

  actions: {
    /**
     *
     * @param  {JSON}
     * @return  {Promise}
     */
    async login({ dispatch }, credentials) {
      let response = await axios.post("login/client", credentials);

      if (response.data.data.customer) {
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
        commit("customer", data.customer);
      }

      if (!state.customer) {
        commit("customer", null);
        return;
      }
    },

    /**
     *
     */
    async logout({ commit }, route) {
      await axios.get(route).then(() => {
        commit("customer", null);
      });
    },
  },
});

export { store };
