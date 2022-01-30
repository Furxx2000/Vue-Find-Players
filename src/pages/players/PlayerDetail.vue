<template>
  <main>
    <h2>球員資訊</h2>
    <section class="player--info">
      <figure>
        <img src="" alt="" />
      </figure>
      <div>
        <div>
          <span>#12</span>
          <span>台北富邦勇士</span>
          <span>後衛</span>
        </div>
        <div>{{ filteredPlayers.names.chiName }}</div>
      </div>
    </section>
  </main>
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

export default {
  setup() {
    const route = useRoute();
    const store = useStore();

    const players = computed(() => store.getters["players/players"]);

    const filteredPlayers = computed(() =>
      players.value.find((player) => player.id === route.params.id)
    );
    console.log(filteredPlayers.value);

    return { route, filteredPlayers };
  },
};
</script>

<style lang="scss" scoped>
main {
  padding: 0 1rem;
}

.player--info {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
