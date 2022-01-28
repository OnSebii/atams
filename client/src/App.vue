<template>
  <v-app>
    <v-app-bar app color="#993955" dark>
      <div class="d-flex align-center">
        <v-img alt="atams name" class="shrink mt-1 hidden-sm-and-down" contain min-width="100" src="@/assets/logo.png" width="100" />
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
    <v-bottom-navigation>
      <v-btn value="recent">
        <span>Recent</span>

        <v-icon>mdi-history</v-icon>
      </v-btn>

      <v-btn value="favorites">
        <span>Favorites</span>

        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn value="nearby">
        <span>Nearby</span>

        <v-icon>mdi-map-marker</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    updateAvailable: null,
  }),
  created() {
    document.addEventListener('swUpdated', this.updateAvailable, { once: true });
  },
};
</script>
