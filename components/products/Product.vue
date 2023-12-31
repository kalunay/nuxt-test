<template>
  <div :class="['products-item', product.id === 5 ? 'active' : '']">
    <div class="heart" :class="[wishlist.includes(product.id) ? 'active' : '']" @click="addToList(product.id)"></div>
    <div class="products-item__image">
      <img :src="`/images/${product.image}`" alt="">
    </div>
    <div class="products-item__header">
      <div>{{ product.header }}</div>
      <span>{{ product.weight }} г</span>
    </div>
    <div class="products-item__description">
      {{ product.description }}
    </div>
    <div class="products-item__price">
      <span>{{ product.price }} ₽</span>
      <button type="button" class="products-item__price-btn" @click="addToCart({'product': product, 'id': product.id, 'qty': qty})">В корзину</button>
      <div class="products-item__price-qty">
        <span @click="minusQty"><img src="../../static/images/minus.svg"></span>
        <span :model="qty">{{ qty }}</span>
        <span @click="plusQty"><img src="../../static/images/plus.svg"></span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
    name: 'Product',
    props: {
      product: {
        type: Object,
        required: true
      }
    },
    data(){
      return {
        qty: 1
      }
    },
    computed: {
      ...mapState('wishlist', ['wishlist']),
      ...mapState('cart', ['products']),
    },
    methods: {
      ...mapMutations('wishlist', ['addToList']),
      ...mapMutations('cart', ['addToCart']),
      minusQty(){
        if(this.qty > 0)  {
          this.qty -= 1;
        }
      },
      plusQty(){
        this.qty += 1;
      }
    }
}
</script>

<style lang="scss" scoped>
  .products-item {
      width: 270px;
      min-height: 390px;
      height: auto;
      border-radius: 8px;
      background: #FAFAFA;
      box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.25);
      padding: 30px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      position: relative;
      &__image {
        width: 130px;
        height: 130px;
        flex-shrink: 0;
        margin: auto;
      }
      &__header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 25px 0 20px;
        div {
          color: #141414;
          font-size: 19px;
          font-weight: 400;
          line-height: 25px; /* 131.579% */
          letter-spacing: 1.9px;
          text-transform: uppercase;
        }
        span {
          color: #808080;
          font-family: Arial;
          font-size: 13px;
          font-weight: 400;
          letter-spacing: 0.52px;
        }
      }
      &__description {
        color: #808080;
        font-family: Arial;
        font-size: 15px;
        font-weight: 400;
        letter-spacing: 0.6px;
        margin-bottom: 44px;
        min-height: 55px;
      }
      &__price {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;
        margin-top: auto;
        span {
          color: #141414;
          font-size: 19px;
          font-weight: 400;
          letter-spacing: 0.95px;
        }
        &-btn {
          border-radius: 8px;
          background: #312525;
          box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.35);
          color: #FFF;
          font-size: 15px;
          font-weight: 400;
          letter-spacing: 0.45px;
          font-family: 'PT Sans Narrow', sans-serif;
          padding: 8px 32px;
          box-sizing: border-box;
        }
        &-qty {
          display: none;
          flex-direction: row;
          gap: 13px;
          align-items: center;

          color: #FFF;
          font-size: 19px;
          font-weight: 400;
          letter-spacing: 0.95px;
        }
      }

      .heart {
        background-image: url('../../static/images/heart.svg');
        width: 20px;
        height: 20px;
        display: block;
        position: absolute;
        top: 30px;
        right: 30px;
        &.active {
          background-image: url('../../static/images/icon-favorites.svg');
        }
      }
      &.active {
        background: #312525;
        & .products-item__image {
          box-shadow: 15px 12px 37px 0px rgba(203, 182, 137, 0.70);
        }
        & .products-item__header {
          div, span {
            color: #fff;
          }
        }
        & .products-item__description {
          color: #fff;
        }
        & .products-item__price span {
          color: #fff;
        }
        & .products-item__price-btn {
          display: none;
        }
        & .products-item__price-qty {
          display: flex;
        }
      }
    }
</style>
