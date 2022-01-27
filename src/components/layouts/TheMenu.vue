<template>
  <div v-if="show" @click="tryClose" class="backdrop"></div>
  <section v-if="show">
    <figure class="account-avatar">
      <img src="../../assets/icon/account.svg" alt="" />
    </figure>
    <ul>
      <li><router-link to="/players">Players</router-link></li>
    </ul>
  </section>
</template>

<script>
import { ref } from "vue";

export default {
  props: {
    show: {
      type: Boolean,
      required: true,
    },
  },
  emits: ["close"],
  setup(_, context) {
    const closeMenu = ref(false);

    function tryClose() {
      context.emit("close", closeMenu.value);
    }

    return { tryClose };
  },
};
</script>

<style lang="scss" scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  height: 100vh;
  z-index: 10;
}

section {
  position: fixed;
  top: 0;
  left: 20%;
  width: 100%;
  height: 100vh;
  background-color: white;
  z-index: 100;

  .account-avatar {
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    margin-bottom: 2rem;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  ul {
    border-top: 1px solid black;
    padding-top: 2rem;

    li {
      font-size: 1.5rem;
      font-weight: 600;
      list-style-type: none;

      a {
        text-decoration: none;
        color: black;
      }
    }
  }
}
</style>
