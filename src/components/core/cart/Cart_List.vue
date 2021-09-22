<template>
  <div id="cart">
    <div class="cart--header has-text-centered">
      <i class="fa fa-2x fa-shopping-cart"></i>
    </div>
    <p class="cart-empty-text has-text-centered">
      `Add some items to the cart!`
    </p>
    <ul>
      <li class="cart-item" v-for="cartItem in getCartItems" :key="cartItem.id">
        <cart-list-item :cartItem="cartItem"></cart-list-item>
      </li>
      <div class="notification is-success">
        <button class="delete"></button>
        <p>
          Total Quantity:
          <span class="has-text-weight-bold">{{ cartQuentity }}</span>
        </p>
      </div>
    </ul>
    <div class="buttons">
      <button :disabled="!getCartItems.length" class="button is-info">
        Checkout (
        <span class="has-text-weight-bold">{{ cartTotal }}</span>
        )
      </button>

      <button class="button is-danger is-outlined" @click="removeAllCartItems">
        <span>Delete All Items</span>
        <span class="icon is-small">
          <i class="fas fa-items"></i>
        </span>
      </button>
    </div>
  </div>
</template>
<script>
import cartListItem from "./Cart_List_Item.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    cartListItem,
  },
  computed: {
    ...mapGetters(["getCartItems", "cartQuentity", "cartTotal"]),
  },
  methods: {
    ...mapActions(["removeAllCartItems"]),
  },

  created() {
    this.$store.dispatch("getCartItems");
  },
};
</script>
