<template>
  <header>
    <nav>
      <h1><router-link to="/">Find a Player</router-link></h1>
      <ul>
        <li>
          <router-link to="/players">Players</router-link>
        </li>
        <li>
          <router-link to="/login">Login</router-link>
        </li>
        <li><router-link to="/signUp">Signup</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
header {
  height: 5rem;
  display: flex;
  border-bottom: 1px solid white;
  justify-content: center;
  align-items: center;

  nav {
    width: 65%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  ul {
    width: 20%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 0;
  }

  li {
    list-style-type: none;
  }

  a {
    text-decoration: none;
    color: white;
  }
}
</style>
