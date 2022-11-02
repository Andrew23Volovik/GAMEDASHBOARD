import platformDetailMutations from './mutations';
import platformDetailActions from './actions';
import platformDetailGetters from './getters';

export default {
  namespaced: true,
  state: {
    platformDetail: [],
  },
  getters: platformDetailGetters,
  mutations: platformDetailMutations,
  actions: platformDetailActions,
};
