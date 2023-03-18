import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "../pages/HomePage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "landing",
      component: LandingPage,
    },
    {
      path: "/view-repo",
      name: "viewRepo",
      component: () => import("../pages/RepoData.vue"), 
    },
    {
      path: "/:pathMatch(.*)*",
      name: "error",
      component: () => import("../pages/Notfound.vue"),
    },
  ],
});

export default router;
