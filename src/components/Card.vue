<template>
  <div>
    <v-card
      class="rounded-lg card__expand ma-3 mt-3"
      color="#363636"
      max-width="400"
      @mouseover="hoverInEffect(card.id)"
      @mouseleave="hoverOutEffect()"
    >
      <v-img :src="card.background_image" height="250px"> </v-img>
      <v-card-title>
        <Icons
          v-for="(icon, i) in card.parent_platforms"
          :key="i"
          :icon="icon"
          :margin="'mr-2'"
        ></Icons>

        <v-spacer></v-spacer>

        <Metascore :metacritic="card.metacritic" :left="'left'"></Metascore>
      </v-card-title>

      <v-card-title class="pt-0"
        ><span class="v__card__title"> {{ card.name }} </span></v-card-title
      >

      <v-expand-transition>
        <v-card
          width="400"
          class="expand__info"
          v-if="card.id === currentId"
          color="#363636"
        >
          <v-divider></v-divider>
          <v-card-title class="expand__wrapper pa-0">
            <v-col>
              <v-row no-gutters class="expand__content">
                <div>Released date:</div>
                <v-spacer></v-spacer>
                <DateChip
                  :color="'transparent'"
                  :margin="'mr-1'"
                  :data="card.released"
                  :size="'small'"
                ></DateChip>
              </v-row>
              <v-row no-gutters class="expand__content">
                <div>Genres:</div>
                <v-spacer></v-spacer>
                <div v-for="(genre, i) in card.genres" :key="i">
                  <v-chip small class="mr-1" outlined>{{ genre.name }}</v-chip>
                </div>
              </v-row>
              <v-row no-gutters class="expand__content">
                <v-btn
                  block
                  class="mt-5"
                  color="#512da8"
                  :to="{ name: 'GameDetail', params: { slug: card.slug } }"
                >
                  Show more info
                  <v-spacer></v-spacer>
                  <v-icon right dark> mdi-chevron-double-right </v-icon>
                </v-btn>
              </v-row>
            </v-col>
          </v-card-title>
        </v-card>
      </v-expand-transition>
    </v-card>
  </div>
</template>

<script>
import Icons from './UI/Icons.vue';
import DateChip from '@/components/UI/DateChip.vue';
import Metascore from '@/components/UI/Metascore.vue';
export default {
  components: { Icons, DateChip, Metascore },
  name: 'CardComponent',
  props: ['card'],
  data() {
    return {
      currentId: 0,
    };
  },
  methods: {
    hoverInEffect(id) {
      this.currentId = id;
    },
    hoverOutEffect() {
      this.currentId = 0;
    },
  },
};
</script>

<style lang="scss" scoped>

.card__expand {
  transition: 0.4s all ease;
  &:hover {
    transform: scale(1.02);
    z-index: 100;
    border-radius: 8px 8px 0px 0px !important;
  }
}

.expand__info {
  transition: 0.5s all ease-in;
  position: absolute;
  z-index: 100;
  background-color: #1e1e1e;
  border-radius: 0px 0px 8px 8px !important;
}
.v__card__title {
  font-weight: 500;
}

.expand__wrapper {
  .expand__content {
    font-size: 16px;
  }
}
</style>