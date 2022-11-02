<template>
  <div class="d-flex flex-column ma-0 pa-3">
    <v-card color="#121212" outlined>
      <v-card-text class="home__header pa-3 ma-0">
        <div>All games</div>
      </v-card-text>
    </v-card>

    <v-row align="center" class="pa-6">
      <v-col cols="2" class="ma-0 pa-0">
        <v-select
          v-model="selectOrderAbbr"
          background-color="#363636"
          outlined
          dense
          prefix="Order by:"
          hide-details
          :items="orderByItems"
          item-text="state"
          item-value="abbr"
          color="indigo accent-3"
          item-color="indigo accent-3"
          @change="getFilterByOrder"
        >
        </v-select>
      </v-col>
      <v-col cols="2" class="ma-0 pa-0 ml-5">
        <v-select
          v-model="selectPlatformsAbbr"
          background-color="#363636"
          outlined
          dense
          prefix="Platforms:"
          hide-details
          :items="platformsItems"
          item-text="state"
          item-value="abbr"
          color="indigo accent-3"
          item-color="indigo accent-3"
          clearable
        >
        </v-select>
      </v-col>
    </v-row>

    <div class="card__wrapper">
      <Card v-for="(card, idx) in getCards" :key="idx" :card="card"></Card>
    </div>
    <v-responsive
      v-intersect="onIntersect"
      class="mt-16 pa-16 card__responsive"
      v-if="getCards.length !== 0"
    ></v-responsive>
  </div>
</template>

<script>
import Card from '@/components/Card.vue';

export default {
  components: { Card },
  name: 'GamesComponent',
  props: ['order'],
  data() {
    return {
      show: false,
      page: 1,
      firstCurrentDate: '',
      secondCurrentDate: '',
      selectPlatformsAbbr: null,
      selectOrderAbbr: '-metacritic-rating',
      orderByItems: [
        { state: 'Popularity', abbr: '-metacritic-rating' },
        { state: 'Date added', abbr: '-created' },
        { state: 'Name', abbr: 'name' },
        { state: 'Released', abbr: '-released' },
        { state: 'Rating', abbr: '-rating' },
      ],
      platformsItems: [
        { state: 'PC', abbr: '4' },
        { state: 'PlayStation All', abbr: '15,16,18,27,187' },
        { state: 'PlayStation 5', abbr: '187' },
        { state: 'PlayStation 4', abbr: '18' },
        { state: 'PlayStation 3', abbr: '16' },
        { state: 'PlayStation 2', abbr: '15' },
        { state: 'PlayStation 1', abbr: '27' },
        { state: 'Xbox All', abbr: '1,14,80,186' },
        { state: 'Xbox One', abbr: '1' },
        { state: 'Xbox Series S/X', abbr: '186' },
        { state: 'Xbox 360', abbr: '14' },
        { state: 'Xbox', abbr: '80' },
        { state: 'iOS', abbr: '3' },
        { state: 'Android', abbr: '21' },
        { state: 'Apple All', abbr: '5,41,55' },
        { state: 'macOS', abbr: '5' },
        { state: 'Macintosh', abbr: '55' },
        { state: 'Apple II', abbr: '41' },
        { state: 'Linux', abbr: '6' },
        {
          state: 'Nintendo All',
          abbr: '7,8,9,10,11,13,24,26,43,49,79,105',
        },
        { state: 'Nintendo Switch', abbr: '7' },
        { state: 'Nintendo 3DS', abbr: '8' },
        { state: 'Nintendo DS', abbr: '9' },
        { state: 'Nintendo DSi', abbr: '13' },
        { state: 'Wii U', abbr: '10' },
        { state: 'Wii', abbr: '11' },
        { state: 'GameCube', abbr: '105' },
        { state: 'Game Boy Advance', abbr: '24' },
        { state: 'Game Boy Color', abbr: '43' },
        { state: 'Game Boy', abbr: '26' },
        { state: 'SNES', abbr: '79' },
        { state: 'NES', abbr: '49' },
        { state: 'Atari All', abbr: '5,41,55' },
        { state: 'Atari 7800', abbr: '28' },
        { state: 'Atari 5200', abbr: '31' },
        { state: 'Atari 2600', abbr: '23' },
        { state: 'Atari Flashback', abbr: '22' },
        { state: 'Atari 8-bit', abbr: '25' },
        { state: 'Atari ST', abbr: '34' },
        { state: 'Atari Lynx', abbr: '46' },
        { state: 'Atari XEGS', abbr: '50' },
        { state: 'Jaguar', abbr: '112' },
        { state: 'Commodore', abbr: '166' },
        { state: 'SEGA All', abbr: '5,41,55' },
        { state: 'Genesis', abbr: '167' },
        { state: 'SEGA Saturn', abbr: '107' },
        { state: 'SEGA CD', abbr: '119' },
        { state: 'SEGA 32X', abbr: '117' },
        { state: 'SEGA Master', abbr: '74' },
        { state: 'Dreamcast', abbr: '106' },
        { state: 'Game Gear', abbr: '77' },
        { state: '3DO', abbr: '111' },
        { state: 'Neo Geo', abbr: '12' },
        { state: 'Web', abbr: '171' },
      ],
    };
  },
  computed: {
    getCards() {
      return this.$store.getters['gameModule/getCardsResult'];
    },
    loading() {
      return this.$store.getters.getIsLoading;
    },
  },
  methods: {
    async onIntersect(entries) {
      if (entries[0].isIntersecting === true) {
        const firstCurrentDate = this.firstCurrentDate;
        const secondCurrentDate = this.secondCurrentDate;
        let page = ++this.page;
        const order = this.selectOrderAbbr;
        let platform = this.selectPlatformsAbbr;
        if (platform === null) {
          platform = 'null';
        } else {
          platform = 'platforms=' + this.selectPlatformsAbbr;
        }

        await this.$store.dispatch('gameModule/getGameData', {
          firstCurrentDate,
          secondCurrentDate,
          page,
          order,
          platform,
        });
      }
    },
    async getFilterByOrder() {
      this.page = 1;
      const firstCurrentDate = this.firstCurrentDate;
      const secondCurrentDate = this.secondCurrentDate;
      let page = this.page;
      const order = this.selectOrderAbbr;
      let platform = this.selectPlatformsAbbr;
      if (platform === null) {
        platform = 'null';
      } else {
        platform = 'platforms=' + this.selectPlatformsAbbr;
      }

      if (
        this.$route.query.order !== this.selectOrderAbbr ||
        this.$route.query.platforms != this.selectPlatformsAbbr
      ) {
        const path = {
          name: 'Games',
          query: {
            order: `${this.selectOrderAbbr}`,
          },
        };

        if (
          this.$route.query.platforms !== this.selectPlatformsAbbr &&
          this.selectPlatformsAbbr
        ) {
          path.query.platforms = this.selectPlatformsAbbr;
        }

        this.$router.replace(path);
      }

      console.log('filter');

      this.$store.commit('gameModule/clearResultsCards', { root: true });
      await this.$store.dispatch('gameModule/getGameData', {
        firstCurrentDate,
        secondCurrentDate,
        page,
        order,
        platform,
      });
    },
  },
  async created() {
    if (this.$route.query.order) {
      this.selectOrderAbbr = this.$route.query.order;
    }
    if (this.$route.query.platforms) {
      this.selectPlatformsAbbr = this.$route.query.platforms;
    }

    const year = new Date().getFullYear();
    let month = new Date().getMonth() + 1;
    if (month < 10) {
      month = '0' + month;
    }
    let day = new Date().getDate();
    if (day < 10) {
      day = '0' + day;
    }
    this.firstCurrentDate = year - 10 + '-' + month + '-' + day;
    this.secondCurrentDate = year + '-' + month + '-' + day;

    const firstCurrentDate = this.firstCurrentDate;
    const secondCurrentDate = this.secondCurrentDate;
    const page = this.page;
    const order = this.selectOrderAbbr;
    let platform = this.selectPlatformsAbbr;

    if (platform === null) {
      platform = 'null';
    } else {
      platform = 'platforms=' + this.selectPlatformsAbbr;
    }

    if (
      this.$route.query.order !== this.selectOrderAbbr ||
      this.$route.query.platforms !== this.selectPlatformsAbbr
    ) {
      await this.$store.dispatch('gameModule/getGameData', {
        firstCurrentDate,
        secondCurrentDate,
        page,
        order,
        platform,
      });
    }
  },
  beforeDestroy() {
    this.$store.commit('gameModule/clearResultsCards', { root: true });
  },
  watch: {
    /* selectOrderAbbr() {
      this.getFilterByOrder();
    }, */
    selectPlatformsAbbr() {
      this.getFilterByOrder();
    },
  },
};
</script>

<style lang="scss" scoped>
.home__header {
  font-size: 72px;
  line-height: 74px;
  font-weight: 700;
}

.home__select {
  width: 530px;
}

.card__responsive {
  position: absolute;
  bottom: 800px;
}

.card__wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
}

.theme--dark.v-list {
  background: #363636;
}

.v-select__selections input {
  display: none;
}

.box {
  border: 1px solid red;
}
</style>