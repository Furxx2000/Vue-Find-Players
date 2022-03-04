<template>
  <teleport to="body">
    <transition name="backdrop">
      <div v-if="show" @click="tryClose" class="backdrop"></div>
    </transition>
    <transition name="mobileNav">
      <nav v-if="show">
        <router-link to="/search">
          <section class="account-avatar">
            <figure>
              <img src="../../assets/icon/account.svg" alt="" />
            </figure>
            <span>登入</span>
          </section>
        </router-link>
        <ul>
          <li><router-link to="/players">Players</router-link></li>
          <li><router-link to="/saveGames">Save Games</router-link></li>
        </ul>
      </nav>
    </transition>
  </teleport>
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
a {
  text-decoration: none;
  color: black;
}

.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  height: 100vh;
  z-index: 150;
}

nav {
  position: fixed;
  top: 0;
  left: 20%;
  width: 100%;
  height: 100vh;
  background-color: white;
  z-index: 200;

  .account-avatar {
    display: flex;
    align-items: center;
    height: 4rem;
    border-bottom: 1px solid black;
    padding: 1rem;

    figure {
      width: 50px;
      height: 50px;
      margin: 0 0.5rem 0 0.9rem;
      display: flex;
      align-items: center;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    span {
      font-weight: 600;
    }
  }

  ul {
    padding: 1rem;
    margin: 0;

    li {
      margin: 1rem;
      font-size: 1.5rem;
      font-weight: 600;
      list-style-type: none;
    }
  }
}

.mobileNav-enter-from,
.mobileNav-leave-to {
  left: 100%;
}

.mobileNav-enter-active {
  transition: all 0.35s cubic-bezier(0, 0.83, 0.63, 1.01);
}

.mobileNav-leave-active {
  transition: all 0.35s cubic-bezier(0, 0.83, 0.63, 1.01);
}

.mobileNav-enter-to,
.mobileNav-leave-from {
  right: 20%;
}

.backdrop-leave-active {
  transition: all 0.5s;
}
</style>
