<template>
  <v-img
    height="340"
    gradient="to bottom, rgba(18,18,18,.7), rgba(18,18,18,1)"
    :src="image_background"
    class="rounded-lg ma-3 mt-3"
  >
    <div class="d-flex flex-column align-center ma-10">
      <div class="platform__first">
        <router-link
          class="platform__first__header"
          :to="{
            name: 'Games',
            query: { order: `-metacritic-rating`, platforms: `${id}` },
          }"
        >
          {{ name }}
        </router-link>
        <v-btn class="mt-4" color="rgba(255, 255, 255, 0.20)" large
          >Follow</v-btn
        >
      </div>
      <div class="platform__second mt-5">
        <div class="platform__second__section">
          <div>Popular items</div>
          <div class="count">{{ games_count }}</div>
        </div>
        <v-divider class="mt-2"></v-divider>
        <div class="platform__second__list mt-2">
          <ul>
            <li v-for="(game, i) in games.slice(0, 3)" :key="i">
              <router-link
                class="link"
                :to="{ name: 'GameDetail', params: { slug: game.slug } }"
                >{{ game.name }}
              </router-link>
              <span class="member">
                {{ game.added }}
                <v-icon class="ml-2" size="16" left color="#8d8d8d">
                  mdi-account-outline
                </v-icon>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </v-img>
</template>

<script>
export default {
  name: 'PlatformCardComponent',
  props: ['image_background', 'name', 'games_count', 'games', 'id'],
};
</script>

<style lang="scss" scoped>
.count {
  color: #8d8d8d;
}

.platform__first {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__header {
    cursor: pointer;
    text-align: center;
    font-size: 32px;
    font-weight: 500;
    text-decoration: underline;
    text-decoration-thickness: 1px;
    text-decoration-color: rgba(255, 255, 255, 0.5);
    transition: 0.5s all ease;
    color: #fff;

    &:hover {
      color: rgba(255, 255, 255, 0.5);
    }
  }
}

.platform__second {
  display: flex;
  flex-direction: column;
  width: 100%;

  &__section {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  &__list {
    display: flex;

    ul {
      width: 100%;
      display: flex;
      flex-direction: column;
      padding-left: 0px;

      li {
        font-size: 16px;
        display: flex;
        justify-content: space-between;
        list-style-type: none;
        transition: 0.5s all ease;

        .link {
          color: #fff;
          text-decoration: underline;
          text-decoration-color: rgba(255, 255, 255, 0.5);
          text-decoration-thickness: 1px;

          &:hover {
            color: rgba(255, 255, 255, 0.5);
          }
        }

        .member {
          display: flex;
          align-items: center;
          color: #8d8d8d;
        }
      }
    }
  }
}

.box {
  border: 1px solid red;
}
</style>
