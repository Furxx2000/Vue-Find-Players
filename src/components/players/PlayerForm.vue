<template>
  <form @submit.prevent="submit">
    <div class="form-control">
      <label for="球員姓名">球員姓名</label>
      <input type="text" id="name" v-model.trim="gameStats.name.val" />
    </div>
    <div class="form-control">
      <label for="比賽日期">比賽日期</label>
      <input type="date" id="gamedate" v-model="gameStats.gameDate.val" />
    </div>
    <div class="form-control">
      <label for="對手">對手</label>
      <select
        name="opponents"
        id="opponent-select"
        v-model="gameStats.opponent.val"
      >
        <option
          v-for="option in gameStats.opponent.opponentOptions"
          :key="option.value"
          :value="option.value"
          :disabled="option.disable"
        >
          {{ option.text }}
        </option>
      </select>
    </div>
    <div class="form-control">
      <label for="結果">結果</label>
      <select
        name="result"
        id="result-select"
        v-model="gameStats.winOrLose.val"
      >
        <option value="">請選擇結果</option>
        <option value="勝">勝</option>
        <option value="敗">敗</option>
      </select>
    </div>
    <div class="form-control">
      <label for="時間">出賽時間</label>
      <input type="text" id="gametime" v-model.trim="gameStats.minute.val" />
    </div>
    <div class="form-control">
      <label for="二分球出手">二分球出手</label>
      <input
        type="number"
        id="two-fga"
        v-model.number="gameStats.twoPointsAttempt.val"
      />
      <label for="二分球命中">二分球命中</label>
      <input
        type="number"
        id="two-fgm"
        v-model.number="gameStats.twoPointsMade.val"
      />
    </div>
    <div class="form-control">
      <label for="三分球出手">三分球出手</label>
      <input
        type="number"
        id="three-fga"
        v-model.number="gameStats.threePointsAttempt.val"
      />
      <label for="三分球命中">三分球命中</label>
      <input
        type="number"
        id="three-fgm"
        v-model.number="gameStats.threePointsMade.val"
      />
    </div>
    <div class="form-control">
      <label for="罰球出手">罰球出手</label>
      <input
        type="number"
        id="fta"
        v-model.number="gameStats.freeThrowAttempt.val"
      />
      <label for="罰球命中">罰球命中</label>
      <input
        type="number"
        id="ftm"
        v-model.number="gameStats.freeThrowMade.val"
      />
    </div>
    <div class="form-control">
      <label for="進攻籃板">進攻籃板</label>
      <input type="number" id="oreb" v-model.number="gameStats.oreb.val" />
      <label for="防守籃板">防守籃板</label>
      <input type="number" id="dreb" v-model.number="gameStats.dreb.val" />
    </div>
    <div class="form-control">
      <label for="助攻">助攻</label>
      <input type="number" id="ast" v-model.number="gameStats.ast.val" />
    </div>
    <div class="form-control">
      <label for="抄截">抄截</label>
      <input type="number" id="stl" v-model.number="gameStats.stl.val" />
    </div>
    <div class="form-control">
      <label for="阻攻">阻攻</label>
      <input type="number" id="blk" v-model.number="gameStats.blk.val" />
    </div>
    <div class="form-control">
      <label for="失誤">失誤</label>
      <input type="number" id="tov" v-model.number="gameStats.tov.val" />
    </div>
    <div class="form-control">
      <label for="犯規">犯規</label>
      <input type="number" id="pf" v-model.number="gameStats.pf.val" />
    </div>
    <div class="form-control">
      <label for="正負值">正負值</label>
      <input type="text" id="rpm" v-model.trim="gameStats.rpm.val" />
    </div>
    <button>確認送出</button>
  </form>
</template>

<script>
import { reactive, ref } from "vue";

export default {
  emits: ["save-game"],
  setup(_, context) {
    const gameStats = reactive({
      name: {
        val: "",
        isValid: true,
      },
      gameDate: {
        val: "",
        isValid: true,
      },
      opponent: {
        val: "",
        isValid: true,
        opponentOptions: [
          {
            text: "請選擇隊伍",
            disable: true,
            value: "",
          },
          { text: "富邦勇士", value: "富邦勇士" },
          { text: "新北國王", value: "新北國王" },
          { text: "桃園領航員", value: "桃園領航員" },
          { text: "新竹攻城獅", value: "新竹攻城獅" },
          { text: "台新夢想家", value: "台新夢想家" },
          { text: "高雄鋼鐵人", value: "高雄鋼鐵人" },
        ],
      },
      winOrLose: {
        val: "",
        isValid: true,
      },
      minute: {
        val: "",
        isValid: true,
      },
      twoPointsAttempt: {
        val: "",
        isValid: true,
      },
      twoPointsMade: {
        val: "",
        isValid: true,
      },
      threePointsAttempt: {
        val: "",
        isValid: true,
      },
      threePointsMade: {
        val: "",
        isValid: true,
      },
      freeThrowAttempt: {
        val: "",
        isValid: true,
      },
      freeThrowMade: {
        val: "",
        isValid: true,
      },
      oreb: {
        val: null,
        isValid: true,
      },
      dreb: {
        val: null,
        isValid: true,
      },
      ast: {
        val: null,
        isValid: true,
      },
      stl: {
        val: null,
        isValid: true,
      },
      blk: {
        val: null,
        isValid: true,
      },
      tov: {
        val: null,
        isValid: true,
      },
      pf: {
        val: null,
        isValid: true,
      },
      rpm: {
        val: "",
        isValid: true,
      },
    });
    const formIsValid = ref(true);

    function validateForm() {
      formIsValid.value = true;
      if (gameStats.name.val === "") {
        gameStats.name.isValid = false;
        formIsValid.value = false;
      }
      if (gameStats.gameDate.val === "") {
        gameStats.gameDate.isValid = false;
        formIsValid.value = false;
      }
      if (gameStats.opponent.val === "") {
        gameStats.opponent.isValid = false;
        formIsValid.value = false;
      }
      if (gameStats.winOrLose.val === "") {
        gameStats.winOrLose.isValid = false;
        formIsValid.value = false;
      }
      if (gameStats.minute.val === "") {
        gameStats.opponent.isValid = false;
        formIsValid.value = false;
      }
      if (gameStats.twoPointsAttempt.val === "") {
        gameStats.twoPointsAttempt.isValid = false;
        formIsValid.value = false;
      }
      if (gameStats.twoPointsMade.val === "") {
        gameStats.twoPointsMade.isValid = false;
        formIsValid.value = false;
      }
      if (gameStats.threePointsAttempt.val === "") {
        gameStats.threePointsAttempt.isValid = false;
        formIsValid.value = false;
      }
      if (gameStats.threePointsMade.val === "") {
        gameStats.threePointsMade.isValid = false;
        formIsValid.value = false;
      }
      if (gameStats.freeThrowAttempt.val === "") {
        gameStats.freeThrowAttempt.isValid = false;
        formIsValid.value = false;
      }
      if (gameStats.freeThrowMade.val === "") {
        gameStats.freeThrowMade.isValid = false;
        formIsValid.value = false;
      }
      if (gameStats.oreb.val === "") {
        gameStats.oreb.isValid = false;
        formIsValid.value = false;
      }
      if (gameStats.dreb.val === "") {
        gameStats.dreb.isValid = false;
        formIsValid.value = false;
      }
      if (gameStats.ast.val === "") {
        gameStats.ast.isValid = false;
        formIsValid.value = false;
      }
      if (gameStats.stl.val === "") {
        gameStats.stl.isValid = false;
        formIsValid.value = false;
      }
      if (gameStats.blk.val === "") {
        gameStats.blk.isValid = false;
        formIsValid.value = false;
      }
      if (gameStats.tov.val === "") {
        gameStats.tov.isValid = false;
        formIsValid.value = false;
      }
      if (gameStats.pf.val === "") {
        gameStats.pf.isValid = false;
        formIsValid.value = false;
      }
      if (gameStats.rpm.val === "") {
        gameStats.rmp.isValid = false;
        formIsValid.value = false;
      }
    }

    function submit() {
      validateForm();

      if (!formIsValid.value) {
        return;
      }

      const gameStatsData = {
        name: gameStats.name.val,
        gameDate: gameStats.gameDate.val,
        opponent: gameStats.opponent.val,
        winOrLose: gameStats.winOrLose.val,
        minute: gameStats.minute.val,
        twoPoints: {
          fgm: gameStats.twoPointsMade.val,
          fga: gameStats.twoPointsAttempt.val,
        },
        threePoints: {
          fgm: gameStats.threePointsMade.val,
          fga: gameStats.threePointsAttempt.val,
        },
        freeThrow: {
          ftm: gameStats.freeThrowMade.val,
          fta: gameStats.freeThrowAttempt.val,
        },
        oreb: gameStats.oreb.val,
        dreb: gameStats.dreb.val,
        ast: gameStats.ast.val,
        stl: gameStats.stl.val,
        blk: gameStats.blk.val,
        tov: gameStats.tov.val,
        pf: gameStats.pf.val,
        rpm: gameStats.rpm.val,
      };

      context.emit("save-game", gameStatsData);
      console.log("Successfully submit!");
    }

    return { gameStats, submit };
  },
};
</script>

<style lang="scss" scoped>
form {
  .form-control {
    margin-bottom: 1.5rem;

    label {
      font-weight: 600;
      display: block;
      margin-bottom: 0.2rem;
    }

    input {
      width: 60%;
      display: block;
      font: inherit;
      border: 1px solid rgba(128, 128, 128, 0.5);
      border-radius: 5px;
      padding-left: 6px;
    }

    select {
      width: 60%;
      display: block;
      font: inherit;
      border: 1px solid rgba(128, 128, 128, 0.5);
      border-radius: 5px;
      padding-left: 6px;
    }
  }

  button {
    font: inherit;
    color: white;
    background-color: rgba(0, 0, 0, 0.63);
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 10px;
  }
}
</style>
