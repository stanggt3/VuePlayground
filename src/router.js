import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Examples from "./views/Examples.vue";
import MonsterGame from './views/MonsterGame.vue';
import Lifecycle from './views/Lifecycle.vue';

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/examples",
      name: "examples",
      component: Examples
    },
    {
      path: "/MonsterGame",
      name: "MonsterGame",
      component: MonsterGame
    },
    {
      path: "/Lifecycle",
      name: "lifecycle",
      component: Lifecycle
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
