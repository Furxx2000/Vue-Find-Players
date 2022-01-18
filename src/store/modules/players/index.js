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
          firstName: {
            chiFirstName: "林",
            engFirstName: "Lin",
          },
          lastName: {
            chiLastName: "志傑",
            engLastName: "Chih-Chieh",
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
          firstName: {
            chiFirstName: "林",
            engFirstName: "Lin",
          },
          lastName: {
            chiLastName: "書緯",
            engLastName: "Joseph Shu-Wei",
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
          firstName: {
            chiFirstName: "張",
            engFirstName: "Chang",
          },
          lastName: {
            chiLastName: "宗憲",
            engLastName: "Tsung-Hsien",
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
          firstName: {
            chiFirstName: "辛",
            engFirstName: "Michael",
          },
          lastName: {
            chiLastName: "特力",
            engLastName: "Singletary",
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
          firstName: {
            chiFirstName: "曾",
            engFirstName: "Tseng",
          },
          lastName: {
            chiLastName: "祥鈞",
            engLastName: "Hsiang-Chun",
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
          firstName: {
            chiFirstName: "塞",
            engFirstName: "Ihor",
          },
          lastName: {
            chiLastName: "瑟夫",
            engLastName: "Zaytsev",
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
