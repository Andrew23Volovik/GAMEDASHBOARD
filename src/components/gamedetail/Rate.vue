<template>
  <div>
    <div class="mt-10 subcolor">Rate</div>
    <v-row class="mt-1 mx-0 flex-nowrap">
      <v-sheet
        class="game__header__rating"
        :style="pickRatingColor(rate.title)"
        height="50"
        :width="rate.percent + '%'"
        v-for="(rate, idx) in ratings"
        :key="idx"
      ></v-sheet>
    </v-row>
    <v-chip
      class="mt-6 mr-4"
      :color="pickRatingColor(1, rate.id)"
      outlined
      v-for="(rate, idx) in ratings"
      :key="idx"
    >
      <v-icon left size="12"> mdi-checkbox-blank-circle </v-icon>
      {{ rate.title }} {{ rate.count }}
    </v-chip>
  </div>
</template>

<script>
export default {
  name: 'RateComponent',
  props: ['ratings'],
  methods: {
    pickRatingColor(title, color = null) {
      if (title === 'exceptional') {
        return {
          background: `linear-gradient(180deg,
          rgba(67, 160, 71, 1) 0%,
          rgba(27, 94, 32, 1) 100%
        )`,
        };
      } else if (title === 'recommended') {
        return {
          background: `linear-gradient(
          180deg,
          rgba(3, 155, 229, 1) 0%,
          rgba(1, 87, 155, 1) 100%
        )`,
        };
      } else if (title === 'meh') {
        return {
          background: `linear-gradient(
          180deg,
          rgba(251, 140, 0, 1) 0%,
          rgba(230, 81, 0, 1) 100%
        )`,
        };
      } else if (title === 'skip') {
        return {
          background: `linear-gradient(
          180deg,
          rgba(229, 57, 53, 1) 0%,
          rgba(183, 28, 28, 1) 100%
        )`,
        };
      }

      if (color === 5) {
        return 'green darken-1';
      } else if (color === 4) {
        return 'light-blue darken-1';
      } else if (color === 3) {
        return 'orange darken-1';
      } else if (color === 1) {
        return 'red darken-1';
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.game__header {
  &__rating {
    transition: 0.3s all ease;
    &:nth-child(1) {
      border-radius: 0.3rem 0 0 0.3rem;
    }
    &:nth-child(4) {
      border-radius: 0 0.3rem 0.3rem 0;
    }
    &:hover {
      transform: scale(1.02);
      box-shadow: 0 0 8px 0 #fff;
    }
  }
}
</style>