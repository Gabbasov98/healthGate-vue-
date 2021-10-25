<template>
    <div>
        
        <form action="">
            <div class="cart__form-datetime">
                <div class="cart__form-title">Дата и время доставки</div>
                <div class="cart__form-datetime-wrap">
                    <div class="cart__form-date">
                        <div class="cart__form-date-input">
                            <img src="../../assets/images/markup-img/calendar2.svg" alt="">
                            <b-form-datepicker
                                id="example-datepicker"
                                v-model="value"
                                class="cart-datepicker"
                            />
                        </div>
                        <div class="cart__form-date-text"> 
                            <span v-if="value">{{value}}</span>
                            <span v-else>2021-10-26</span>
                        </div>
                    </div>
                    <div class="cart__form-time">
                        <div class="cart__form-time-input">
                            <img src="../../assets/images/markup-img/time2.svg" alt="">
                        </div>
                        <div class="cart__form-time-text">13:00-17:00</div>
                    </div>
                </div>
            </div>
            <div class="cart__form-address">
                <div class="cart__form-title">Адрес доставки</div>
                <div class="cart__form-address-wrap">
                    <input type="text" placeholder="Укажите адрес доставки">
                    <button class="cart__form-address-btn" type="button">
                        <img src="../../assets/images/markup-img/map-marker.svg" alt="">
                    </button>
                </div>
            </div>
            <div class="cart__form-phone">
                <div class="cart__form-title">Номер телефона</div>
                <div class="cart__form-phone-wrap">
                    <input type="tel" placeholder="+7 (___) ___ - __ - __">
                </div>
            </div>
            <div class="cart__form-name-mail">
                <div class="cart__form-name">
                    <div class="cart__form-title">Имя</div>
                    <div class="cart__form-name-wrap">
                        <input type="text" placeholder="Имя">
                    </div>
                </div>
                <div class="cart__form-mail">
                    <div class="cart__form-title">E-mail</div>
                    <div class="cart__form-mail-wrap">
                        <input type="email" placeholder="Почта">
                    </div>
                </div>
            </div>
            <div class="cart__form-pay">
                <div class="cart__form-radio">
                    <input type='radio' class='radio' id='pay1' name='pay' />
                    <label for='pay1'>Оплатить наличными или картой
                        при получении</label>
                </div>
                <div class="cart__form-radio">
                    <input type='radio' class='radio' id='pay2' name='pay' />
                    <label for='pay2'>Оплатить банковской картой</label>
                </div>
                <div class="cart__form-radio">
                    <input type='radio' class='radio' id='pay3' name='pay' />
                    <label for='pay3'>Оплатить Apple Pay</label>
                </div>
            </div>
            <div class="cart__form-door">
                <div class="cart__form-door-check">
                    <input type='checkbox' class='checkbox' id='door' />
                    <label for='door'>
                    <strong>
                            Оставить у двери
                        <i>
                            <img src="../../assets/images/markup-img/hint.svg" alt="">
                        </i>
                    </strong>
                    <span>только при онлайн оплате</span>
                    </label>
                </div>
            </div>
            <div class="cart__form-promo">
                <div class="cart__form-title">Промокод</div>
                <div class="cart__form-promo-wrap">
                    <input type="text" placeholder="Укажите адрес доставки">
                    <button class="cart__form-promo-btn" type="button">
                        <img src="../../assets/images/markup-img/play.svg" alt="">
                    </button>
                </div>
            </div>
            <div class="cart__form-order">
                <div class="cart__form-order-left">
                    <strong>от 15 69845₽</strong>
                    <span>34 товаров</span>
                </div>
                <button class="cart__form-order-btn">оформить заказ</button>
            </div>
            <a href="" class="cart__form-conf">политика конфедициальности</a>
        </form>
    </div>
</template>

<script>

import FormDatepickerBasic from '../forms/form-element/form-datepicker/FormDatepickerBasic.vue'
import BCardCode from '@core/components/b-card-code'
import { BFormDatepicker, BCardText } from 'bootstrap-vue'
import { codeBasic } from '../forms/form-element/form-datepicker/code'



export default {
    components: {
        FormDatepickerBasic,
        BCardCode,
        BFormDatepicker,
    },
    data() {
       return {
            value: '',
            codeBasic,
       } 
    },
    methods: {
        
    },
}
</script>

<style lang="scss">
    #datepicker{
        position:absolute;
        width:100%;
        height:100%;
        left:0;
        top:0;
        
    }
    #example-datepicker{
        // opacity:0;
    }
    .cart__form-date-input{
        position:relative;
    }
</style>
