import Vue from "vue";
import Router from "vue-router";
import home from "./components/table.vue";
import setting from "./components/criterion.vue";
import result from "./components/result.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: home,
    },
    {
      path: "/setting",
      component: setting,
    },
    {
      path: "/result",
      component: result,
    },
  ],
});
