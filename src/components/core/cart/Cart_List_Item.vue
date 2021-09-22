<template>
  <div class="box">
    <div class="cart-item__details">
      <p class="is-inline">{{ cartItem.title }}</p>
      <div>
        <span class="cart-item--price has-text-info has-text-weight-bold">
          ${{ cartItem.price }} * {{ cartItem.quantity }}
        </span>

        <span>
          <i
            class="fa fa-arrow-circle-up cart-item__modify"
            @click="addCartItem(cart - item)"
          ></i>
          <i
            class="fa fa-arrow-circle-down cart-item__modify"
            @click="removeCartItem(cart - item)"
          ></i>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";

export default {
  props: ["cartItem"],
  methods: {
    ...mapActions(["addCartItem", "removeCartItem"]),
  },
};
</script>
