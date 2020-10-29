
<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="users"
      :items-per-page="5"
      class="elevation-1"
    ></v-data-table>
    <br />
    <br />
    <br />
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      headers: [ //fields and headers for the table
        {
          text: "id",
          align: "start",
          sortable: true,
          value: "id"
        },
        { text: "email", value: "email" },
        { text: "First name", value: "first_name" },
        { text: "Last name", value: "last_name" },
        { text: "Avatar", value: "avatar" } //renders the link only, can easily make it render the actual image
      ],
      users: [] //users array passes data to the vtable
    };
  },
  mounted() {
    axios
      .get("https://reqres.in/api/users?page=2")
      .then(response => response.data)
      .then(data => {
        this.users = data.data; //appends data from the rest api to the users array
        //console.log(data);  //debugging
      });
  },

  methods: {}
};
</script>