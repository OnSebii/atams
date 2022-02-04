<template>
  <div class="text-center">
    <h3>Start a new trip</h3>
    <v-btn class="ma-2" color="#A3C3D9">start</v-btn>
  </div>
</template>

<script>
export default {
  name: 'NewTrip',
  data() {
    return {};
  },
  props: {},
  created() {
    this.$getLocation({
      enableHighAccuracy: false, //defaults to false
      timeout: Infinity, //defaults to Infinity
      maximumAge: 0, //defaults to 0
    }).then((coordinates) => {
      console.log(coordinates);
    });
  },
  methods: {
    getLocation() {},
  },
};
</script>
