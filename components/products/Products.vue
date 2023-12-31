<template>
  <div class="container">
    <div class="products">
      <Product v-for="product in products" :product="product" :key="product.id"/>
    </div>
  </div>
</template>

<script>
import Product from '~/components/products/Product.vue';
import { mapState } from "vuex";
export default {
    name: 'Products',
    components: { Product },
    computed: {
      ...mapState('products', ['products']),
    },
}
</script>

<style lang="scss" scoped>
  .products {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;
  }
</style>
