import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

export default {
  namespaced: true,
  state() {
    return {
      players: [
        {
          id: "F12",
          names: {
            chiName: "林志傑",
            engName: "Lin Chih-Chieh",
          },
          city: {
            chiCityName: "台北",
            engCityName: "Taipei",
          },
          team: {
            chiTeamName: "富邦勇士",
            engTeamName: "Fubon",
          },
          position: "後衛",
          number: "12",
        },
        {
          id: "F1",
          names: {
            chiName: "林書緯",
            engName: "Lin Joseph Shu-Wei",
          },
          city: {
            chiCityName: "台北",
            engCityName: "Taipei",
          },
          team: {
            chiTeamName: "富邦勇士",
            engTeamName: "Fubon",
          },
          position: "後衛",
          number: "1",
        },
        {
          id: "F3",
          names: {
            chiName: "張宗憲",
            engName: "Chang Tsung-Hsien",
          },
          city: {
            chiCityName: "台北",
            engCityName: "Taipei",
          },
          team: {
            chiTeamName: "富邦勇士",
            engTeamName: "Fubon",
          },
          position: "前鋒",
          number: "3",
        },
        {
          id: "F17",
          names: {
            chiName: "辛特力",
            engName: "Michael Singletary",
          },
          city: {
            chiCityName: "台北",
            engCityName: "Taipei",
          },
          team: {
            chiTeamName: "富邦勇士",
            engTeamName: "Fubon",
          },
          position: "前鋒",
          number: "17",
        },
        {
          id: "F21",
          names: {
            chiName: "曾祥鈞",
            engName: "Tseng Hsiang-Chun",
          },
          city: {
            chiCityName: "台北",
            engCityName: "Taipei",
          },
          team: {
            chiTeamName: "富邦勇士",
            engTeamName: "Fubon",
          },
          position: "中鋒",
          number: "21",
        },
        {
          id: "F32",
          names: {
            chiName: "塞瑟夫",
            engName: "Ihor Zaytsev",
          },
          city: {
            chiCityName: "台北",
            engCityName: "Taipei",
          },
          team: {
            chiTeamName: "富邦勇士",
            engTeamName: "Fubon",
          },
          position: "中鋒",
          number: "32",
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
