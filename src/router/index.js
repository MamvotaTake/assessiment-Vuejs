import { createWebHistory, createRouter } from "vue-router";
import GalleryView from "@/views/GalleryView.vue";
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
    component: GalleryView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
