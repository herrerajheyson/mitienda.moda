import axios from "axios";
import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      customer: null,
      categories: null,
    };
  },

  getters: {
    authenticated(state) {
      if (state.customer && state.categories) {
        return true;
      } else {
        return false;
      }
    },

    customer(state) {
      return state.customer;
    },

    categories(state) {
      return state.categories;
    },
  },

  mutations: {
    customer(state, data) {
      state.customer = data;
    },

    categories(state, data) {
      state.categories = data;
    },
  },

  actions: {
    /**
     *
     * @param  {JSON}
     * @return  {Promise}
     */
    async login({ commit, state }, credentials) {
      let response = await axios.post("login/client", credentials);

      if (response.data.customer && response.data.categories) {
        commit("customer", response.data.customer);
        commit("categories", response.data.categories);

        if (!state.customer) {
          commit("customer", null);
          commit("categories", null);
          return;
        }
      }

      return response;
    },

    async attempt({ commit, state }, data) {
      if (data) {
        commit("customer", data.customer);
        commit("categories", data.categories);
      }

      if (!state.customer) {
        commit("customer", null);
        commit("categories", null);
        return;
      }
    },

    /**
     *
     */
    async logout({ commit }) {
      commit("customer", null);
      commit("categories", null);
    },
  },
});

export { store };
