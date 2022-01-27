<template>
  <section>
    <figure>
      <img src="" alt="" />
      <h1>Picture</h1>
    </figure>
    <div class="player--info"><h1>Player--info</h1></div>
    <div class="social--media"><h1>Social--Media</h1></div>
  </section>
  <div class="player--stats">
    <div class="player-stats-left">
      <div>PPG</div>
      <div>RPG</div>
      <div>ARG</div>
      <div>PIE</div>
    </div>
    <div class="player-stats-right">
      <div class="player-stats-right-item">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="player-stats-right-item">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {},
};
</script>

<style lang="scss" scoped>
section {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 300px;
  border: 1px solid black;
  padding: 0 15rem;

  figure,
  .player--info,
  .social--media {
    flex-grow: 1;
    width: 300px;
    height: 100%;
    border: 1px solid black;
    margin: 0;
    text-align: center;
  }
}

.player--stats {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 120px;
  border: 1px solid black;
  padding: 0 15rem;

  .player-stats-left,
  .player-stats-right {
    flex-grow: 1;
    border: 1px solid black;
    height: 100%;
  }

  .player-stats-left {
    width: 45%;
    display: flex;
    align-items: center;

    div {
      flex-grow: 1;
      height: 100%;
      border: 1px solid black;
      text-align: center;
      font-weight: 600;
    }
  }

  .player-stats-right {
    width: 55%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    .player-stats-right-item {
      width: 100%;
      height: 50%;
      border: 1px solid black;
      display: flex;
      align-items: center;

      div {
        flex-grow: 1;
        height: 100%;
        border: 1px solid black;
      }
    }
  }
}
</style>
