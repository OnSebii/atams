<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="#A3C3D9" v-bind="attrs" v-on="on"> Start </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Plan a new trip</span>
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
          <v-btn color="blue darken-1" text @click="startTrip"> Start </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-form>
</template>

<script>
export default {
  name: 'NewTripForm',
  data() {
    return {
      dialog: false,
      valid: true,
      tripName: '',
      nameRules: [(v) => !!v || 'Name is required'],
    };
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

    startTrip() {
      if (this.validate() == true) {
        this.$emit('start', this.tripName);
        this.dialog = false;
      }
    },
  },
};
</script>
