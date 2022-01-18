<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.card {
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.411);
  padding: 0.5rem;
  margin: 2rem auto;
  max-width: 45rem;
}
</style>
