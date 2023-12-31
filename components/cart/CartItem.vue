<template>
  <div class="cart-inner__top-items__item">
      <img :src="`/images/${product.product.image}`" alt="">
      <div class="cart-inner__top-items__item-description">
        <div>{{ product.product.header }}</div>
        <div>{{ product.product.description }}</div>
        <div>({{ product.product.weight }} г)</div>
      </div>
      <div class="cart-inner__top-items__item-price">
        <div>Цена <span>{{ product.product.price }} ₽</span></div>
        <div id="qty">
          <span id="b-minus" @click="minus"></span>
          <span :model="qty">{{ qty }}</span>
          <span id="b-plus" @click="plus"></span>
        </div>
        <div>Цена <span>{{ product.product.price * product.qty }} ₽</span></div>
      </div>
      <div class="cart-inner__top-items__item-cart">
        <div @click="delItem(product.id)"></div>
      </div>
    </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: 'CartItem',
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      qty: this.product.qty
    }
  },
  components: {
    ...mapState('cart', ['getTotal']),
  },
  methods: {
    minus(){
      if(this.qty > 0){
        this.qty -= 1;
        this.changeQty({'id': this.product.id, 'qty': this.qty});
      }
    },
    plus(){
      this.qty += 1;
      this.changeQty({'id': this.product.id, 'qty': this.qty});
    },
    ...mapMutations('cart', ['changeQty', 'delItem']),
  }
}
</script>

<style lang="scss" scoped>
  .cart-inner__top-items__item {
    border-radius: 8px;
    background: #FAFAFA;
    box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.25);
    padding: 15px 0 15px 15px;
    box-sizing: border-box;
    min-height: 112px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 25px;
    img {
      width: auto;
      height: 80px;
    }
    &-description {
      color: #717171;
      font-family: 'PT Sans Narrow';
      font-size: 13px;
      font-weight: 400;

      display: flex;
      flex-direction: column;
      div:first-child {
        color: #141414;
        font-family: Neucha;
        font-size: 16px;
        font-weight: 400;
        line-height: 25px;
        letter-spacing: 1.6px;
        text-transform: uppercase;
      }
    }
    &-price {
      color: #141414;
      font-size: 13px;
      font-weight: 400;
      letter-spacing: 0.65px;
      gap: 10px;
      display: flex;
      flex-direction: column;
      width: 110px;
      span {
        font-size: 16px;
        letter-spacing: 0.8px;
      }
    }
    &-cart {
      display: flex;
      flex-direction: column;
      justify-content: center;
      div {
        width: 41px;
        height: 64px;
        background-image: url('../../static/images/cart-del.svg');
        display: block;
      }
    }
  }
</style>
