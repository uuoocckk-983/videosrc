import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Cell, CellGroup, Loading, NavBar, List } from 'vant';

Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Loading);
Vue.use(NavBar);
Vue.use(List);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
