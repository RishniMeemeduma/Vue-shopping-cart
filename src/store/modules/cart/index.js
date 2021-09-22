import axios from "axios";

const state = {
  cartItems: [],
};

const mutations = {
  UPDATE_CART_ITEMS(state, payload) {
    state.cartItems = payload;
  },
};

// actions will handle mutations
const actions = {
  getCartItems({ commit }) {
    axios.get("/api/cart").then(({ data }) => {
      commit("UPDATE_CART_ITEMS", data);
    });
  },

  addCartItem({ commit }, cartItem) {
    axios.post("/api/cart", cartItem).then(({ data }) => {
      commit("UPDATE_CART_ITEMS", data);
    });
  },

  removeCartItem({ commit }, cartItem) {
    axios.delete("/api/cart/delete", cartItem).then(({ data }) => {
      commit("UPDATE_CART_ITEMS", data);
    });
  },

  removeAllCartItems({ commit }) {
    axios.delete("/api/cart/delete/all").then(({ data }) => {
      commit("UPDATE_CART_ITEMS", data);
    });
  },
};

const getters = {
  getCartItems: (state) => state.cartItems,

  cartTotal: (state) => {
    return state.cartItems
      .reduce((acc, cartItem) => {
        return cartItem.quantity * cartItem.price + acc;
      }, 0)
      .toFixed(2);
  },

  cartQuentity: (state) => {
    return state.cartItems.reduce((acc, cartItem) => {
      return cartItem.quantity + acc;
    }, 0);
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};
