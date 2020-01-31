import Vue from "vue";
import VueRouter from "vue-router";

const Pagination = () => import("../views/Pagination.vue");
Vue.use(VueRouter);

const routes = [
  {
    path: "/pagination",
    name: "Pagination",
    component: Pagination,
    meta: {
      title: "分页",
      icon: "columns-gutters"
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
