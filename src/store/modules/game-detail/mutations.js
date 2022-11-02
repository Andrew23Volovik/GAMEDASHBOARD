export default {
  setGameDetail(state, payload) {
    state.gameDetail = payload;
  },
  setGameScreenshots(state, payload) {
    state.gameScreenshots = payload;
  },
  serGameDLC(state, payload) {
    state.gameDLC = payload;
  },
  clearInfo(state) {
    state.gameDetail = {};
    state.gameScreenshots = {};
    state.gameDLC = {};
  },
};
