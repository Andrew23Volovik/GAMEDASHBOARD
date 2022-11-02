<template>
  <v-navigation-drawer
    fixed
    app
    floating
    mobile-breakpoint="0"
    mini-variant
    :mini-variant-width="styleObj.mini"
    color="#121212"
  >
    <v-list-item :class="styleObj.logoStyle">
      <v-btn
        :width="styleObj.logo.width"
        :height="styleObj.logo.height"
        icon
        :to="{ path: '/' }"
        @click="reloadPage"
      >
        <v-avatar tile :size="styleObj.logo.size" class="nav__icon">
          <img src="../assets/logo.svg" />
        </v-avatar>
      </v-btn>
    </v-list-item>

    <v-card color="#121212" outlined>
      <v-card-text :class="headerStyle">
        <div>Game Search</div>
      </v-card-text>
    </v-card>

    <v-card
      :class="styleObj.menuStyle"
      color="#363636"
      class="d-flex flex-column align-center"
    >
      <v-list rounded class="ma-1 pa-1">
        <v-list-item-group v-model="menuItem" mandatory>
          <v-list-item
            class="ma-1"
            v-for="(item, i) in menuItems"
            :key="i"
            :to="item.to"
            color="indigo accent-3"
          >
            <v-tooltip
              right
              color="indigo accent-3"
              nudge-right="25"
              transition="fab-transition"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-list-item-content v-bind="attrs" v-on="on">
                  <v-icon size="22">{{ item.icon }}</v-icon>
                </v-list-item-content>
              </template>
              <span>{{ attrs[i] }}</span>
            </v-tooltip>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>

    <v-responsive
      height="150px"
      :style="{ display: mobile ? 'none' : '' }"
    ></v-responsive>

    <v-card
      class="nav__avatar d-flex justify-center mt-6"
      color="#121212"
      outlined
    >
      <v-btn width="50" height="50" icon plain>
        <v-icon size="22"> mdi-logout-variant </v-icon>
      </v-btn>
    </v-card>
    <v-card-text class="nav__logout pa-0">
      <div>Logout</div>
    </v-card-text>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'AsideComponent',
  data() {
    return {
      drawer: true,
      menuItems: [
        { icon: 'mdi-apps', to: '/games' },
        { icon: 'mdi-gamepad-circle-outline', to: '/platforms' },
        { icon: 'mdi-card-search-outline', to: '/2' },
        { icon: 'mdi-plus-box-multiple', to: '/3' },
        { icon: 'mdi-card-search-outline', to: '/4' },
        { icon: 'mdi-account-cog-outline', to: '/5' },
      ],
      mini: true,
      mobile: false,
      menuItem: 0,
      addmenuItem: 0,
      attrs: [
        'Games',
        'Platforms',
        'Browse',
        'My Libary',
        'Search',
        'Settings',
      ],
    };
  },
  created() {
    window.addEventListener('resize', this.checkScreen);
    this.checkScreen();
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
    currentOpt(idx) {
      console.log(idx);
    },
    reloadPage() {
      window.location.reload();
    },
  },
  computed: {
    styleObj() {
      return {
        mini: this.mobile ? 64 : 128,
        logoStyle: this.mobile ? 'px-2 mt-2' : 'px-2 mt-5',
        logo: {
          width: this.mobile ? 50 : 70,
          height: this.mobile ? 50 : 70,
          size: this.mobile ? 30 : 50,
        },
        menuStyle: this.mobile
          ? 'mt-1 mx-2 rounded-lg'
          : 'mt-10 pa-1 mx-6 rounded-xl',
      };
    },
    headerStyle() {
      if (!this.mobile) {
        return 'nav__text';
      } else {
        return 'nav__text__mobile';
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.nav__icon {
  transform: rotateZ(45deg);
}

.nav__text {
  text-transform: uppercase;
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  box-shadow: 0;
  line-height: 32px;
  background: -webkit-linear-gradient(
    -45deg,
    rgba(216, 27, 96, 1) 0%,
    rgba(81, 45, 168, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  &__mobile {
    display: none;
  }
}

.theme--dark.v-btn--active::before {
  opacity: 0;
}

.v-list-item__content {
  overflow: inherit;
}

.nav__logout {
  text-align: center;
  font-size: 14px;
}
</style>