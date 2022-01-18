<template>
  <section>
    <players-filter @position-filter="positionFilter"></players-filter>
  </section>
  <section>
    <base-card>
      <ul>
        <player-item
          v-for="player in filteredPlayers"
          :key="player.id"
          :id="player.id"
          :first-name="player.firstName.chiFirstName"
          :last-name="player.lastName.chiLastName"
          :position="player.position"
          :team="player.team.engTeamName"
        ></player-item>
      </ul>
    </base-card>
  </section>
</template>

<script>
import PlayersFilter from "../../components/players/PlayersFilter";
import PlayerItem from "../../components/players/PlayerItem";

import { computed, ref } from "vue";
import { useStore } from "vuex";

export default {
  components: {
    PlayersFilter,
    PlayerItem,
  },
  setup() {
    const store = useStore();
    const position = ref("全部");

    function positionFilter(val) {
      position.value = val;
    }

    const filteredPlayers = computed(() => {
      const players = computed(() => store.getters["players/players"]);

      if (!(position.value === "全部")) {
        return players.value.filter((player) => {
          return player.position === position.value;
        });
      }

      return players.value;
    });

    return { positionFilter, filteredPlayers };
  },
};
</script>

<style lang="scss" scoped>
ul {
  max-width: 705px;
  padding: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
}
</style>
