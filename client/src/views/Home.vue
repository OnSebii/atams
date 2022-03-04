<template>
  <div class="text-center">
    <h1>ATAMS</h1>
    <h3>Subscribe to push notifications</h3>

    <v-btn class="btn btn-primary" @click="subscribe">Subscribe</v-btn>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Home',
  data() {
    return {
      text: ['Your traffic monitoring application', 'Second Text'],
    };
  },

  methods: {
    async subscribe() {
      if (!('serviceWorker' in navigator)) {
        console.log('no service worker!');
        return;
      }
      const publicVapidKey = 'BKRdIZ5jBe5fYXKjJ91UJHcqbNmbe4fpLv6jxop0POQ3weDbrtWRR-AjGkptXABn1Nrjf4hV3h3khNqnlxHUkag';
      const registration = await navigator.serviceWorker.ready;
      const subscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: this.urlBase64ToUint8Array(publicVapidKey),
      });
      await axios.post(`${process.env.VUE_APP_SERVER}/subscribe`, subscription);
    },
    urlBase64ToUint8Array(base64String) {
      const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
      const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
      const rawData = window.atob(base64);
      const outputArray = new Uint8Array(rawData.length);
      for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
      }
      return outputArray;
    },
  },

  //   <vue-typed-js :strings="text" :typeSpeed="50">
  //   <h3 class="typing"></h3>
  // </vue-typed-js>

  components: {},
};
</script>
