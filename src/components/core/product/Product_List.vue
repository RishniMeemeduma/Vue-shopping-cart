<template>
  <div class="container is-fluid">
    <div class="tile is-ancestor">
      <div
        class="tile is-parent"
        v-for="productItem in productItems"
        :key="productItem.id"
      >
        <product-item :productItem="productItem"></product-item>
      </div>
    </div>
  </div>
</template>
<script>
import productItem from "./Product_List_Item.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    productItem,
  },
  computed: {
    ...mapGetters(["productItems"]),
  },
  methods: {
    ...mapActions(["getProductItems"]),
  },

  created() {
    this.$store.dispatch("getProductItems");
  },
};
</script>
