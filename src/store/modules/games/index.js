import gameMutations from './mutations';
import gameActions from './actions';
import gameGetters from './getters';

export default {
  namespaced: true,
  state: {
    currentResObj: {},
    resultCards: [],
  },
  getters: gameGetters,
  mutations: gameMutations,
  actions: gameActions,
};
