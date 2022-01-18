<template>
  <figure>
    <span>{{ position }}</span>
    <img :src="imgSrc" alt="" />
    <figcaption>
      {{ fullName }}
    </figcaption>
  </figure>
</template>

<script>
import { computed } from "vue";

export default {
  props: ["id", "firstName", "lastName", "position", "team"],
  setup(props) {
    const fullName = computed(() => `${props.firstName}${props.lastName}`);

    const team = computed(() => props.team);

    const imgSrc = computed(() =>
      require(`../../assets/pics/${team.value}/${props.id}.jpg`)
    );

    return { fullName, imgSrc };
  },
};
</script>

<style lang="scss" scoped>
figure {
  position: relative;
  width: 14%;
  height: 100px;
  margin: 0 0.5rem 3rem 0.5rem;
  border: 2px solid black;
  border-radius: 4px;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  span {
    position: absolute;
    right: 1px;
    bottom: 0;
    font-size: 14px;
    color: white;
    background-color: gray;
    padding: 0 5px;
  }
}
</style>
