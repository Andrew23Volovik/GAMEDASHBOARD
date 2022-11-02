<template>
  <v-chip
    class="game__avg"
    :label="label"
    :light="light"
    :color="color"
    :class="margin"
    :small="size"
  >
    {{ releasedData(data) }}
  </v-chip>
</template>

<script>
export default {
  name: 'DateChipComponent',
  props: ['color', 'margin', 'size', 'light', 'label', 'data'],
  methods: {
    releasedData(data) {
      const arr = data.split('-');
      let [year, month, day] = arr;
      const months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ];
      return months[+month] + ' ' + day + ', ' + year;
    },
  },
};
</script>

<style lang="scss" scoped>
.game__avg {
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
}
</style>