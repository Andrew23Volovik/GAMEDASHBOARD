<template>
  <v-system-bar app height="2px" color="#121212">
    <v-progress-linear
      :active="loading"
      indeterminate
      color="green"
      fixed
      height="2"
      class="progress__bar"
    >
    </v-progress-linear>
  </v-system-bar>
</template>

<script>
export default {
  name: 'SystemBarComponent',
  computed: {
    loading() {
      return this.$store.getters.getIsLoading;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>