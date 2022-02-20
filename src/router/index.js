import { createWebHistory, createRouter } from "vue-router";
import PhotoView from "@/views/PhotoView.vue";
import WeatherView from "@/views/WeatherView.vue";

const routes = [
  {
    path: "/",
    name: "Weather",
    component: WeatherView,
  },
  {
    path: "/photo",
    name: "Gallery",
    component: PhotoView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
