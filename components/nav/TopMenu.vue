<template>
  <div class="container">
    <h1>МЕНЮ</h1>

    <ul class="menu">
      <li v-for="(item, index) in menu" :key="index" :class="['menu-item', index === 3 ? 'active' : '']">
        <router-link :to="item.link">{{ item.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TopMenu',

  data(){
    return{
      menu: [
        {'link': '#menu1', 'name': 'Роллы'},
        {'link': '#menu2', 'name': 'суши и гунканы'},
        {'link': '#menu3', 'name': 'сеты'},
        {'link': '#menu4', 'name': 'лапша и рис'},
        {'link': '#menu5', 'name': 'салаты'},
        {'link': '#menu6', 'name': 'Горячие блюда'},
      ],
    }
  }
}
</script>

<style lang="scss" scoped>
  h1 {
    color: #312525;
    font-size: 60px;
    font-weight: 400;
    text-align: center;
    margin: 100px auto 50px;
    position: relative;
    @media screen and (max-width: 992px) {
      font-size: 48px;
      margin: 40px auto 30px;
    }
    @media screen and (max-width: 480px) {
      font-size: 22px;
      margin: 20px auto;
    }
    &::before,
    &::after {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: #312525;
      display: block;
      position: absolute;
      content: ' ';
      left: 40%;
      top: 50%;
      margin-top: -5px;
      @media screen and (max-width: 480px) {
        left: 30%;
      }
    }
    &::after {
      right: 40%;
      left: auto;
      @media screen and (max-width: 480px) {
        right: 30%;
      }
    }
  }

  .menu {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 60px;
    @media screen and (max-width: 480px) {
      flex-wrap: wrap;
      justify-content: flex-start;
      margin-bottom: 30px;
    }
    &-item {
      padding: 16px 32px;
      border-radius: 100px;
      background: #FFF;

      @media screen and (max-width: 480px) {
        padding: 12px 18px;
      }
      &.active {
        background: #312525;
        a {
          color: #fff;
        }
      }
      a {
        color: #B3A296;
        font-size: 28px;
        font-weight: 400;
        line-height: 32px;
        text-transform: uppercase;
        @media screen and (max-width: 992px) {
          font-size: 21px;
        }
        @media screen and (max-width: 480px) {
          font-size: 16px;
          line-height: 20px;
        }
      }
    }
  }
</style>
