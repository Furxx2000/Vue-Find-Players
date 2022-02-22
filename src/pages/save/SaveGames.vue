<template>
  <main>
    <h2>數據紀錄</h2>

    <ul>
      <li>球員</li>
      <li>球隊</li>
    </ul>

    <form @submit.prevent="">
      <div class="form-control">
        <label for="比賽日期">比賽日期</label>
        <input type="date" id="gamedate" />
      </div>
      <div class="form-control">
        <label for="對手">對手</label>
        <select name="opponents" id="opponent-select">
          <option value="">請選擇隊伍</option>
          <option value="新北國王">新北國王</option>
          <option value="桃園領航猿">桃園領航猿</option>
          <option value="台新夢想家">台新夢想家</option>
          <option value="高雄鋼鐵人">高雄鋼鐵人</option>
          <option value="台北富邦勇士">台北富邦勇士</option>
        </select>
      </div>
      <div class="form-control">
        <label for="結果">結果</label>
        <select name="result" id="result-select">
          <option value="">請選擇結果</option>
          <option value="">勝</option>
          <option value="">敗</option>
        </select>
      </div>
      <div class="form-control">
        <label for="時間">出賽時間</label>
        <input type="number" id="gametime" />
      </div>
      <div class="form-control">
        <label for="二分球出手">二分球出手</label>
        <input type="number" id="two-fga" />
        <label for="二分球命中">二分球命中</label>
        <input type="number" id="two-fgm" />
      </div>
      <div class="form-control">
        <label for="三分球出手">三分球出手</label>
        <input type="number" id="three-fga" />
        <label for="三分球命中">三分球命中</label>
        <input type="number" id="three-fgm" />
      </div>
      <div class="form-control">
        <label for="罰球出手">罰球出手</label>
        <input type="number" id="fta" />
        <label for="罰球命中">罰球命中</label>
        <input type="number" id="ftm" />
      </div>
      <div class="form-control">
        <label for="進攻籃板">進攻籃板</label>
        <input type="number" id="oreb" />
        <label for="防守籃板">防守籃板</label>
        <input type="number" id="dreb" />
      </div>
      <div class="form-control">
        <label for="助攻">助攻</label>
        <input type="number" id="ast" />
      </div>
      <div class="form-control">
        <label for="抄截">抄截</label>
        <input type="number" id="stl" />
      </div>
      <div class="form-control">
        <label for="阻攻">阻攻</label>
        <input type="number" id="blk" />
      </div>
      <div class="form-control">
        <label for="失誤">失誤</label>
        <input type="number" id="tov" />
      </div>
      <div class="form-control">
        <label for="犯規">犯規</label>
        <input type="number" id="pf" />
      </div>
      <button>確認送出</button>
    </form>
  </main>
</template>

<script>
export default {
  setup() {},
};
</script>

<style lang="scss" scoped>
main {
  padding: 0 1rem;

  ul {
    display: flex;
    align-items: center;
    padding: 0;

    li {
      display: flex;
      align-items: center;
      justify-content: center;
      list-style-type: none;
      width: 80px;
      height: 40px;
      font-weight: 600;
      background-color: rgba(128, 128, 128, 0.116);
      border-radius: 1rem;
      margin-right: 1rem;
    }

    li.active {
      background-color: gray;
      color: white;
    }
  }

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
}
</style>
