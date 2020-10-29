<template>
  <div class="text-center">
    <h2>Login</h2>
    <br />
    <br />
    <v-layout>
      <v-flex align-self-center>
        <v-card>
          <v-card-text>
            <form @keyup.enter="logItIn">
              <v-text-field v-model="login.email" label="Email" required>
              </v-text-field>
              <v-text-field
                v-model="login.password"
                label="Password"
                type="password"
                required
              >
              </v-text-field>
            </form>
          </v-card-text>

          <v-btn class="mb-3" success @click="logItIn">Login</v-btn>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>


<script>
import axios from "axios";
export default {
  data() {
    return {
      login: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    logItIn() {
      console.log("email" + this.login.email);
      console.log("password" + this.login.password);
      axios.post("https://reqres.in/api/login", this.login).then(response => {
        let newToken = response.data.token;
        window.token = newToken;
        let user = response.data.user;
        localStorage.setItem("token", newToken);
        localStorage.setItem("user", JSON.stringify(user));
        window.axios.defaults.params = { api_token: newToken };
        this.$router.push("/allresources");
      });
    }
  }
};
</script>