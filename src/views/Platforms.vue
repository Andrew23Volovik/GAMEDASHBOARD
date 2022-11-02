<template>
  <div class="platform_wrapper ma-0 pa-3">
    <PlatformCard
      v-for="(platform, i) in getPlatforms"
      :key="i"
      :image_background="platform.image_background"
      :name="platform.name"
      :games_count="platform.games_count"
      :games="platform.games"
      :id="platform.id"
    ></PlatformCard>
    <v-responsive
      v-if="getPlatforms.length !== 51"
      v-intersect="onIntersect"
      class="mt-16 pa-16 card__responsive"
    ></v-responsive>
  </div>
</template>

<script>
import PlatformCard from '@/components/PlatformCard.vue';
import { HTTP } from '@/services/axios';

export default {
  components: { PlatformCard },
  name: 'PlatformsComponent',
  data() {
    return {
      page: 1,
    };
  },
  methods: {
    async onIntersect(entries) {
      if (entries[0].isIntersecting === true) {
        let page = ++this.page;
        await this.$store.dispatch('platformDetailModule/getPlatformDetail', {
          page,
        });
      }
    },
  },
  computed: {
    getPlatforms() {
      return this.$store.getters['platformDetailModule/getPlatforms'];
    },
  },
  async created() {
    const page = this.page;
    await this.$store.dispatch('platformDetailModule/getPlatformDetail', {
      page,
    });

    const key = 'a57a7cd848284b5fa21574622d86cb9c';
    const responsePlatformsDetail = await HTTP.get(
      `games?key=${key}&ordering=-metacritic&page=${page}&page_size=20&platforms=15,16,27,18,187`
    );
    const resp = await HTTP.get(`platforms?key=${key}&page=1`);

    console.log(responsePlatformsDetail.data);
    console.log(resp.data);
  },
  beforeDestroy() {
    this.$store.commit('platformDetailModule/clearPlatformDetail');
  },
};
</script>

<style lang="scss" scoped>
.platform_wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

.card__responsive {
  position: absolute;
  bottom: 800px;
}
</style>