<template>
  <div class="wrapper">
    <TopMenu/>
    <Products />
    <ToTop/>
  </div>
</template>

<script>
import TopMenu from '~/components/nav/TopMenu.vue';
import Products from '~/components/products/Products.vue';
import ToTop from '~/components/nav/ToTop.vue';

export default {
    name: 'Main',
    components: { TopMenu, Products, ToTop }
}
</script>

<style lang="scss" scoped>
  .wrapper {
    background-image: url('../static/images/BG-menu.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    height: auto;
    padding-bottom: 120px;
    position: relative;
  }
</style>
