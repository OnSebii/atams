<template>
  <div class="container">
    <div class="text-center">
      <h3>Start a new trip</h3>
      <NewTripForm class="d-inline" @start="startTracking" :disabled="isDisabled"></NewTripForm>
      <v-btn class="ma-2" @click="stopTracking" :disabled="!isDisabled">stop</v-btn>
    </div>
    <h4>GPS calls:</h4>
    <v-data-table :headers="headers" :items="gpsData" :items-per-page="6" :sort-by.sync="sortBy" :sort-desc.sync="sortDesc"></v-data-table>
    <p>Traveled Distance: {{ traveledDistance }} km</p>
  </div>
</template>

<script>
import { getDistance } from '@/libraries/distance2.js';
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
      gpsCalls: 0,
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
  created() {
    if (window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log(position.coords);
        },
        (e) => {
          console.log(e);
        }
      );
    } else {
      alert('navigator not supported');
    }
  },
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

      const data = await axios({
        url: `${process.env.VUE_APP_SERVER}/trip`,
        method: 'post',
        contentType: 'application/json',
        data: {
          name: this.tripName,
          gpscalls: this.gpsCalls,
          distance: this.traveledDistance,
          date: this.date,
        },
      });

      this.gpsData = [];
      this.gpsCalls = 0;
      this.lastTwoCalls = [{}, {}];
      this.tripName = '';
      this.traveledDistance = 0;
      console.log(data);
    },
    getLocation(position) {
      console.log(position.coords.latitude);
      console.log(position.coords.longitude);
      this.gpsCalls += 1;
      this.gpsData.push({ nr: this.gpsCalls, lat: position.coords.latitude, lon: position.coords.longitude });

      if (this.gpsCalls % 2 != 0) {
        // Ungerade
        console.log('Ungerade Zahl');
        this.lastTwoCalls[0] = { lat: position.coords.latitude, lon: position.coords.longitude };
      } else {
        // Gerade
        console.log('Gerade Zahl');
        this.lastTwoCalls[1] = { lat: position.coords.latitude, lon: position.coords.longitude };
        // this.traveledDistance += getDistance(this.lastTwoCalls[0], this.lastTwoCalls[1], 2);
        this.traveledDistance += getDistance(this.lastTwoCalls[0], this.lastTwoCalls[1], 'K');
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
