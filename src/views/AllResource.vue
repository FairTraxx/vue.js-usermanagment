<template>
  <div>
    <div
      v-for="item in resources"
      v-bind:key="item.id"
      class="alert alert-warning"
      role="alert"
    >
      {{ item.id }} {{ item.name }} {{ item.year }} {{ item.color }}
      {{ item.pantone_value }}
    </div>
    <div class="alert alert-secondary" role="alert">
      These will update dynamically from the api
    </div>

    //pagination example even though it's not needed in this case
    <div class="text-center">
      <v-pagination
        v-model="page"
        :length="4"
        prev-icon="mdi-menu-left"
        next-icon="mdi-menu-right"
      ></v-pagination>
    </div>
  </div>
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
      .get("https://reqres.in/api/unknown")
      .then(response => response.data)
      .then(data => {
        this.resources = data.data; //appends data from the rest api to the color array
        console.log(data); //debugging
      });
  }
};
</script>