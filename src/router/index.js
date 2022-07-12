import { createRouter, createWebHistory } from "vue-router";
import Frontend from "../views/Frontend";

const routes = [{ path: "/frontend", component: Frontend }];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
