<template>
  <div class="totop" @click="toTop">
    <img src="../../static/images/totop.svg">
  </div>
</template>

<script>
export default {
  name: 'ToTop',

  methods: {
    toTop(){
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}
</script>

<style lang="scss" scoped>
  .totop {
    display: block;
    position: absolute;
    width: 60px;
    height: 60px;
    bottom: 120px;
    right: 20px;
    @media screen and (min-width: 1700px) {
      right: 12%;
    }
  }
</style>
