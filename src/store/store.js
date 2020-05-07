import Vue from "vue";
import Vuex from 'vuex'
import * as actions from './actions'

import stocks from "./module/stocks";
import portfolio from "./module/portfolio";

Vue.use(Vuex);

export default new Vuex.Store({
  actions,
  modules:{
    stocks,
    portfolio
  }


});
