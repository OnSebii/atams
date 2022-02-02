<template>
  <v-app>
    <v-app-bar app color="#993955" dark>
      <div class="d-flex align-center">
        <v-img alt="atams name" class="shrink mt-1 hidden-sm-and-down" contain min-width="100" src="@/assets/logo.png" width="100" />
      </div>
      <v-spacer></v-spacer>
      <v-btn class="ma-2" outlined color="#A3C3D9" to="/home"> Home </v-btn>
      <v-btn class="ma-2" outlined color="#A3C3D9"> Outlined Button </v-btn>
      <v-btn class="ma-2" outlined color="#A3C3D9" to="/trips"> Trips </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>

    <v-footer color="#E9ECF5" padless>
      <v-row justify="center" color="A3C3D9" no-gutters>
        <v-col col="4"></v-col>
        <v-col class="py-4 text-center" col="4"> baily.at | <strong>atams</strong></v-col>
        <v-col class="py-4 text-right" col="4"> <a to="/about" class="pr-4">Impressum</a></v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    offline: null,
  }),
  created() {
    window.addEventListener('online', () => (this.offline = false));
    window.addEventListener('offline', () => (this.offline = true));
    document.addEventListener('swUpdated', this.updateAvailable, { once: true });
  },
  methods: {
    updateAvailable() {
      if (confirm(`New content is available!. Click OK to refresh`)) {
        window.location.reload();
      }
    },
  },
};
</script>
