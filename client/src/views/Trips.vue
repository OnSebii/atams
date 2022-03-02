<template>
  <div class="container">
    <v-data-table :headers="headers" :items="items" class="elevation-1">
      <template v-slot:item.distance="{ item }">
        <p>{{ item.distance }} km</p>
      </template>
      <template v-slot:item.date="{ item }">
        <p>{{ item.date | moment('d.M.YYYY') }}</p>
      </template>
      <template v-slot:item.edit="{ item }">
        <v-btn icon color="pink" @click="delTrip(item)">
          <v-icon>mdi-delete</v-icon>
        </v-btn>
        <EditTrip :item="item" @updatedTrip="updateTrip" class="d-inline"></EditTrip>
      </template>
    </v-data-table>
  </div>
</template>
<script>
import axios from 'axios';
import { openDB } from 'idb';

import EditTrip from '@/components/EditTrip.vue';

export default {
  name: 'Trips',

  data: () => ({
    headers: [
      {
        text: 'ID',
        align: 'start',
        value: 'id',
        sortable: false,
      },
      { text: 'Name', value: 'name' },
      { text: 'GPS Calls', value: 'gpscalls' },
      { text: 'Distance traveled', value: 'distance' },
      { text: 'Date', value: 'date' },
      { text: 'Edit', value: 'edit', sortable: false },
    ],
    items: [],
    db: null,
    offline: null,
    storedTrips: [],
  }),
  computed: {},
  watch: {
    offline: function (newValue, oldValue) {
      console.log(newValue, oldValue);
      if (newValue == false) {
        this.syncTrips();
      }
    },
  },
  props: {
    offline: { value: String },
  },
  created() {
    if (!this.db) this.openDB();
  },
  methods: {
    async openDB() {
      this.db = await openDB('atamsDB', 1, {
        upgrade(db) {
          const objectStore = db.createObjectStore('trips', { keyPath: 'id' });
          objectStore.createIndex('name', 'name', { unique: false });
        },
      });
      this.fetchData();
    },

    async getStoredTrips() {
      this.storedTrips = await this.db.getAll('trips');
    },

    async syncTrips() {
      const trips = await this.db.getAll('trips');
      const tripsToDelete = trips.filter((el) => el.isDeleted == true);
      const tripsToUpdate = trips.filter((el) => el.isUpdated == true);
      console.log(tripsToDelete, tripsToUpdate);
      tripsToDelete.forEach((el) => {
        this.delTripOn(el);
      });
      tripsToUpdate.forEach((el) => {
        this.updateTripOn(el);
      });
    },

    // Get Data

    fetchData() {
      console.log('fetchData called');
      console.log(this.offline);
      if (this.offline) this.getDataOff();
      else this.getDataOn();
    },

    async getDataOn() {
      const { data } = await axios({
        url: `${process.env.VUE_APP_SERVER}/trips`,
        method: 'get',
      });
      console.log(data.data);
      this.items = data.data.map((el) => ({ ...el, isDeleted: false }));

      console.log(this.items);
      const tx = this.db.transaction('trips', 'readwrite');
      tx.objectStore('trips').clear();
      await tx.done;
      for (let trip of this.items) {
        await this.db.put('trips', trip);
      }
    },

    async getDataOff() {
      const trips = await this.db.getAll('trips');
      this.items = trips.filter((el) => el.isDeleted == false);
    },

    // Delete Trip

    async delTrip(e) {
      console.log('delTrip called');
      if (this.offline) await this.delTripOff(e);
      else await this.delTripOn(e);
      await this.fetchData();
    },

    async delTripOff(e) {
      let trip = await this.db.get('trips', Number(e.id));
      trip.isDeleted = true;
      this.db.put('trips', trip);
      this.fetchData();
    },

    async delTripOn(e) {
      console.log(e);
      try {
        await axios({
          url: `${process.env.VUE_APP_SERVER}/trip/${e.id}`,
          method: 'delete',
        });
      } catch (error) {
        console.error(error);
      }
    },

    // Update Trip

    async updateTrip(e) {
      console.log('updateTrip called');
      if (this.offline) await this.updateTripOff(e);
      else await this.updateTripOn(e);
      await this.fetchData();
    },

    async updateTripOff(e) {
      await this.db.delete('trips', Number(e.id));
      let newTrip = e;
      newTrip.isUpdated = true;
      await this.db.put('trips', newTrip);
    },

    async updateTripOn(e) {
      try {
        await axios({
          url: `${process.env.VUE_APP_SERVER}/trip/${e.id}`,
          method: 'patch',
          contentType: 'application/json',
          data: {
            name: e.name,
          },
        });
      } catch (error) {
        console.error(error);
      }
    },
  },

  components: {
    EditTrip,
  },
};
</script>
