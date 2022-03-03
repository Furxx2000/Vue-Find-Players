<template>
  <main>
    <section>
      <players-filter
        @search-term="updateSearch"
        @position-filter="positionFilter"
        :search-term="enteredSearchTerm"
      ></players-filter>
    </section>
    <section>
      <base-card>
        <ul>
          <player-item
            v-for="player in searchPlayer"
            :key="player.id"
            :id="player.id"
            :name="player.names.chiName"
            :position="player.position"
            :team="player.team.engTeamName"
          ></player-item>
        </ul>
      </base-card>
    </section>
  </main>
</template>

<script>
import PlayersFilter from "../../components/players/PlayersFilter";
import PlayerItem from "../../components/players/PlayerItem";

import { computed, ref, watch } from "vue";
import { useStore } from "vuex";

export default {
  components: {
    PlayersFilter,
    PlayerItem,
  },
  setup() {
    const store = useStore();
    const position = ref("全部");
    const enteredSearchTerm = ref("");
    const activeSearchTerm = ref("");

    function positionFilter(val) {
      position.value = val;
    }

    function updateSearch(val) {
      enteredSearchTerm.value = val;
    }

    const filteredPlayers = computed(() => {
      const players = computed(() => store.getters["players/players"]);

      if (!(position.value === "全部")) {
        return players.value.filter(
          (player) => player.position === position.value
        );
      }
      return players.value;
    });

    const searchPlayer = computed(() => {
      let filteredTerms = [];
      if (activeSearchTerm.value) {
        filteredTerms = filteredPlayers.value.filter((player) =>
          player.names.chiName.includes(activeSearchTerm.value)
        );
      } else {
        filteredTerms = filteredPlayers.value;
      }
      return filteredTerms;
    });

    watch(enteredSearchTerm, function (newValue) {
      setTimeout(() => {
        if (newValue === enteredSearchTerm.value) {
          activeSearchTerm.value = newValue;
        }
      }, 300);
    });

    return { positionFilter, updateSearch, searchPlayer, enteredSearchTerm };
  },
};
</script>

<style lang="scss" scoped>
ul {
  padding: 0 1rem;
  display: inline-flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.7rem;
  margin: 0;
}
</style>
