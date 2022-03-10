import { createApp } from "vue";

import App from "./App.vue";
import Store from "./store/index";
import router from "./router";
import BaseButton from "./components/UI/BaseButton.vue";
import BaseCard from "./components/UI/BaseCard.vue";
import SvgIcon from "./components/UI/SvgIcon.vue";

const app = createApp(App);

app.use(router);
app.use(Store);

app.component("base-button", BaseButton);
app.component("base-card", BaseCard);
app.component("svg-icon", SvgIcon);

const requireAll = (requireContext) =>
  requireContext.keys().map(requireContext);

const req = require.context("./assets/icon", true, /\.svg$/);
requireAll(req);

app.mount("#app");
