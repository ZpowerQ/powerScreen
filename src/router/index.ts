import { createRouter, createWebHistory } from "vue-router";
import PowerMain from "@/views/power-main.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: PowerMain,
    },
  ],
});

export default router;
