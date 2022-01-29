<template>
  <main>
    <section>
      <form class="search--form">
        <input type="text" placeholder="Search Players" />
        <base-button>Search</base-button>
      </form>
    </section>
  </main>
</template>

<style lang="scss" scoped>
main {
  max-width: 90%;
  height: 20rem;
  margin: 2rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  form {
    display: block;
    border: 1px solid black;

    input {
      border: none;
      padding: 0.8rem;
      font-size: 16px;
      font: inherit;
      outline: none;
    }
  }
}
</style>
