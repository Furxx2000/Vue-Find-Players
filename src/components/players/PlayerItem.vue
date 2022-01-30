<template>
  <router-link :to="playerRoute">
    <figure>
      <img :src="imgSrc" alt="" />
      <figcaption>
        {{ fullName }}
      </figcaption>
    </figure>
  </router-link>
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";

export default {
  props: ["id", "name", "position", "team"],
  setup(props) {
    const route = useRoute();

    const fullName = computed(() => `${props.name}`);
    const playerId = computed(() => props.id);
    const playerRoute = `${route.path}/${playerId.value}`;

    const team = computed(() => props.team);

    const imgSrc = computed(() =>
      require(`../../assets/pics/${team.value}/${props.id}.jpg`)
    );

    return { fullName, imgSrc, playerRoute };
  },
};
</script>

<style lang="scss" scoped>
figure {
  position: relative;
  width: 60px;
  height: 60px;
  margin: 0 0.5rem 3rem 0.5rem;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    border-radius: 35%;
    object-fit: cover;
  }

  figcaption {
    text-align: center;
    font-size: 0.8rem;
  }
}
</style>
