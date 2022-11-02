import gameDetailMutations from './mutations';
import gameDetailActions from './actions';
import gameDetailGetters from './getters';

export default {
  namespaced: true,
  state: {
    gameDetail: {},
    gameScreenshots: {},
    gameDLC: {},
  },
  getters: gameDetailGetters,
  mutations: gameDetailMutations,
  actions: gameDetailActions,
};
