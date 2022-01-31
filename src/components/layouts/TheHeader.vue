<template>
  <the-menu @close="tryClose" :show="isMenuVisible"></the-menu>
  <header>
    <nav>
      <h1><router-link to="/">Find a Player</router-link></h1>
      <figure @click="toggleMenu">
        <img src="../../assets/icon/menu.svg" alt="" />
      </figure>
    </nav>
  </header>
</template>

<script>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

import TheMenu from "./TheMenu.vue";

export default {
  components: { TheMenu },
  setup() {
    const isMenuVisible = ref(false);
    const route = useRoute();

    watch(
      () => route.path,
      () => {
        isMenuVisible.value = false;
      }
    );

    function toggleMenu() {
      isMenuVisible.value = !isMenuVisible.value;
    }

    function tryClose(val) {
      isMenuVisible.value = val;
    }

    return { toggleMenu, isMenuVisible, tryClose };
  },
};
</script>

<style lang="scss" scoped>
header {
  height: 4rem;
  display: flex;
  border-bottom: 1px solid black;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  nav {
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      text-decoration: none;
      color: black;
    }

    figure {
      width: 35px;
      height: 40px;
      margin: 0;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
