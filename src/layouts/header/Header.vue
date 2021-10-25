<template>

  <div>
    <header class='header'>
        <div class='custom-container'>
            <div class='header__inner'>
                <div class="header__left">
                    <a href="" class="header__logo">
                        <img src="../../assets/images/markup-img/logo.png" alt="">
                    </a>
                    <div class="header__title">Заказ специального питания</div>
                    <div class="header__desc">
                        здесь вы можете заказать продукты и составить индивидуальный план питания <br> по состоянию здоровья и образу жизни
                    </div>
                </div>
                <div class="header__right">
                    <nav class="header-nav">
                        <router-link to="/feed"  class="header-nav__item">рецепты</router-link>
                        <router-link to="/profile" class="header-nav__item">профиль</router-link>
                        <router-link to="/feed" class="header-nav__item">мой план</router-link>
                        <router-link to="/cart" class="header-nav__item">корзина</router-link>
                    </nav>
                    <a href="" class="header__cart">
          <span class="header__cart-icon">
            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_315:3483)">
                <path d="M7.12492 17.9166C7.56214 17.9166 7.91658 17.5622 7.91658 17.125C7.91658 16.6878 7.56214 16.3333 7.12492 16.3333C6.68769 16.3333 6.33325 16.6878 6.33325 17.125C6.33325 17.5622 6.68769 17.9166 7.12492 17.9166Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M15.8334 17.9166C16.2706 17.9166 16.6251 17.5622 16.6251 17.125C16.6251 16.6878 16.2706 16.3333 15.8334 16.3333C15.3962 16.3333 15.0417 16.6878 15.0417 17.125C15.0417 17.5622 15.3962 17.9166 15.8334 17.9166Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M0.791748 1.29169H3.95841L6.08008 11.8921C6.15247 12.2566 6.35076 12.584 6.64022 12.817C6.92968 13.05 7.29188 13.1738 7.66341 13.1667H15.3584C15.7299 13.1738 16.0921 13.05 16.3816 12.817C16.6711 12.584 16.8694 12.2566 16.9417 11.8921L18.2084 5.25002H4.75008" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
              <defs>
                <clipPath id="clip0_315:3483">
                  <rect width="19" height="19" fill="white" transform="translate(0 0.5)"/>
                </clipPath>
              </defs>
            </svg>
          </span>
                        <span class="header__cart-num">3</span>
                    </a>
                </div>
            </div>
        </div>
    </header>
  </div>

</template>

<script>
export default {
  
}
</script>