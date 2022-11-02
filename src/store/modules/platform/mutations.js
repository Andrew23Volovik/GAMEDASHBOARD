export default {
  setPlatformDetail(state, payload) {
    state.platformDetail = payload;
  },
  clearPlatformDetail(state) {
    state.platformDetail = [];
  },
};
