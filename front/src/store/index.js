import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import homeModule from "./Modules/homeModule";
import uxModule from "./Modules/uxModule";

export default new Vuex.Store({
  modules: {
    homeModule: homeModule,
    uxModule: uxModule
  },
});
