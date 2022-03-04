export default {
  async saveGame(context, payload) {
    const str = payload.gameDate;
    const newStr = str.replaceAll("-", "/");

    const newGameStatsData = {
      ...payload,
      gameDate: newStr,
    };

    context.commit("saveGame", newGameStatsData);
  },
};
