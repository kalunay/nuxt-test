<template>
  <div>
    <Header/>
    <Main/>
    <Footer/>
    <Cart/>
  </div>
</template>

<script>
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';
import Main from '~/components/Main.vue';
import Cart from '~/components/cart/Cart.vue';
export default {
  name: 'IndexPage',
  components: { Header, Footer, Main, Cart }
}
</script>
