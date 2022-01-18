<template>
  <section>
    <form>
      <input type="text" placeholder="Search Players" />
      <base-button>Search</base-button>
    </form>
  </section>
</template>

<style lang="scss" scoped>
section {
  height: 20rem;
  margin: 2rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

form {
  box-shadow: 0 2px 2px 1px rgba(0, 0, 0, 0.212);
}

input {
  width: 25rem;
  border: none;
  padding: 1rem;
  border-radius: 2px 0 0 2px;
  font-size: 16px;
  font: inherit;
  outline: none;
}
</style>
