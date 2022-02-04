<template>
  <div class="container">
    <v-data-table :headers="headers" :items="items" class="elevation-1"> </v-data-table>
  </div>
</template>
<script>
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
      { text: 'GPS Calls', value: 'xyz' },
      { text: 'Distance traveled', value: 'xyz' },
    ],
    items: [],
  }),
  computed: {},
  watch: {},
  created() {},
  methods: {},
};
</script>
