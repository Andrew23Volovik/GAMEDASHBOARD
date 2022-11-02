<template>
  <div>
    <v-icon :class="margin">
      {{ getNameIcon(icon) }}
    </v-icon>
  </div>
</template>

<script>
export default {
  name: 'IconsComponent',
  props: ['icon', 'margin'],
  methods: {
    getNameIcon(icon) {
      if (icon.platform.name === 'PC') {
        return 'mdi-microsoft-windows';
      } else if (icon.platform.name === 'PlayStation') {
        return 'mdi-sony-playstation';
      } else if (icon.platform.name === 'Xbox') {
        return 'mdi-microsoft-xbox';
      } else if (icon.platform.name === 'Nintendo') {
        return 'mdi-nintendo-switch';
      } else if (icon.platform.name === 'Apple Macintosh') {
        return 'mdi-apple';
      } else if (icon.platform.name === 'Linux') {
        return 'mdi-linux';
      } else if (icon.platform.name === 'iOS') {
        return 'mdi-apple-ios';
      } else if (icon.platform.name === 'Android') {
        return 'mdi-android';
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>