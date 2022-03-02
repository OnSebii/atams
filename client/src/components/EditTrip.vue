<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon color="blue" v-bind="attrs" v-on="on">
          <v-icon left> mdi-pencil </v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Edit your trip</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field label="Trip name*" hint="The name of your trip" required v-model="tripName" :rules="nameRules"></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false"> Close </v-btn>
          <v-btn color="blue darken-1" text @click="saveTrip"> Save </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-form>
</template>

<script>
export default {
  name: 'EditTrip',
  data() {
    return {
      dialog: false,
      valid: true,
      tripName: '',
      nameRules: [(v) => !!v || 'Name is required'],
    };
  },
  props: {
    item: { value: Object },
  },
  created() {
    this.tripName = this.item.name;
  },
  methods: {
    validate() {
      return this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },

    saveTrip() {
      if (this.validate() == true) {
        let newObject = this.item;
        newObject.name = this.tripName;
        this.$emit('updatedTrip', newObject);
        this.dialog = false;
      }
    },
  },
};
</script>
