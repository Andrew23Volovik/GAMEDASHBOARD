<template>
  <v-tooltip
    :left="left"
    :color="getMetaScore(metacritic)"
    :right="right"
    transition="fab-transition"
  >
    <template v-slot:activator="{ on }">
      <v-chip
        v-if="metacritic > 50"
        :color="getMetaScore(metacritic)"
        outlined
        label
        v-on="on"
        >{{ metacritic === null ? 0 : metacritic }}</v-chip
      >
    </template>
    <span>Metacritic</span>
  </v-tooltip>
</template>

<script>
export default {
  name: 'MetascoreComponent',
  props: ['metacritic', 'left', 'right'],
  methods: {
    getMetaScore(score) {
      if (score >= 90) {
        return 'indigo accent-3';
      } else if (score < 90 && score >= 75) {
        return 'success';
      } else if (score < 75 && score >= 65) {
        return 'warning';
      } else if (score < 75) {
        return 'error';
      } else if (score < 50) {
        return false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.v-chip.v-size--default {
  font-weight: 700;
  font-size: 18px;
}
</style>