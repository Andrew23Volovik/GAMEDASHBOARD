export default {
  getGame(state) {
    return state.gameDetail;
  },
  getGameScreenshots(state) {
    return state.gameScreenshots.results;
  },
  getGameDLC(state) {
    return state.gameDLC.results;
  },
};
