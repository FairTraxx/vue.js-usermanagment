<template>
  <div class="text-center">
    <h2>Register User</h2>
    <br />
    <br />
    <v-layout>
      <v-flex align-self-center>
        <v-card>
          <v-card-text>
            <form @keyup.enter="reguser">
              <v-text-field v-model="register.email" label="Email" required>
              </v-text-field>
              <v-text-field
                v-model="register.password"
                label="Password"
                type="password"
                required
              >
              </v-text-field>
            </form>
          </v-card-text>

          <v-btn class="mb-3" success @click="reguser">Register</v-btn>
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
      register: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    reguser() {
      console.log("email" + this.register.email);
      console.log("password" + this.register.password);
      axios
        .post("https://reqres.in/api/register", this.register)
        .then(response => {
          let newToken = response.data.token;
          window.token = newToken;
          let user = response.data.user;
          localStorage.setItem("token", newToken);
          localStorage.setItem("user", JSON.stringify(user));
          window.axios.defaults.params = { api_token: newToken };
          //Event.$emit("login", user);
          this.$router.push("/allresources");
        });
    }
  }
};
</script>

