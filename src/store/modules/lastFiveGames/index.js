import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

export default {
  namespaced: true,
  state() {
    return {
      playersLastFiveGames: [
        {
          name: "林志傑",
          lastFiveGames: [
            {
              gameDate: "2021/12/04",
              opponent: "台新夢想家",
              winOrLose: "敗",
              minute: "13:48",
              twoPoints: {
                fgm: 2,
                fga: 3,
              },
              threePoints: {
                fgm: 2,
                fga: 5,
              },
              freeThrow: {
                ftm: 1,
                fta: 1,
              },
              oreb: 1,
              dreb: 3,
              ast: 2,
              stl: 1,
              blk: 0,
              tov: 2,
              pf: 1,
              rpm: "+10",
            },
            {
              gameDate: "2022/01/01",
              opponent: "新竹街口攻城獅",
              winOrLose: "敗",
              minute: "24:42",
              twoPoints: {
                fgm: 1,
                fga: 6,
              },
              threePoints: {
                fgm: 3,
                fga: 5,
              },
              freeThrow: {
                ftm: 5,
                fta: 7,
              },
              oreb: 1,
              dreb: 2,
              ast: 1,
              stl: 2,
              blk: 0,
              tov: 2,
              pf: 0,
              rpm: "+8",
            },
            {
              gameDate: "2022/01/02",
              opponent: "新北國王",
              winOrLose: "勝",
              minute: "26:58",
              twoPoints: {
                fgm: 5,
                fga: 7,
              },
              threePoints: {
                fgm: 3,
                fga: 8,
              },
              freeThrow: {
                ftm: 5,
                fta: 6,
              },
              oreb: 1,
              dreb: 2,
              ast: 2,
              stl: 0,
              blk: 0,
              tov: 3,
              pf: 1,
              rpm: "+12",
            },
            {
              gameDate: "2022/01/07",
              opponent: "福爾摩沙台新夢想家",
              winOrLose: "敗",
              minute: "21:51",
              twoPoints: {
                fgm: 1,
                fga: 3,
              },
              threePoints: {
                fgm: 0,
                fga: 3,
              },
              freeThrow: {
                ftm: 0,
                fta: 2,
              },
              oreb: 0,
              dreb: 2,
              ast: 3,
              stl: 1,
              blk: 0,
              tov: 1,
              pf: 1,
              rpm: "-5",
            },
            {
              gameDate: "2022/01/09",
              opponent: "新北國王",
              winOrLose: "勝",
              minute: "17:53",
              twoPoints: {
                fgm: 1,
                fga: 1,
              },
              threePoints: {
                fgm: 0,
                fga: 3,
              },
              freeThrow: {
                ftm: 0,
                fta: 0,
              },
              oreb: 3,
              dreb: 2,
              ast: 2,
              stl: 0,
              blk: 0,
              tov: 0,
              pf: 2,
              rpm: "0",
            },
          ],
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
