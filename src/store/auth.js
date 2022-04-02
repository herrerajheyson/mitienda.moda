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
    async login({ dispatch }, credentials) {
      let response = await axios.post("login/client", credentials);

      if (response.data.data.customer && response.data.data.categories) {
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
    async logout({ commit }, route) {
      await axios.get(route).then(() => {
        commit("customer", null);
        commit("categories", null);
      });
    },
  },
});

export { store };
