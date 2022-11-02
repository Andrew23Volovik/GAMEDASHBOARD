import { HTTP } from '@/services/axios';

export default {
  async getGameDetail({ commit, rootState }, slug) {
    rootState.isLoading = true;
    const key = 'a57a7cd848284b5fa21574622d86cb9c';
    const responseDetail = await HTTP.get(`games/${slug}?key=${key}`);
    const responseScreenshots = await HTTP.get(
      `games/${slug}/screenshots?key=${key}`
    );
    const responseDLC = await HTTP.get(`/games/${slug}/additions?key=${key}`);

    commit('setGameDetail', responseDetail.data);
    commit('setGameScreenshots', responseScreenshots.data);
    commit('serGameDLC', responseDLC.data);
    rootState.isLoading = false;
  },
};
