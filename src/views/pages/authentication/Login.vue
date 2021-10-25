<template>
  <div>
    <header class='header'>
      <div class='custom-container'>
        <div class='header__inner'>
          <div class="header__left">
            <a href="" class="header__logo">
              <img src="../../../assets/images/markup-img/logo.png" alt="">
            </a>
            <div class="header__title">Заказ специального питания</div>
            <div class="header__desc">
              здесь вы можете заказать продукты и составить индивидуальный план питания <br> по состоянию здоровья и образу жизни
            </div>
          </div>
        </div>
      </div>
    </header>

    <section class='reg4'>
      <div class='custom-container'>
        <div class="preferences">
          <div class="preferences__top justify-content-center">
            <h2 class="preferences__title ">Вход</h2>
          </div>
          <validation-observer
            ref="loginForm"
            #default="{invalid}"
          >
            <b-form @submit.prevent="login" action="" class="reg4__form">
              <b-form-group>
                <validation-provider
                  #default="{ errors }"
                  name="Email"
                  vid="email"
                  rules="required|email"
                >
                  <input
                    id="login-email"
                    v-model="userEmail"
                    :state="errors.length > 0 ? false:null"
                    name="login-email"
                    placeholder="Почта"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>

              <b-form-group>
                <div class="d-flex justify-content-between">
<!--                  <b-link :to="{name:'auth-forgot-password'}">-->
<!--                    <small>Forgot Password?</small>-->
<!--                  </b-link>-->
                </div>
                <validation-provider
                  #default="{ errors }"
                  name="Password"
                  vid="password"
                  rules="required"
                >
                  <b-input-group
                    class="reg4__form-group"
                    :class="errors.length > 0 ? 'is-invalid':null" >
                    <input
                      v-model="password"
                      :state="errors.length > 0 ? false:null"
                      :type="passwordFieldType"
                      name="login-password"
                      placeholder="Пароль"
                    />
                    <div class="reg4__form-togglepassword">
                      <feather-icon
                        class="cursor-pointer"
                        :icon="passwordToggleIcon"
                        @click="togglePasswordVisibility"
                      />
                    </div>
                  </b-input-group>
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>
              <button
                type="submit"
                class="preferences__confirm btn btn-green btn-rounded">
                Вход
              </button>
            </b-form>
          </validation-observer>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import {
  BFormGroup, BInputGroup, BForm, VBTooltip,
} from 'bootstrap-vue'
import { required, email } from '@validations'
import { togglePasswordVisibility } from '@core/mixins/ui/forms'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import useJwt from '@/auth/jwt/useJwt'
import store from '@/store/index'
import { getHomeRouteForLoggedInUser } from '@/auth/utils'

export default {
  directives: {
    'b-tooltip': VBTooltip,
  },
  components: {
    BFormGroup,
    BInputGroup,
    BForm,
    ValidationProvider,
    ValidationObserver,
  },
  mixins: [togglePasswordVisibility],
  data() {
    return {
      status: '',
      password: 'admin',
      userEmail: 'admin@demo.com',
      sideImg: require('@/assets/images/pages/login-v2.svg'),

      // validation rules
      required,
      email,
    }
  },
  computed: {
    passwordToggleIcon() {
      return this.passwordFieldType === 'password' ? 'EyeIcon' : 'EyeOffIcon'
    },
    imgUrl() {
      if (store.state.appConfig.layout.skin === 'dark') {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.sideImg = require('@/assets/images/pages/login-v2-dark.svg')
        return this.sideImg
      }
      return this.sideImg
    },
  },
  methods: {
    login() {
      this.$refs.loginForm.validate().then(success => {
        if (success) {
          useJwt.login({
            email: this.userEmail,
            password: this.password,
          })
            .then(response => {
              const { userData } = response.data
              useJwt.setToken(response.data.accessToken)
              useJwt.setRefreshToken(response.data.refreshToken)
              localStorage.setItem('userData', JSON.stringify(userData))
              this.$ability.update(userData.ability)

              // ? This is just for demo purpose as well.
              // ? Because we are showing eCommerce app's cart items count in navbar
              this.$store.commit('app-ecommerce/UPDATE_CART_ITEMS_COUNT', userData.extras.eCommerceCartItemsCount)

              // ? This is just for demo purpose. Don't think CASL is role based in this case, we used role in if condition just for ease
              this.$router.replace(getHomeRouteForLoggedInUser(userData.role))
                .then(() => {
                  this.$toast({
                    component: ToastificationContent,
                    position: 'top-right',
                    props: {
                      title: `Welcome ${userData.fullName || userData.username}`,
                      icon: 'CoffeeIcon',
                      variant: 'success',
                      text: `You have successfully logged in as ${userData.role}. Now you can start to explore!`,
                    },
                  })
                })
            })
            .catch(error => {
              this.$refs.loginForm.setErrors(error.response.data.error)
            })
        }
      })
    },
  },
}
</script>

<style lang="scss">
/*@import '@core/scss/vue/pages/page-auth.scss';*/
@import "src/assets/scss/markup/custom-styles";
@import "src/assets/scss/markup/reg";
.preferences__confirm{
    margin-top: 30px;
}
</style>
