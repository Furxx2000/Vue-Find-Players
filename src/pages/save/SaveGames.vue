<template>
  <main>
    <h2>數據紀錄</h2>
    <ul>
      <li>球員</li>
      <li>球隊</li>
    </ul>
    <player-form @save-game="saveGame"></player-form>
  </main>
</template>

<script>
import PlayerForm from "../../components/players/PlayerForm.vue";

import { useStore } from "vuex";

export default {
  components: {
    PlayerForm,
  },
  setup() {
    const store = useStore();

    function saveGame(data) {
      store.dispatch("lastFiveGames/saveGame", data);
    }

    return { saveGame };
  },
};
</script>

<style lang="scss" scoped>
main {
  padding: 0 1rem;

  ul {
    display: flex;
    align-items: center;
    padding: 0;

    li {
      display: flex;
      align-items: center;
      justify-content: center;
      list-style-type: none;
      width: 80px;
      height: 40px;
      font-weight: 600;
      background-color: rgba(128, 128, 128, 0.116);
      border-radius: 1rem;
      margin-right: 1rem;
    }

    li.active {
      background-color: gray;
      color: white;
    }
  }
}
</style>
