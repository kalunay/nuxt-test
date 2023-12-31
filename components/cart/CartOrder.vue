<template>
  <div class="cart-order" :class="[order ? 'active' : '']">
    <div class="cart-order__header">Оформление заказа</div>
    <form @submit.prevent="handleSubmit" class="cart-order__blocks">
      <div class="cart-order__blocks-block">
        <div class="cart-order__blocks-block-header">
          <span>1</span> Способ доставки
        </div>
        <div class="cart-order__blocks-block-delivery">
          <div class="checked">
            <input type="radio" disabled>
            <img src="../../static/images/delivery.svg" alt="">
            <span>Курьер</span>
            <span>Временно недоступно</span>
          </div>
          <div>
            <input type="radio" checked>
            <img src="../../static/images/shopping-bag.svg" alt="">
            <span>Самовывоз</span>
            <span class="sale"><b>Скидка - 10%</b>
            Временно недоступно</span>
          </div>
        </div>
      </div>
      <div class="cart-order__blocks-block">
        <div class="cart-order__blocks-block-header">
          <span>2</span> Данные для доставки
        </div>
        <div class="cart-order__blocks-block-fields">
          <div class="cart-order__blocks-block-fields-input">
            <input type="text" v-model="orderForm.name" id="name" name="name" placeholder="Имя" :class="{ 'invalid': isSubmitted && !$v.orderForm.name.required }">
            <div v-if="isSubmitted && !$v.orderForm.name.required" class="invalid-feedback">Это обязательное поле</div>
            <div v-if="isSubmitted && !$v.orderForm.name.minLength" class="invalid-feedback">Минимальная длина 3 символа</div>
          </div>
          <div class="cart-order__blocks-block-fields-input">
            <input type="text" v-model="orderForm.phone" placeholder="Телефон" :class="{ 'invalid': isSubmitted && !$v.orderForm.phone.required }">
            <div v-if="isSubmitted && !$v.orderForm.phone.required" class="invalid-feedback">Это обязательное поле</div>
            <div v-if="isSubmitted && !$v.orderForm.phone.phone" class="invalid-feedback">Не корректный формат</div>
          </div>
          <div class="cart-order__blocks-block-fields-input">
            <input type="text" placeholder="Дополнительная информация">
          </div>
        </div>
      </div>
      <div class="cart-order__blocks-block">
        <div class="cart-order__blocks-block-total">
          <div>Cтоимость товаров <span>450 ₽</span></div>
          <div><span>Итого к оплате</span> <span>450 ₽</span></div>
          <button type="submit">Купить и оплатить</button>
          <p>Создавая заказ, вы соглашаетесь с <a href="#">политикой обработки персональных данных</a></p>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapState } from "vuex";
import {
      required,
      minLength,
      helpers
  } from "vuelidate/lib/validators";

  const phone = helpers.regex(
    "serial",
    /^\+7[0-9]{3}-[0-9]{3}-[0-9]{4}$/
  )

export default {
  name: 'CartList',
  data(){
    return {
      orderForm: {
        name: '',
        phone: null,
      },
      isSubmitted: false
    }
  },
  validations: {
    orderForm: {
      name: {
        required,
        minLength: minLength(3)
      },
      phone: {
        required,
        phone
      }
    }
  },
  computed: {
    ...mapState('cart', ['order']),
    serial: {
      get() {
        return this.phone
      },
      set(value) {
        this.phone = value
      }
    }
  },
  methods: {
    handleSubmit(e) {
        this.isSubmitted = true;
        if (this.$v.$invalid) {
            return;
        }
    }
  }
}
</script>

<style lang="scss" scoped>
.cart-order{
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
  &.active {
    display: flex;
  }
  &__header {
    color: #191919;
    font-size: 32px;
    font-weight: 400;
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
      margin-left: -150px;
    }
    &::after{
      margin-left: 150px;
    }
  }
  &__blocks {
    display: flex;
    flex-direction: column;
    gap: 14px;
    &-block {
      display: flex;
      flex-direction: column;
      width: 100%;
      border-radius: 8px;
      background: #FFF;
      padding: 16px;
      box-sizing: border-box;
      &-header {
        color: #191919;
        font-family: 'Ubuntu', sans-serif;
        font-size: 22px;
        font-weight: 300;
        span {
          width: 32px;
          height: 32px;
          background-color: #D34A44;
          border-radius: 50%;
          display: inline-block;
          text-align: center;
          line-height: 32px;
          margin-right: 14px;
          color: #FFF;
          font-family: 'Ubuntu', sans-serif;
          font-size: 20px;
          font-weight: 400;
        }
      }
      &-delivery {
        padding: 0 16px 0 46px;
        display: flex;
        flex-direction: column;
        gap: 14px;
        margin-top: 15px;
        & > div {
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          align-items: center;
          gap: 25px;
          color: #222;
          font-family: 'Ubuntu', sans-serif;
          font-size: 18px;
          font-weight: 300;
          position: relative;
          & > span:nth-child(3) {
            width: 150px;
            display: block;
          }
          & > input[type=radio] {
            border: none;
            background: none;
            &::after {
              display: block;
              width: 32px;
              height: 32px;
              content: ' ';
              background-image: url('../../static/images/check-box.svg');
              position: absolute;
              top: 0;
              left: -12px;
            }
            &:checked::after {
              background-image: url('../../static/images/check-box-check.svg');
            }
          }
          &.checked {
            color: #A5A5A5;
            & > span:last-child{
              color: #F00;
              font-family: 'Ubuntu', sans-serif;
              font-size: 12px;
              font-weight: 300;
            }
          }
          & > span.sale {
            color: #3F4871;
            font-family: 'Ubuntu', sans-serif;
            font-size: 8px;
            font-weight: 700;
            & > b {
              display: block;
              color: #3F4871;
              font-family: 'Ubuntu', sans-serif;
              font-size: 14px;
              font-weight: 700;
            }
          }
        }
      }
      &-fields {
        display: flex;
        flex-direction: column;
        gap: 40px;
        padding: 0 32px 28px 46px;
        margin-top: 35px;
        &-input {
          position: relative;
          .invalid-feedback {
            position: absolute;
            color: #F00;
            font-size: 12px;
            font-weight: 300;
            font-family: 'Ubuntu', sans-serif;
          }
          input {
            border: none;
            border-bottom: #D9D9D9 solid 1px;
            color: #4C4C4C;
            font-family: 'Ubuntu', sans-serif;
            font-size: 16px;
            font-weight: 300;
            padding: 6px 6px 6px 45px;
            box-sizing: border-box;
            width: 100%;
            &.invalid {
              border-bottom: #F00 solid 1px;
            }
            &:focus {
              outline:none;
            }
          }
        }
        & > div:nth-child(1) input {
          background-image: url('../../static/images/icon-user.svg');
          background-repeat: no-repeat;
          background-position: 6px 50%;
          display: block;
          content: ' ';
        }
        & > div:nth-child(2) input {
          background-image: url('../../static/images/icon-phone.svg');
          background-repeat: no-repeat;
          background-position: 6px 50%;
          display: block;
          content: ' ';
        }
        & > div:nth-child(3) input {
          background-image: url('../../static/images/icon-additional-information.svg');
          background-repeat: no-repeat;
          background-position: 6px 50%;
          display: block;
          content: ' ';
        }
      }
      &-total {
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding: 16px 0 16px 0;
        div:nth-child(1),
        div:nth-child(2) {
          margin: 0 32px 0 46px;
          color: #222;
          font-size: 18px;
          font-weight: 300;
          font-family: 'Ubuntu', sans-serif;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          span {
            font-weight: 400;
            width: 45%;
          }
        }
        div:nth-child(1) {
          border-bottom: #D9D9D9 solid 1px;
          padding-bottom: 20px;
        }
        button {
          border-radius: 4px;
          border: 1px solid #0C334A;
          background: #0C334A;
          color: #FFF;
          font-size: 18px;
          font-weight: 400;
          letter-spacing: 0.9px;
          padding: 14px 0;
          box-sizing: border-box;
          margin-top: 40px;
        }
        p {
          color: #212121;
          font-family: 'Ubuntu', sans-serif;
          font-size: 12px;
          font-weight: 300;
          line-height: 16px;
          a {
            color: #185598;
          }
        }
      }
    }
  }
}
</style>
