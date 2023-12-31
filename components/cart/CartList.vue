<template>
    <div class="cart-inner">
      <div class="cart-inner__top">
        <div class="cart-inner__top-header">корзина</div>
        <div class="cart-inner__top-items">
          <CartItem v-for="product in products" :product="product" :key="product.product.id" />
        </div>
      </div>
      <div class="cart-inner__bottom">
        <div class="cart-inner__bottom-total">
          Общая сумма {{ getTotal }} ₽
        </div>
        <ul>
          <li>Сумма заказа для доставки курьером должна <br> составлять не менее 500 ₽</li>
        </ul>
        <div class="cart-inner__bottom-btns">
          <button type="button" @click="showCart(show)">Вернуться к покупкам</button>
          <button type="button" @click="showForm(order)">Оформить заказ</button>
        </div>
      </div>
    </div>
</template>

<script>
import CartItem from '~/components/cart/CartItem.vue'
import { mapState, mapGetters, mapMutations } from "vuex";
export default {
  name: 'CartList',
  comments: {CartItem},
  computed: {
    ...mapState('cart', ['show', 'products', 'order']),
    ...mapGetters('cart', ['getTotal']),
  },
  methods: {
    ...mapMutations('cart', ['showCart', 'showForm']),
  }
}
</script>

<style lang="scss" scoped>
  .cart-inner{
    display: none;
    position: absolute;
    width: 613px;
    height: 100vh;
    flex-shrink: 0;
    background-color: #EBE1D7;
    top: 0;
    right: 0;
    padding: 40px 40px 45px 45px;
    box-sizing: border-box;
    flex-direction: column;
    justify-content: space-between;
    .active & {
      display: flex;
    }
    &__top{
      &-header {
        color: #312525;
        font-size: 48px;
        font-weight: 400;
        text-transform: uppercase;
        text-align: center;
        position: relative;
        margin-bottom: 30px;
        &::after,
        &::before {
          display: block;
          content: '';
          width: 10px;
          height: 10px;
          position: absolute;
          top: 50%;
          left: 50%;
          background-color: #312525;
          border-radius: 50%;
          margin-top: -5px;
        }
        &::before {
          margin-left: -125px;
        }
        &::after{
          margin-left: 125px;
        }
      }
      &-items {
        display: flex;
        flex-direction: column;
        gap: 5px;
      }
    }

    &__bottom {
      display: flex;
      flex-direction: column;
      gap: 40px;
      &-total {
        color: #000;
        font-size: 22px;
        font-weight: 400;
        letter-spacing: 1.1px;
      }
      &-btns {
        display: flex;
        flex-direction: row;
        gap: 30px;
        button {
          background: none;
          border: none;
          padding: 19px 25px;
          box-sizing: border-box;
          border-radius: 8px;
          background: #312525;
          box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.25);
          color: #FFF;
          font-size: 18px;
          font-weight: 400;
          letter-spacing: 0.9px;
          font-family: 'Neucha', cursive;
        }
        button:first-child {
          border: 1px solid #AFAFAF;
          background: #FFF;
          color: #000;
        }
      }
      li {
        color: #121212;
        font-size: 16px;
        font-weight: 300;
        line-height: 20px;
        letter-spacing: 0.48px;
        position: relative;
        padding-left: 10px;
        &::before {
          display: block;
          content: '*';
          position: absolute;
          top: 0;
          margin-top: 6px;
          left: 0;
        }
      }
    }
  }
</style>
