import { createStore } from "vuex";

import products from './modules/product/index';
import cart from './modules/cart/index';

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    products,
    cart
  },
});
