<template>
  <header>
    <div class="container">
      <div class="header-top">
        <div class="header-top-logo">
          <div class="burger-menu">
            <img src="../static/images/burger-menu.svg" alt="">
          </div>
          <a href=""></a>
        </div>
        <div class="header-top-menu">
          <ul>
            <li v-for="(menu, index) in menues" :key="index">
              <router-link :to="menu.link">{{ menu.name }}</router-link>
            </li>
          </ul>
        </div>
        <router-link to="tel:+79797009791" class="header-top-phone">+7 979 700 97 91</router-link>
        <ul class="header-top-dopmenu">
          <li @click.stop="showCart(show)">
            <router-link to="#"><img src="../static/images/icon-cart.svg"></router-link>
          </li>
          <li>
            <router-link to="#">Войти</router-link>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: 'Header',

  data(){
    return{
      menues: [
        {'link': '#menu', 'name': 'Меню'},
        {'link': '#delivery', 'name': 'Доставка'},
        {'link': '#actions', 'name': 'Акции'},
        {'link': '#reviews', 'name': 'Отзывы'},
        {'link': '#contacts', 'name': 'Контакты'},
      ],
    }
  },
  computed: {
    ...mapState('cart', ['show']),
  },
  methods: {
    ...mapMutations('cart', ['showCart']),
  }
}
</script>

<style lang="scss">
  header {
    background-color: #062D4E;
    .header-top {
      display: flex;
      flex-direction: row;
      align-items: center;
      height: 82px;
      justify-content: space-between;

      @media screen and (max-width: 992px) {
        height: auto;
        padding: 12px 0;
      }

      @media screen and (max-width: 480px) {
        padding: 12px 10px;
      }

      &-logo {
        box-shadow: 1px -1px 16px 0px #0000000F;
        width: 162px;
        height: 162px;
        background-color: #fff;
        border-radius: 50%;
        top: 20px;
        position: relative;
        @media screen and (max-width: 992px) {
          top: 0;
          box-shadow: none;
          width: 80px;
          height: 36px;
          background-color: transparent;
          border-radius: 0;

          display: flex;
          align-items: center;
          width: 125px;
          gap: 20px;

          @media screen and (max-width: 480px) {
            width: 60%;
            justify-content: space-between;
          }
        }
        a {
          background-image: url('../static/images/logo.png');
          display: block;
          content: ' ';
          width: 162px;
          height: 162px;
          background-position: center 20px;
          background-repeat: no-repeat;
          @media screen and (max-width: 992px) {
            background-image: url('../static/images/logo-menu.png');
            width: 80px;
            height: 36px;
            background-position: center;
          }
        }
      }

      &-menu {
        @media screen and (max-width: 992px) {
          display: none;
        }
        ul {
          display: flex;
          flex-direction: row;
          gap: 30px;
          li {
            list-style: none;
            a {
              font-size: 16px;
              font-weight: 400;
              line-height: 20px;
              letter-spacing: 0.05em;
              text-align: left;
              color: #fff;
              position: relative;

              &::after {
                display: block;
                content: '';
                width: 3px;
                height: 3px;
                background-color: #fff;
                border-radius: 50%;
                position: absolute;
                top: 50%;
                right: -15px;
              }
            }

            &:last-child a::after {
                display: none;
            }
          }
        }
      }

      &-phone {
        font-size: 18px;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: 0.01em;
        color: #fff;
        background-image: url('../static/images/phone.svg');
        background-repeat: no-repeat;
        padding-left: 30px;

        @media screen and (max-width: 480px) {
          font-size: 0;
        }
      }

      &-dopmenu {
        display: flex;
        flex-direction: row;
        gap: 24px;
        @media screen and (max-width: 480px) {
          display: none;
        }
        li {
          background-color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          font-weight: 400;
          line-height: 20px;
          letter-spacing: 0.05em;
          &:first-child {
            width: 42px;
            height: 42px;
            border-radius: 50%;
          }
          &:last-child {
            padding: 12px 30px 10px 30px;
            border-radius: 30px;
            a {
              color: #212121;
            }
          }
        }
      }

    }
  }
</style>
