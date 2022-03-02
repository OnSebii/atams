<template>
  <v-app>
    <v-app-bar app color="#993955" dark>
      <div class="d-flex align-center">
        <v-img alt="atams name" class="shrink mt-1 hidden-sm-and-down" contain min-width="100" src="@/assets/logo.png" width="100" />
      </div>
      <v-spacer></v-spacer>
      <v-btn class="ma-2" outlined color="#A3C3D9" to="/" @click="vibrate"> Home </v-btn>
      <v-btn class="ma-2" outlined color="#A3C3D9" to="/newtrip" @click="vibrate"> New trip </v-btn>
      <v-btn class="ma-2" outlined color="#A3C3D9" to="/trips" @click="vibrate"> Trips </v-btn>
    </v-app-bar>

    <v-main>
      <v-alert text prominent type="error" icon="mdi-cloud-alert" v-if="offline"> You are currently offline! </v-alert>
      <router-view :offline="offline" />
    </v-main>

    <v-footer color="#E9ECF5" padless>
      <v-row justify="center" color="A3C3D9" no-gutters>
        <v-col col="4"></v-col>
        <v-col class="py-4 text-center my-auto" col="4"> baily.at | <strong>atams</strong></v-col>
        <v-col class="py-4 text-right" col="4"> <v-btn plain to="/about" class="pr-4">Impressum</v-btn></v-col>
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

    if (!window.indexedDB) alert('IndexedDB is not available!');
  },
  methods: {
    updateAvailable() {
      if (confirm(`New content is available!. Click OK to refresh`)) {
        window.location.reload();
      }
    },
    vibrate() {
      navigator.vibrate(200);
    },
  },
};
</script>
