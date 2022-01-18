<template>
  <button v-if="!link" :class="mode">
    <slot></slot>
  </button>
  <router-link v-else :to="to" :class="mode">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null,
    },
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
    to: {
      type: String,
      required: false,
      default: "/",
    },
  },
};
</script>

<style lang="scss" scoped>
button,
a {
  text-decoration: none;
  padding: 1rem;
  font: inherit;
  border: none;
  font-size: 16px;
  background-color: white;
  border-radius: 0 2px 2px 0;
  cursor: pointer;
  display: inline-block;
  transition: 0.1s ease-in;

  &:hover,
  &:active {
    color: #81c7d4;
  }
}
</style>
