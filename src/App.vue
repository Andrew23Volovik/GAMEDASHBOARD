<template>
  <v-app>
    <SystemBar />
    <Aside />
    <v-main>
      <!-- Provides the application the proper gutter -->
      <Search />
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Aside from './components/Aside.vue';
import Search from './components/Search.vue';
import SystemBar from './components/SystemBar.vue';

export default {
  components: { Aside, Search, SystemBar },
  name: 'App',
  data() {
    return {};
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap');

* {
  font-family: 'Quicksand', sans-serif;
}

html {
  background-color: #121212;
}
</style>