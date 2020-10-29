<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <a href="/" class="navbar-brand">Agency IT</a>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/Register" class="nav-link">Register</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/Login" class="nav-link">Login</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/allresources" class="nav-link"
            >Resources</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/singleresource" class="nav-link"
            >Single resource</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/allusers" class="nav-link">Users</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/cruduser" class="nav-link">CRUD</router-link>
        </li>
      </div>
    </nav>

    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>

<script>
//import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",

  components: {
    //HelloWorld
  },

  data: () => ({
    //
  })
};
</script>

