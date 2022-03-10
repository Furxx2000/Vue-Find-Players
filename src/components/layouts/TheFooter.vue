<template>
  <footer>
    <h2>Find a Player</h2>
    <ul>
      <li>
        <svg-icon icon-class="youtube"></svg-icon>
      </li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </footer>
</template>

<script>
export default {
  setup() {},
};
</script>

<style lang="scss" scoped>
footer {
  max-width: 100%;
  height: 200px;
  border-top: 1px solid black;

  h2 {
    text-align: center;
  }

  li {
    list-style-type: none;
  }

  .icon-youtube {
    width: 50px;
    height: 50px;
    fill: black !important;
  }
}
</style>
