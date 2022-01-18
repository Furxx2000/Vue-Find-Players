<template>
  <base-card>
    <section>
      <ul>
        <li id="all" :class="{ active: bool }" @click="clicked">全部</li>
        <li id="guard" @click="clicked">後衛</li>
        <li id="forward" @click="clicked">前鋒</li>
        <li id="center" @click="clicked">中鋒</li>
      </ul>
      <form>
        <input type="text" placeholder="球員名稱" />
        <base-button>Search</base-button>
      </form>
    </section>
  </base-card>
</template>

<script>
import { ref } from "vue";

export default {
  emits: ["position-filter"],
  setup(_, context) {
    const bool = ref(true);
    const beforeTarget = ref(null);

    function clicked(e) {
      bool.value = false;

      if (beforeTarget.value) {
        beforeTarget.value.classList.remove("active");
      }

      beforeTarget.value = e.target;

      const position = e.target.textContent;

      e.target.classList.add("active");

      context.emit("position-filter", position);
    }

    return { clicked, bool };
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/main.scss";

section {
  display: flex;
  align-items: center;
}

ul {
  padding: 0 1rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-grow: 1;

  li {
    color: black;
    font-weight: bold;
    font-family: inherit;
    list-style-type: none;
    margin-right: 1rem;
    cursor: pointer;

    &:hover {
      color: $primary-color;
    }
  }
}

form {
  flex-grow: 2;
}

input {
  width: 80%;
  border: none;
  padding: 0.5rem 0.5rem 0.5rem 1rem;
  border-radius: 2px 0 0 2px;
  font-size: 16px;
  font-family: inherit;
  outline: none;
  background-color: rgba(128, 128, 128, 0.075);
}

.active {
  color: $primary-color;
}
</style>
