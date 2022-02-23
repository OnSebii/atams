<template>
  <div class="container">
    <v-data-table :headers="headers" :items="items" class="elevation-1">
          <template v-slot:item.distance="{ item }">
        <p>{{ item.distance }} km</p>
      </template>
      <template v-slot:item.date="{ item }">
        <p>{{ item.date | moment('d.M.YYYY') }}</p>
      </template>
    </v-data-table>
  </div>
</template>
<script>
import axios from 'axios';
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
    ],
    items: [],
  }),
  computed: {},
  watch: {},
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      const { data } = await axios({
        url: `${process.env.VUE_APP_SERVER}/trips`,
        method: 'get',
      });
      console.log(data.data);
      this.items = data.data;
    },
  },
};
</script>
