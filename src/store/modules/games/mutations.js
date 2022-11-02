export default {
  setGameData(state, payload) {
    state.currentResObj = payload;
  },
  setResultCards(state, payload) {
    state.resultCards = payload;
  },
  clearResultsCards(state, rootState) {
    rootState.isLoading = true;
    state.resultCards = [];
    rootState.isLoading = false;
  },
};
