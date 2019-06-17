import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/mentors",
      name: "mentors",
      component: () => import("./views/Mentors.vue")
    },
    {
      path: "/alumni",
      name: "alumni",
      component: () => import("./views/Alumni.vue")
    },
    {
      path: "/projects",
      name: "projects",
      component: () => import("./views/Projects.vue")
    },
    {
      path: "/resources",
      name: "resources",
      component: () => import("./views/Resources.vue")
    },
    {
      path: "*",
      name: "404",
      component: () => import("./views/Home.vue")
    }
  ]
});
