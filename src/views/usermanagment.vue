<template>
  <div>
    <h1>User Management</h1>
    <br />
    <br />
    <h2>Add a new user</h2>
    <v-form v-model="newuser">
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="name"
              :rules="nameRules"
              :counter="20"
              label="Name"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              v-model="job"
              :rules="nameRules"
              label="job"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-btn
          outlined
          raised
          color="deep-purple lighten-2"
          text
          @click="addnewuser"
        >
          Add User
        </v-btn>
      </v-container>
    </v-form>

    <br />
    <br />
    <h2>Update User</h2>
    <v-form v-model="updateuser">
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="name"
              :rules="nameRules"
              :counter="20"
              label="Name"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              v-model="job"
              :rules="nameRules"
              label="job"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-btn
          outlined
          raised
          color="deep-purple lighten-2"
          text
          @click="addnewuser"
        >
          Update User
        </v-btn>
      </v-container>
    </v-form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      newuser: {
        email: "",
        job: ""
      }
    };
  },

  methods: {
    addnewuser() {  //add user function, Update user is practically the same
      axios.post("https://reqres.in/api/users", this.newuser).then(response => {
        this.info = response;
        this.$router.push("/allusers");
        console.log(response);
        return { response };
      });
    }
  }
};
</script>
