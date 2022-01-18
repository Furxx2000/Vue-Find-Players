import { createRouter, createWebHistory } from "vue-router";
import PlayersList from "./pages/players/PlayersList.vue";
import Search from "./pages/search/Search.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/search" },
    { path: "/search", component: Search },
    { path: "/players", component: PlayersList },
  ],
});

export default router;
