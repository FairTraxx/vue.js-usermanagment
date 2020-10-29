import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Resources from "../views/AllResource.vue";
import Listallusers from "../views/allusers.vue";
import SingleResource from "../views/singleresource.vue";
import addUser from "../views/usermanagment.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/Register",
    name: "Register",
    component: Register
  },
  {
    path: "/allresources",
    name: "Resources",
    component: Resources
  },
  {
    path: "/allusers",
    name: "Users",
    component: Listallusers
  },
  {
    path: "/singleresource",
    name: "Single Resource",
    component: SingleResource
  },
  {
    path: "/cruduser",
    name: "CRUD User",
    component: addUser
  },

  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
