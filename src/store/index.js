import { createStore } from "vuex";
import playersModule from "./modules/players/index";
import lastFiveGamesModule from "./modules/lastFiveGames/index";

const store = createStore({
  modules: {
    players: playersModule,
    lastFiveGames: lastFiveGamesModule,
  },
});

export default store;
