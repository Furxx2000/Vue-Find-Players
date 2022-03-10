<template>
  <div class="games-stats-title">
    <div class="game-date">GAME DATE</div>
    <div class="game-matchup">MATCHUP</div>
    <div>W/L</div>
    <div>MIN</div>
    <div>PTS</div>
    <div>FGM</div>
    <div>FGA</div>
    <div>FG%</div>
    <div>3PM</div>
    <div>3PA</div>
    <div>3P%</div>
    <div>FTM</div>
    <div>FTA</div>
    <div>FT%</div>
    <div>OREB</div>
    <div>DREB</div>
    <div>REB</div>
    <div>AST</div>
    <div>STL</div>
    <div>BLK</div>
    <div>TOV</div>
    <div>PF</div>
    <div>+/-</div>
    <player-last5Games
      v-for="game in selectedPlayersLastFiveGames"
      :key="game.gameDate"
      :game-date="game.gameDate"
      :opponent="game.opponent"
      :winOrLose="game.winOrLose"
      :minute="game.minute"
      :two-points="game.twoPoints"
      :three-points="game.threePoints"
      :free-throw="game.freeThrow"
      :oreb="game.oreb"
      :dreb="game.dreb"
      :ast="game.ast"
      :stl="game.stl"
      :blk="game.blk"
      :tov="game.tov"
      :pf="game.pf"
      :rpm="game.rpm"
    ></player-last5Games>
  </div>
</template>

<script>
import playerLast5Games from "../players/PlayerLast5Games.vue";

import { inject } from "vue";

export default {
  components: { playerLast5Games },
  setup() {
    const selectedPlayersLastFiveGames = inject("selectedPlayersLastFiveGames");

    return { selectedPlayersLastFiveGames };
  },
};
</script>

<style lang="scss" scoped>
.games-stats-title {
  position: relative;
  display: grid;
  grid-template-columns: repeat(23, minmax(max-content, 1fr));
  grid-gap: 1px;
  overflow: auto;
  padding-bottom: 1rem;

  .game-date {
    position: sticky;
    z-index: 100;
    left: 0;
  }
}
.games-stats-title > div {
  background-color: rgb(221, 221, 221);
  padding: 0.8rem 0.5rem;
  white-space: nowrap;
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.7px;
}

.games-stats-title > div:not(.game-date, .game-matchup) {
  text-align: center;
}
</style>
