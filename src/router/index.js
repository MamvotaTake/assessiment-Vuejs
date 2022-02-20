import Vue from "vue";
import VueRouter from "vue-router";
import HelloWorld from "./HelloWorld";

Vue.use(VueRouter);

export const router = new VueRouter({
  base: "/",
  mode: "history",
  routes: [{ path: "/hello", component: HelloWorld }],
});
