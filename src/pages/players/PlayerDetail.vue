<template>
  <main>
    <h2>球員資訊</h2>
    <section class="player">
      <figure>
        <img :src="imgSrc" alt="" />
      </figure>
      <div class="player--info">
        <div class="player--info--upper">
          <span>#{{ player.number }}</span>
          <span>{{ player.team.chiTeamName }}</span>
          <span>{{ player.position }}</span>
        </div>
        <div class="player--info--middle">{{ player.names.chiName }}</div>
        <div class="player--info--lower">{{ player.names.engName }}</div>
      </div>
    </section>
    <section class="player--states">
      <div class="grid-container" :class="{ open: isOpen }">
        <div class="item--1">得分: {{ averageData(player.points) }}</div>
        <div class="item--2">籃板: {{ averageData(player.rebounds) }}</div>
        <div class="item--3">助攻: {{ averageData(player.assists) }}</div>
        <div class="item--4">身高: {{ player.height }}公分</div>
        <div class="item--5">體重: {{ player.weight }}公斤</div>
        <div class="item--6">年齡: {{ realAge }}歲</div>
        <div class="item--7">職業年資: {{ player.experience }}年</div>
        <div class="item--8">生日: {{ player.birthday }}</div>
        <div class="item--9">國籍: {{ player.country }}</div>
        <div class="item--10">畢業學校: {{ player.lastAttended }}</div>
      </div>
    </section>
    <div @click="expand" :class="{ open: isOpen }" class="expand-arrow">
      <img src="../../assets/icon/expand_arrow.svg" alt="" />
    </div>
    <div class="line"></div>
    <section class="last-5-games">
      <h2>近5場比賽</h2>
      <div class="container">
        <div class="games">
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
        </div>
        <div class="game-states"></div>
      </div>
    </section>
  </main>
</template>

<script>
import playerLast5Games from "../../components/players/PlayerLast5Games.vue";

import { computed, reactive, ref } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

export default {
  components: { playerLast5Games },
  setup() {
    const route = useRoute();
    const store = useStore();
    const isOpen = ref(false);

    // 篩選出球員資料
    const selectedPlayers = computed(() => {
      const players = computed(() => store.getters["players/players"]);

      return players.value.find((player) => player.id === route.params.id);
    });

    const player = reactive({
      ...selectedPlayers.value,
    });

    // 篩選出球員最近五場資料
    const selectedPlayersLastFiveGames = computed(() => {
      const players = computed(
        () => store.getters["lastFiveGames/playersLastFiveGames"]
      );

      const selectedPlayersName = selectedPlayers.value.names.chiName;
      return players.value.find((player) => player.name === selectedPlayersName)
        ?.lastFiveGames;
    });

    // 計算年齡
    const realAge = computed(() => {
      const now = new Date();
      const playerBirthday = new Date(player.birthday);
      const age = now.getFullYear() - playerBirthday.getFullYear();
      const realPlayerMonth = playerBirthday.getMonth() + 1;
      const realNowMonth = now.getMonth() + 1;

      if (
        realNowMonth < realPlayerMonth ||
        (realNowMonth === realPlayerMonth && realNowMonth < realPlayerMonth)
      ) {
        return age - 1;
      } else {
        return age;
      }
    });

    // 計算平均得分、籃板、助攻
    function averageData(val) {
      return (val / player.playedGames).toFixed(2);
    }

    const imgSrc = computed(() =>
      require(`../../assets/pics/${player.team.engTeamName}/${route.params.id}.jpg`)
    );

    // Expand-arrow控制球員State收合
    function expand() {
      isOpen.value = !isOpen.value;
    }

    return {
      route,
      player,
      imgSrc,
      expand,
      averageData,
      isOpen,
      realAge,
      selectedPlayersLastFiveGames,
    };
  },
};
</script>

<style lang="scss" scoped>
main {
  padding: 0 1rem;

  section.player {
    display: flex;
    align-items: flex-start;
    margin-bottom: 2rem;

    figure {
      width: 100px;
      height: 100px;
      margin: 0 2rem 0 0;
      cursor: pointer;

      img {
        width: 100%;
        height: 100%;
        border-radius: 35%;
        object-fit: cover;
      }
    }

    .player--info--upper {
      margin-bottom: 0.5rem;

      span {
        font-size: 18px;
        font-weight: 600;
        margin-right: 1rem;
      }
    }

    .player--info--middle {
      font-size: 1.5rem;
      font-weight: 600;
    }

    .player--info--lower {
      font-family: "Open Sans", sans-serif;
      font-size: 1.1rem;
    }
  }

  .grid-container {
    overflow-y: hidden;
    height: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr 100px;
    column-gap: 0.5rem;

    > div {
      font-size: 15px;
    }

    > div:not(.item--1, .item--4, .item--7, .item--10) {
      padding-left: 0.5rem;
    }

    .item--10 {
      grid-area: 4 / 1 / 5 / 4;
    }
  }

  .grid-container.open {
    height: 120px;
  }

  .expand-arrow {
    width: 40px;
    height: 40px;
    margin: 0 auto;
    margin-bottom: 0.7rem;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .expand-arrow.open {
    transform: rotate(180deg);
  }

  .line {
    border-top: 1px solid black;
  }

  .last-5-games .container {
    max-width: 100%;

    .games-stats-title {
      position: relative;
      display: grid;
      grid-template-columns: repeat(23, minmax(max-content, 1fr));
      grid-gap: 1px;
      overflow: auto;

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
  }
}
</style>
