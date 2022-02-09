<template>
  <div class="text-center container">
    <h3>Start a new trip</h3>
    <v-btn class="ma-2" color="#A3C3D9" @click="startTracking" :disabled="isDisabled">start</v-btn>
    <v-btn @click="stopTracking" :disabled="!isDisabled">stop</v-btn>

    <v-data-table :headers="headers" :items="gpsData" :items-per-page="10"></v-data-table>
    <p>Traveled Distance: {{ traveledDistance }} km</p>
  </div>
</template>

<script>
import { getDistance } from '@/libraries/distance.js';
export default {
  name: 'NewTrip',
  data() {
    return {
      headers: [
        { text: 'ID', align: 'start', value: 'nr', sortable: false },
        { text: 'Latitude', value: 'lat', sortable: false },
        { text: 'Longitude', value: 'lon', sortable: false },
      ],
      number: 0,
      isDisabled: false,
      gpsData: [],
      geoWatch: null,
      traveledDistance: 0,
      lastTwoCalls: [{}, {}],
    };
  },
  props: {},
  created() {},
  methods: {
    startTracking() {
      // navigator.geolocation.getCurrentPosition(this.getLocation);
      this.geoWatch = navigator.geolocation.watchPosition(this.getLocation, this.geoError, { enableHighAccuracy: true });
      this.isDisabled = true;
    },
    stopTracking() {
      navigator.geolocation.clearWatch(this.geoWatch);
      this.isDisabled = false;
    },
    getLocation(position) {
      console.log(position.coords.latitude);
      console.log(position.coords.longitude);
      this.number += 1;
      this.gpsData.push({ nr: this.number, lat: position.coords.latitude, lon: position.coords.longitude });

      if (this.number % 2 != 0) {
        // Ungerade
        console.log('Ungerade Zahl');
        this.lastTwoCalls[0] = { lat: position.coords.latitude, lon: position.coords.longitude };
      } else {
        // Gerade
        console.log('Gerade Zahl');
        this.lastTwoCalls[1] = { lat: position.coords.latitude, lon: position.coords.longitude };
        this.traveledDistance += getDistance(this.lastTwoCalls[0], this.lastTwoCalls[1], 2);
      }
    },
    geoError() {
      alert('Please enable geolocation to use this feature.');
      this.isDisabled = false;
    },
  },
};
</script>
