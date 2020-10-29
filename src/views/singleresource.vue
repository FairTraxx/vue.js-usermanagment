<template>
  <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="374"
    v-bind:key="resources.id"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      src="https://site-files.fiftyflowers.com/FiftyFlowers/Image/Product/Mamy_Blue_Close_Up_350_49d0e709.jpg"
    ></v-img>

    <v-card-title>{{ resources.name }}</v-card-title>

    <v-card-text>
      <v-row align="center" class="mx-0">
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ml-4">
          4.5 (413)
        </div>
      </v-row>

      <div class="my-4 subtitle-1">$ • year: {{ resources.year }}</div>

      <div>
        The color code for this is {{ resources.color }} and the pantone value
        is {{ resources.pantone_value }} (these values are dynamic rendered
        directly from the api)
      </div>
    </v-card-text>

    <v-card-actions>
      <v-btn color="deep-purple lighten-2" text @click="reserve">
        Buy
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      resources: []
    };
  },

  mounted() {
    axios
      .get("https://reqres.in/api/unknown/2")
      .then(response => response.data)
      .then(data => {
        this.resources = data.data; //appends data from the rest api to the color array
        console.log(data); //debugging
      });
  }
};
</script>