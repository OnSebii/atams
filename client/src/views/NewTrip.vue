<template>
  <div class="container">
    <div class="text-center">
      <h3>Start a new trip</h3>
      <NewTripForm @start="startTracking" :disabled="isDisabled"></NewTripForm>
      <v-btn class="ma-2" color="#A3C3D9" @click="startTracking" :disabled="true">start</v-btn>
      <v-btn @click="stopTracking" :disabled="!isDisabled">stop</v-btn>
    </div>
    <h4>GPS calls:</h4>
    <v-data-table :headers="headers" :items="gpsData" :items-per-page="6" :sort-by.sync="sortBy" :sort-desc.sync="sortDesc"></v-data-table>
    <p>Traveled Distance: {{ traveledDistance }} km</p>
  </div>
</template>

<script>
import { getDistance } from '@/libraries/distance.js';
import NewTripForm from '@/components/NewTripForm.vue';
import axios from 'axios';
export default {
  name: 'NewTrip',
  data() {
    return {
      headers: [
        { text: 'ID', align: 'start', value: 'nr', sortable: false },
        { text: 'Latitude', value: 'lat', sortable: false },
        { text: 'Longitude', value: 'lon', sortable: false },
      ],
      sortBy: 'nr',
      sortDesc: true,
      dialog: false,
      number: 0,
      isDisabled: false,
      gpsData: [],
      geoWatch: null,
      date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 10),
      tripName: '',
      traveledDistance: 0,
      lastTwoCalls: [{}, {}],
    };
  },
  props: {},
  created() {},
  methods: {
    startTracking(value) {
      console.log(value);
      this.tripName = value;
      // navigator.geolocation.getCurrentPosition(this.getLocation);
      this.geoWatch = navigator.geolocation.watchPosition(this.getLocation, this.geoError, { enableHighAccuracy: true });
      this.isDisabled = true;
    },
    async stopTracking() {
      navigator.geolocation.clearWatch(this.geoWatch);
      this.isDisabled = false;

      await axios({
        url: `${process.env.VUE_APP_SERVER}/kennzeichen`,
        method: 'post',
        contentType: 'application/json',
        data: {
          name: this.tripName,
          gpscalls: this.gpsCalls,
          distance: this.traveledDistance,
          date: this.date,
        },
      });
    },
    getLocation(position) {
      console.log(position.coords.latitude);
      console.log(position.coords.longitude);
      this.gpsCalls += 1;
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
        console.log('Distance: ', this.traveledDistance);
      }
    },
    geoError() {
      alert('Please enable geolocation to use this feature.');
      this.isDisabled = false;
    },
  },
  components: {
    NewTripForm,
  },
};
</script>
