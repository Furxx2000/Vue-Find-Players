export default {
  saveGame(state, payload) {
    const player = state.playersLastFiveGames.find(
      (player) => player.name === payload.name
    );

    player.lastFiveGames.unshift(payload);
    if (player.lastFiveGames.length > 5) {
      player.lastFiveGames.pop();
    }
  },
};
