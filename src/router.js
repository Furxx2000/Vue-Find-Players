import { createRouter, createWebHistory } from "vue-router";
import PlayersList from "./pages/players/PlayersList.vue";
import Search from "./pages/search/Search.vue";
import PlayerDetail from "./pages/players/PlayerDetail.vue";
import SaveGames from "./pages/save/SaveGames.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/search" },
    { path: "/search", component: Search },
    { path: "/players", component: PlayersList },
    { path: "/players/:id", component: PlayerDetail, props: true },
    { path: "/saveGames", component: SaveGames },
  ],
});

export default router;
