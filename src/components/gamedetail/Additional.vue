<template>
  <div>
    <v-row class="mt-6">
      <v-col cols="6 py-0">
        <div class="subcolor">Platforms</div>
        <div>
          <v-chip
            small
            color="transparent"
            class="game__header__additional"
            v-for="(platform, i) in platforms"
            :key="i"
            :to="{
              name: 'Games',
              query: {
                order: `-metacritic-rating`,
                platforms: `${platform.platform.id}`,
              },
            }"
          >
            {{ platform.platform.name }}
          </v-chip>
        </div>
      </v-col>
      <v-col cols="6 py-0">
        <div class="subcolor">Metascore</div>
        <div class="ma-2">
          <Metascore :right="'right'" :metacritic="metacritic"></Metascore>
        </div>
      </v-col>
    </v-row>

    <v-row class="mt-6">
      <v-col cols="6 py-0">
        <div class="subcolor">Genres</div>
        <div>
          <v-chip
            small
            color="transparent"
            class="mr-2 game__header__additional"
            v-for="(genre, i) in genres"
            :key="i"
          >
            {{ genre.name }}
          </v-chip>
        </div>
      </v-col>
      <v-col cols="6 py-0">
        <div class="subcolor">Released date</div>
        <div>
          <DateChip
            :color="'transparent'"
            :margin="'mr-5'"
            :data="released"
          ></DateChip>
        </div>
      </v-col>
    </v-row>

    <v-row class="mt-6">
      <v-col cols="6 py-0">
        <div class="subcolor">Developers</div>
        <div>
          <v-chip
            small
            color="transparent"
            class="mr-2 game__header__additional"
            v-for="(developer, i) in developers"
            :key="i"
          >
            {{ developer.name }}
          </v-chip>
        </div>
      </v-col>
      <v-col cols="6 py-0">
        <div class="subcolor">Publisher</div>
        <div>
          <v-chip
            small
            color="transparent"
            class="mr-2 game__header__additional"
            v-for="(publisher, i) in publishers"
            :key="i"
          >
            {{ publisher.name }}
          </v-chip>
        </div>
      </v-col>
    </v-row>

    <v-row class="mt-6" v-if="esrb_rating">
      <v-col cols="6 py-0">
        <div class="subcolor">Age rating</div>
        <div>
          <v-chip
            small
            color="transparent"
            class="mr-2 game__header__additional"
          >
            {{ esrb_rating.name }}
          </v-chip>
        </div>
      </v-col>
      <v-col cols="6 py-0"> </v-col>
    </v-row>

    <v-row class="mt-6" v-if="gameDLC.length !== 0">
      <v-col cols="py-0">
        <div class="subcolor">DLC's and editions</div>
        <div>
          <v-chip
            small
            color="transparent"
            class="mr-2 game__header__additional"
            v-for="(nameDLC, i) in gameDLC"
            :key="i"
          >
            {{ nameDLC.name }}
          </v-chip>
        </div>
      </v-col>
    </v-row>

    <v-row class="mt-6">
      <v-col cols="py-0">
        <div class="subcolor">Tags</div>
        <div>
          <v-chip
            small
            color="transparent"
            class="game__header__additional"
            v-for="(tag, i) in tags"
            :key="i"
          >
            {{ tag.name }}
          </v-chip>
        </div>
      </v-col>
    </v-row>

    <v-row class="mt-6">
      <v-col cols="py-0">
        <div class="subcolor">Website</div>
        <div>
          <v-chip
            small
            color="transparent"
            class="game__header__additional"
            :href="website"
          >
            {{ website }}
          </v-chip>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Metascore from '@/components/UI/Metascore.vue';
import DateChip from '@/components/UI/DateChip.vue';

export default {
  name: 'AdditionalComponent',
  components: { Metascore, DateChip },
  props: [
    'platforms',
    'metacritic',
    'genres',
    'released',
    'developers',
    'publishers',
    'esrb_rating',
    'gameDLC',
    'tags',
    'website',
  ],
};
</script>

<style lang="scss" scoped>
.subcolor {
  color: #8d8d8d;
}

.game__header {
  &__additional {
    cursor: pointer;
    font-size: 16px;
    text-decoration: underline;
    &:hover {
      color: #8d8d8d;
    }
  }
}
</style>