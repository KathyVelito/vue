import { createStore } from 'vuex'

import rootMutations from "./mutations.js";
import rootActions from "./actions.js";
import rootGetters from "./getters.js";

export default createStore({
  state() {
    return {
      overlay: false,
      lastListId: 3,
      lastCardId: 5,
      currentData: null,
      lists: [],
      cards: [],
    };
  },
  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters,
})
