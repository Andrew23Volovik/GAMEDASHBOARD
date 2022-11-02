<template>
  <v-img
    v-if="Object.keys(gameDetail).length !== 0"
    :src="gameDetail.background_image"
    class="image mt-4 mr-7"
    gradient="to bottom, rgba(18,18,18,.7), rgba(18,18,18,1)"
    eager
  >
    <div class="container__game">
      <v-col>
        <v-row>
          <v-col class="ma-0 pa-0 mt-2">
            <v-sheet color="transparent mt-2">
              <v-btn
                color="#8d8d8d"
                depressed
                plain
                small
                :to="{ name: 'Games' }"
              >
                Games
              </v-btn>
              <span class="subcolor">|</span>
              <v-btn color="#8d8d8d" depressed plain small :to="{}">
                {{ gameDetail.name }}
              </v-btn>
            </v-sheet>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="d-flex align-center">
            <DateChip
              :label="'label'"
              :light="'light'"
              :margin="'mr-5'"
              :data="gameDetail.released"
            ></DateChip>
            <Icons
              v-for="(icon, i) in gameDetail.parent_platforms"
              :key="i"
              :margin="'mr-2'"
              :icon="icon"
            ></Icons>
            <span class="game__avg ml-5">
              AVERAGE PLAYTIME: {{ gameDetail.playtime }} HOURS
            </span>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <h2 class="game__header">{{ gameDetail.name }}</h2>
            <v-row>
              <v-col class="d-flex justify-space-between mt-10">
                <v-card width="180" height="60" ripple light hover>
                  <div class="d-flex flex-row ma-2 ml-2">
                    <div class="d-flex flex-column">
                      <span class="game__header__subtitle">Add to</span>
                      <span class="game__header__title">My games</span>
                    </div>
                    <v-icon color="green darken-1" class="d-flex ml-4" x-large>
                      mdi-plus-circle
                    </v-icon>
                  </div>
                </v-card>
                <v-card
                  width="180"
                  height="60"
                  outlined
                  ripple
                  hover
                  color="rgba(200,200,200,.2)"
                  style="border-color: rgba(200, 200, 200, 1)"
                >
                  <div class="d-flex flex-row ma-2 ml-2">
                    <div class="d-flex flex-column">
                      <span class="game__header__subtitle">Add to</span>
                      <span class="game__header__title">Wishlist</span>
                    </div>
                    <v-icon color="white" class="d-flex ml-10" x-large>
                      mdi-gift-outline
                    </v-icon>
                  </div>
                </v-card>
                <v-card
                  width="180"
                  height="60"
                  color="transparent"
                  outlined
                  ripple
                  hover
                >
                  <div class="d-flex flex-row ma-2 ml-2">
                    <div class="d-flex flex-column">
                      <span class="game__header__subtitle">Add to</span>
                      <span class="game__header__title">Collection</span>
                    </div>
                    <v-icon color="white" class="d-flex ml-5" x-large>
                      mdi-folder-outline
                    </v-icon>
                  </div>
                </v-card>
              </v-col>
            </v-row>

            <Rate :ratings="gameDetail.ratings"></Rate>

            <h2 class="mt-5">About</h2>

            <div>
              <v-card
                color="transparent"
                outlined
                :min-height="50"
                :max-height="aboutButton ? '' : '100px'"
                :class="aboutButton ? '' : 'overflow-hidden'"
              >
                <p class="d-block game__header__about ma-0 pa-0">
                  {{ gameDetail.description_raw }}
                </p>
              </v-card>
              <v-btn @click="showReadMore" x-small light>Read more</v-btn>
            </div>
            <Additional
              :platforms="gameDetail.platforms"
              :metacritic="gameDetail.metacritic"
              :genres="gameDetail.genres"
              :released="gameDetail.released"
              :developers="gameDetail.developers"
              :publishers="gameDetail.publishers"
              :esrb_rating="gameDetail.esrb_rating"
              :gameDLC="getGameDLC"
              :tags="gameDetail.tags"
              :website="gameDetail.website"
            ></Additional>
          </v-col>

          <v-col cols="4" class="ml-5">
            <v-row v-if="gameScreenshots.length !== 0">
              <v-col class="ma-0 pa-0">
                <v-img
                  :src="gameScreenshots[0].image"
                  class="game__header__screenshots__image"
                ></v-img>
              </v-col>
            </v-row>
            <v-row v-if="gameScreenshots.length !== 0">
              <div class="game__header__screenshots mt-4">
                <v-img
                  class="game__header__screenshots__image"
                  v-for="(img, i) in gameScreenshots.slice(1, 4)"
                  :key="i"
                  :src="img.image"
                ></v-img>
                <v-img
                  v-if="gameScreenshots.length > 5"
                  :src="gameScreenshots[5].image"
                >
                  <v-btn block height="100%" color="rgba(18,18,18,.7)">
                    Show all
                  </v-btn>
                </v-img>
                <v-btn v-else block height="100%" color="rgba(18,18,18,.7)">
                  Show all
                </v-btn>
              </div>
            </v-row>

            <v-row class="mt-6">
              <v-col class="ma-0 pa-0">
                <div v-for="(reqs, i) in gameDetail.platforms" :key="i">
                  <p
                    v-for="(req, i) in reqs.requirements"
                    :key="i"
                    class="game__header__screenshots__rerequirement"
                  >
                    {{ req }}
                  </p>
                </div>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </div>
  </v-img>
</template>


<script>
import Icons from '@/components/UI/Icons.vue';
import DateChip from '@/components/UI/DateChip.vue';
import Additional from '@/components/gamedetail/Additional.vue';
import Rate from '@/components/gamedetail/Rate.vue';

export default {
  components: { Icons, DateChip, Additional, Rate },
  data() {
    return {
      aboutButton: false,
    };
  },
  methods: {
    showReadMore() {
      this.aboutButton = !this.aboutButton;
    },
  },
  computed: {
    gameDetail() {
      return this.$store.getters['gameDetailModule/getGame'];
    },
    gameScreenshots() {
      return this.$store.getters['gameDetailModule/getGameScreenshots'];
    },
    getGameDLC() {
      return this.$store.getters['gameDetailModule/getGameDLC'];
    },
  },
  async beforeCreate() {
    await this.$store.dispatch(
      'gameDetailModule/getGameDetail',
      this.$route.params.slug
    );
  },
  destroyed() {
    this.$store.commit('gameDetailModule/clearInfo');
  },
};
</script>

<style lang="scss" scoped>
.image {
  border-radius: 2rem;
}

.container__game {
  max-width: 978px;
  margin: 0 auto;

  .subcolor {
    color: #8d8d8d;
  }

  .game__header {
    font-size: 72px;
    font-weight: 700;
    line-height: 72px;
    &__subtitle {
      font-size: 16px;
      line-height: 16px;
      font-weight: 300;
    }
    &__title {
      font-size: 22px;
      line-height: 28px;
    }
    &__about {
      font-size: 16px;
      line-height: 20px;
      font-weight: 300;
    }
    &__screenshots {
      display: grid;
      gap: 1rem;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);
      &__image {
        cursor: pointer;
        border-radius: 0.5rem;
      }
      &__rerequirement {
        font-size: 16px;
        line-height: 20px;
        font-weight: 300;
      }
    }
  }
}
</style>