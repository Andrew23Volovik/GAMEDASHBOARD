import Vue from 'vue';
import Vuex from 'vuex';

import gameModule from './modules/games/index.js';
import gameDetailModule from './modules/game-detail/index.js';
import platformDetailModule from './modules/platform/index.js';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    gameModule,
    gameDetailModule,
    platformDetailModule,
  },
  state: {
    isLoading: null,
  },
  mutations: {},
  actions: {},
  getters: {
    getIsLoading(state) {
      return state.isLoading;
    },
  },
});

export default store;
