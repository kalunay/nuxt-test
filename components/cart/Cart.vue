<template>
  <div class="cart" :class="[show ? 'active' : '']">
    <CartList/>
    <CartOrder/>
  </div>
</template>

<script>
import CartList from '~/components/cart/CartList.vue';
import CartOrder from '~/components/cart/CartOrder.vue';
import { mapState } from "vuex";

export default {
    name: 'Cart',
    comments: {CartList, CartOrder},
    computed: {
      ...mapState('cart', ['show']),
    },
}
</script>

<style lang="scss" scoped>
  .cart {
    display: none;
    content: ' ';
    background: rgba(60, 75, 97, 0.60);
    backdrop-filter: blur(11px);
    width: 100%;
    position: fixed;
    height: 100vh;
    position: fixed;
    z-index: 999999;
    top: 0;
    left: 0;
    &.active {
      display: block;
    }
  }
</style>
