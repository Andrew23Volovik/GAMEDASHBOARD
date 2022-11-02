import { HTTP } from '@/services/axios';

export default {
  async getPlatformDetail({ state, commit, rootState }, { page }) {
    rootState.isLoading = true;
    const key = 'a57a7cd848284b5fa21574622d86cb9c';
    const responsePlatformsDetail = await HTTP.get(
      `platforms?key=${key}&page=${page}&page_size=20`
    ).catch((error) => {
      if (error.request) {
        rootState.isLoading = false;
      }
    });

    const arr = [
      ...state.platformDetail,
      ...responsePlatformsDetail.data.results,
    ];
    commit('setPlatformDetail', arr);
    rootState.isLoading = false;
  },
};
