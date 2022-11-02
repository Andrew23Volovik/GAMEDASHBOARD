<template>
  <div class="d-flex">
    <v-responsive></v-responsive>
    <v-text-field
      :class="styleObj.miniSearch"
      placeholder="Search game..."
      color="indigo accent-3"
      outlined
      rounded
      prepend-inner-icon="mdi-magnify"
      hide-details
      clearable
      dense
      background-color="#363636"
    ></v-text-field>
    <v-responsive></v-responsive>
  </div>
</template>

<script>
export default {
  name: 'SerachComponent',
  data() {
    return {
      mobile: null,
    };
  },
  methods: {
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 768) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      return;
    },
  },
  created() {
    window.addEventListener('resize', this.checkScreen);
    this.checkScreen();
  },
  computed: {
    styleObj() {
      return {
        miniSearch: this.mobile ? 'mt-3' : 'mt-6',
      };
    },
    countOfGame() {
      return this.$store.getters.getCurrentObj;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>