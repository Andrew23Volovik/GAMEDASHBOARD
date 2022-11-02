import { HTTP } from '@/services/axios';

export default {
  async getGameData(
    { commit, state, rootState },
    { /* firstCurrentDate, secondCurrentDate, */ page, order, platform }
  ) {
    rootState.isLoading = true;
    const key = 'a57a7cd848284b5fa21574622d86cb9c';
    const response = await HTTP.get(
      `games?key=${key}&ordering=${order}&page=${page}&page_size=20&${platform}`
    );

    commit('setGameData', response.data);
    const arr = [...state.resultCards, ...response.data.results];
    commit('setResultCards', arr);
    rootState.isLoading = false;
  },
  /* &dates=${firstCurrentDate},${secondCurrentDate} */
};
