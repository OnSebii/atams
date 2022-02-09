<template>
  <div class="text-center">
    <h3>Start a new trip</h3>
    <v-btn class="ma-2" color="#A3C3D9" @click="startTracking">start</v-btn>
    <v-btn>Stop</v-btn>
  </div>
</template>

<script>
export default {
  name: 'NewTrip',
  data() {
    return {};
  },
  props: {},
  created() {},
  methods: {
    startTracking() {
      navigator.geolocation.getCurrentPosition(this.getLocation);
      navigator.geolocation.watchPosition(this.getLocation);
    },
    stopTracking() {},
    getLocation(position) {
      console.log(position.coords.latitude);
      console.log(position.coords.longitude);
    },
  },
};
</script>
