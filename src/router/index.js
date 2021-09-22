import { createRouter, createWebHistory } from "vue-router";

import Cart from "../components/core/cart/Cart_List.vue";
import Products from "../components/core/product/Product_List.vue";

const routes = [
  {
    path: "/inventroy",
    component: Products,
    name: "products",
  },
  {
    path: "/cart",
    component: Cart,
    name: "cart",
  },
  {
    path: "/",
    redirect: "/inventroy",
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
