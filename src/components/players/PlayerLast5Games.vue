<template>
  <div class="game-date">{{ gameStats.gameDate.value }}</div>
  <div class="game-matchup">{{ gameStats.opponent.value }}</div>
  <div>{{ gameStats.winOrLose.value }}</div>
  <div>{{ gameStats.minute.value }}</div>
  <div>{{ gameStats.scores }}</div>
  <div>{{ gameStats.twoPoints.value.fgm }}</div>
  <div>{{ gameStats.twoPoints.value.fga }}</div>
  <div>{{ gameStats.twoPointsPercentage }}</div>
  <div>{{ gameStats.threePoints.value.fgm }}</div>
  <div>{{ gameStats.threePoints.value.fga }}</div>
  <div>40.0</div>
  <div>{{ gameStats.freeThrow.value.ftm }}</div>
  <div>{{ gameStats.freeThrow.value.fta }}</div>
  <div>100</div>
  <div>{{ gameStats.oreb.value }}</div>
  <div>{{ gameStats.dreb.value }}</div>
  <div>{{ gameStats.ast.value }}</div>
  <div>{{ gameStats.stl.value }}</div>
  <div>{{ gameStats.blk.value }}</div>
  <div>{{ gameStats.tov.value }}</div>
  <div>{{ gameStats.tov.value }}</div>
  <div>{{ gameStats.pf.value }}</div>
  <div>{{ gameStats.rpm.value }}</div>
</template>

<script>
import { computed, toRefs } from "vue";

export default {
  props: {
    gameDate: {
      type: String,
    },
    opponent: {
      type: String,
    },
    winOrLose: {
      type: String,
    },
    minute: {
      type: String,
    },
    twoPoints: {
      type: Object,
    },
    threePoints: {
      type: Object,
    },
    freeThrow: {
      type: Object,
    },
    oreb: {
      type: Number,
    },
    dreb: {
      type: Number,
    },
    ast: {
      type: Number,
    },
    stl: {
      type: Number,
    },
    blk: {
      type: Number,
    },
    tov: {
      type: Number,
    },
    pf: {
      type: Number,
    },
    rpm: {
      type: String,
    },
  },
  setup(props) {
    const stats = toRefs(props);

    // 得分計算
    const { twoPoints, threePoints, freeThrow } = stats;

    const scores = computed(
      () =>
        twoPoints.value.fgm * 2 +
        threePoints.value.fgm * 3 +
        freeThrow.value.ftm
    );

    // 2分球, 3分球命中率
    const twoPointsPercentage = computed(() =>
      ((twoPoints.value.fgm / twoPoints.value.fga) * 100).toFixed(1)
    );

    const threePointsPercentage = computed(
      () => (threePoints.value.fgm / threePoints.value.fga) * 100
    );

    const freeThrowPercentage = computed(
      () => (freeThrow.value.ftm / freeThrow.value.fta) * 100
    );

    // 將計算好的數據加入到gameStats
    const gameStats = {
      ...stats,
      scores: scores.value,
      twoPointsPercentage: twoPointsPercentage.value,
      threePointsPercentage: threePointsPercentage.value,
      freeThrowPercentage: freeThrowPercentage.value,
    };

    return { gameStats };
  },
};
</script>

<style lang="scss" scoped>
.game-date {
  background-color: white;
  position: sticky;
  z-index: 100;
  left: 0;
}

div {
  padding: 0.5rem 0.5rem;
}

div:not(.game-date, .game-matchup) {
  text-align: right;
}
</style>
