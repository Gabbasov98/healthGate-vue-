<template>
  <div>

    <Header></Header>

    <section class='profile'>
        <div class='custom-container'>
            <div class='profile__inner'>
                <BlogerProfileNav></BlogerProfileNav>
                <div class="profile-content">
                    <p class="profile__title profile-create__title">Рейтинг</p>
                    <div class="referal-rating">
                        <div class="referal-rating__top">
                            <span>Топ 10</span>
                            <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 1L14 7L19 3L17 13H3L1 3L6 7L10 1Z" stroke="#51B1A6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div class="referal-rating__list">
                            <div class="referal-rating__item">
                                <div class="referal-rating__item-num">1</div>
                                <div class="referal-rating__item-name">
                                    <span>Иван Иванов</span>
                                    <a href="">
                                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.25 2.5H4.375V3.75H1.25V8.75H6.25V5.625H7.5V8.75C7.5 9.08152 7.3683 9.39946 7.13388 9.63388C6.89946 9.8683 6.58152 10 6.25 10H1.25C0.918479 10 0.600537 9.8683 0.366116 9.63388C0.131696 9.39946 0 9.08152 0 8.75V3.75C0 3.41848 0.131696 3.10054 0.366116 2.86612C0.600537 2.6317 0.918479 2.5 1.25 2.5ZM7.88375 1.25H5V0H10V5H8.75V2.15125L5.415 5.48625L4.53125 4.6025L7.88375 1.25Z" fill="#51B1A6"/>
                                        </svg>
                                    </a>
                                </div>
                                <div class="referal-rating__item-clicks">23093 переходов</div>
                            </div>
                            <div class="referal-rating__item">
                                <div class="referal-rating__item-num">2</div>
                                <div class="referal-rating__item-name">
                                    <span>Анастасия Долговязова</span>
                                    <a href="">
                                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.25 2.5H4.375V3.75H1.25V8.75H6.25V5.625H7.5V8.75C7.5 9.08152 7.3683 9.39946 7.13388 9.63388C6.89946 9.8683 6.58152 10 6.25 10H1.25C0.918479 10 0.600537 9.8683 0.366116 9.63388C0.131696 9.39946 0 9.08152 0 8.75V3.75C0 3.41848 0.131696 3.10054 0.366116 2.86612C0.600537 2.6317 0.918479 2.5 1.25 2.5ZM7.88375 1.25H5V0H10V5H8.75V2.15125L5.415 5.48625L4.53125 4.6025L7.88375 1.25Z" fill="#51B1A6"/>
                                        </svg>
                                    </a>
                                </div>
                                <div class="referal-rating__item-clicks">23093 переходов</div>
                            </div>
                            <div class="referal-rating__item">
                                <div class="referal-rating__item-num">3</div>
                                <div class="referal-rating__item-name">
                                    <span>Андрей Андреевич</span>
                                    <a href="">
                                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.25 2.5H4.375V3.75H1.25V8.75H6.25V5.625H7.5V8.75C7.5 9.08152 7.3683 9.39946 7.13388 9.63388C6.89946 9.8683 6.58152 10 6.25 10H1.25C0.918479 10 0.600537 9.8683 0.366116 9.63388C0.131696 9.39946 0 9.08152 0 8.75V3.75C0 3.41848 0.131696 3.10054 0.366116 2.86612C0.600537 2.6317 0.918479 2.5 1.25 2.5ZM7.88375 1.25H5V0H10V5H8.75V2.15125L5.415 5.48625L4.53125 4.6025L7.88375 1.25Z" fill="#51B1A6"/>
                                        </svg>
                                    </a>
                                </div>
                                <div class="referal-rating__item-clicks">23093 переходов</div>
                            </div>
                            <div class="referal-rating__item">
                                <div class="referal-rating__item-num">4</div>
                                <div class="referal-rating__item-name">
                                    <span>София Тарасова</span>
                                    <a href="">
                                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.25 2.5H4.375V3.75H1.25V8.75H6.25V5.625H7.5V8.75C7.5 9.08152 7.3683 9.39946 7.13388 9.63388C6.89946 9.8683 6.58152 10 6.25 10H1.25C0.918479 10 0.600537 9.8683 0.366116 9.63388C0.131696 9.39946 0 9.08152 0 8.75V3.75C0 3.41848 0.131696 3.10054 0.366116 2.86612C0.600537 2.6317 0.918479 2.5 1.25 2.5ZM7.88375 1.25H5V0H10V5H8.75V2.15125L5.415 5.48625L4.53125 4.6025L7.88375 1.25Z" fill="#51B1A6"/>
                                        </svg>
                                    </a>
                                </div>
                                <div class="referal-rating__item-clicks">23093 переходов</div>
                            </div>
                            <div class="referal-rating__item">
                                <div class="referal-rating__item-num">5</div>
                                <div class="referal-rating__item-name">
                                    <span>Сири Айфоновна</span>
                                    <a href="">
                                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.25 2.5H4.375V3.75H1.25V8.75H6.25V5.625H7.5V8.75C7.5 9.08152 7.3683 9.39946 7.13388 9.63388C6.89946 9.8683 6.58152 10 6.25 10H1.25C0.918479 10 0.600537 9.8683 0.366116 9.63388C0.131696 9.39946 0 9.08152 0 8.75V3.75C0 3.41848 0.131696 3.10054 0.366116 2.86612C0.600537 2.6317 0.918479 2.5 1.25 2.5ZM7.88375 1.25H5V0H10V5H8.75V2.15125L5.415 5.48625L4.53125 4.6025L7.88375 1.25Z" fill="#51B1A6"/>
                                        </svg>
                                    </a>
                                </div>
                                <div class="referal-rating__item-clicks">23093 переходов</div>
                            </div>
                            <div class="referal-rating__item">
                                <div class="referal-rating__item-num">6</div>
                                <div class="referal-rating__item-name">
                                    <span>Крабовые Палочки</span>
                                    <a href="">
                                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.25 2.5H4.375V3.75H1.25V8.75H6.25V5.625H7.5V8.75C7.5 9.08152 7.3683 9.39946 7.13388 9.63388C6.89946 9.8683 6.58152 10 6.25 10H1.25C0.918479 10 0.600537 9.8683 0.366116 9.63388C0.131696 9.39946 0 9.08152 0 8.75V3.75C0 3.41848 0.131696 3.10054 0.366116 2.86612C0.600537 2.6317 0.918479 2.5 1.25 2.5ZM7.88375 1.25H5V0H10V5H8.75V2.15125L5.415 5.48625L4.53125 4.6025L7.88375 1.25Z" fill="#51B1A6"/>
                                        </svg>
                                    </a>
                                </div>
                                <div class="referal-rating__item-clicks">23093 переходов</div>
                            </div>
                            <div class="referal-rating__item">
                                <div class="referal-rating__item-num">7</div>
                                <div class="referal-rating__item-name">
                                    <span>Валентин Стрыкало</span>
                                    <a href="">
                                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.25 2.5H4.375V3.75H1.25V8.75H6.25V5.625H7.5V8.75C7.5 9.08152 7.3683 9.39946 7.13388 9.63388C6.89946 9.8683 6.58152 10 6.25 10H1.25C0.918479 10 0.600537 9.8683 0.366116 9.63388C0.131696 9.39946 0 9.08152 0 8.75V3.75C0 3.41848 0.131696 3.10054 0.366116 2.86612C0.600537 2.6317 0.918479 2.5 1.25 2.5ZM7.88375 1.25H5V0H10V5H8.75V2.15125L5.415 5.48625L4.53125 4.6025L7.88375 1.25Z" fill="#51B1A6"/>
                                        </svg>
                                    </a>
                                </div>
                                <div class="referal-rating__item-clicks">23093 переходов</div>
                            </div>
                            <div class="referal-rating__item">
                                <div class="referal-rating__item-num">8</div>
                                <div class="referal-rating__item-name">
                                    <span>Дмитрий Солнцев</span>
                                    <a href="">
                                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.25 2.5H4.375V3.75H1.25V8.75H6.25V5.625H7.5V8.75C7.5 9.08152 7.3683 9.39946 7.13388 9.63388C6.89946 9.8683 6.58152 10 6.25 10H1.25C0.918479 10 0.600537 9.8683 0.366116 9.63388C0.131696 9.39946 0 9.08152 0 8.75V3.75C0 3.41848 0.131696 3.10054 0.366116 2.86612C0.600537 2.6317 0.918479 2.5 1.25 2.5ZM7.88375 1.25H5V0H10V5H8.75V2.15125L5.415 5.48625L4.53125 4.6025L7.88375 1.25Z" fill="#51B1A6"/>
                                        </svg>
                                    </a>
                                </div>
                                <div class="referal-rating__item-clicks">23093 переходов</div>
                            </div>
                            <div class="referal-rating__item">
                                <div class="referal-rating__item-num">9</div>
                                <div class="referal-rating__item-name">
                                    <span>Софи Лорен</span>
                                    <a href="">
                                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.25 2.5H4.375V3.75H1.25V8.75H6.25V5.625H7.5V8.75C7.5 9.08152 7.3683 9.39946 7.13388 9.63388C6.89946 9.8683 6.58152 10 6.25 10H1.25C0.918479 10 0.600537 9.8683 0.366116 9.63388C0.131696 9.39946 0 9.08152 0 8.75V3.75C0 3.41848 0.131696 3.10054 0.366116 2.86612C0.600537 2.6317 0.918479 2.5 1.25 2.5ZM7.88375 1.25H5V0H10V5H8.75V2.15125L5.415 5.48625L4.53125 4.6025L7.88375 1.25Z" fill="#51B1A6"/>
                                        </svg>
                                    </a>
                                </div>
                                <div class="referal-rating__item-clicks">23093 переходов</div>
                            </div>
                            <div class="referal-rating__item">
                                <div class="referal-rating__item-num">10</div>
                                <div class="referal-rating__item-name">
                                    <span>Кира Найтли</span>
                                    <a href="">
                                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.25 2.5H4.375V3.75H1.25V8.75H6.25V5.625H7.5V8.75C7.5 9.08152 7.3683 9.39946 7.13388 9.63388C6.89946 9.8683 6.58152 10 6.25 10H1.25C0.918479 10 0.600537 9.8683 0.366116 9.63388C0.131696 9.39946 0 9.08152 0 8.75V3.75C0 3.41848 0.131696 3.10054 0.366116 2.86612C0.600537 2.6317 0.918479 2.5 1.25 2.5ZM7.88375 1.25H5V0H10V5H8.75V2.15125L5.415 5.48625L4.53125 4.6025L7.88375 1.25Z" fill="#51B1A6"/>
                                        </svg>
                                    </a>
                                </div>
                                <div class="referal-rating__item-clicks">23093 переходов</div>
                            </div>
                            <div class="referal-rating__item">
                                <div class="referal-rating__item-num">134</div>
                                <div class="referal-rating__item-name">
                                    <span>Олег Лечебов (это вы)</span>
                                    <a href="">
                                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.25 2.5H4.375V3.75H1.25V8.75H6.25V5.625H7.5V8.75C7.5 9.08152 7.3683 9.39946 7.13388 9.63388C6.89946 9.8683 6.58152 10 6.25 10H1.25C0.918479 10 0.600537 9.8683 0.366116 9.63388C0.131696 9.39946 0 9.08152 0 8.75V3.75C0 3.41848 0.131696 3.10054 0.366116 2.86612C0.600537 2.6317 0.918479 2.5 1.25 2.5ZM7.88375 1.25H5V0H10V5H8.75V2.15125L5.415 5.48625L4.53125 4.6025L7.88375 1.25Z" fill="#51B1A6"/>
                                        </svg>
                                    </a>
                                </div>
                                <div class="referal-rating__item-clicks">23093 переходов</div>
                            </div>
                        </div>
                    </div>
                    <vue-custom-scrollbar class="scroll-area"  :settings="scrollbarSettings" @ps-scroll-x="scrollHanle">
                    </vue-custom-scrollbar>
                </div>
            </div>
        </div>
    </section>

  </div>
</template>

<script>

import Header from '../../layouts/header/Header'
import BlogerProfileNav from './BlogerProfileNav'
import vueCustomScrollbar from 'vue-custom-scrollbar'
import "vue-custom-scrollbar/dist/vueScrollbar.css"


export default {
    components: {
        Header,
        vueCustomScrollbar,
        BlogerProfileNav
    },
    data() {
        return {
            scrollbarSettings: {
                suppressScrollY: true,
                suppressScrollX: false,
                wheelPropagation: false
            },
        };
    },
    methods: {
        scrollHanle(evt) {
            console.log(evt)
        },
    },
}
</script>

<style lang="scss">
    .scroll-area {
        position: relative;
        margin: auto; 
        height: 200px;
        width: 100%;
        // margin-left: px;
    }
    .ps__thumb-x{
        height:5px !important;
        background: #6B7280 !important;
        bottom:5px !important;
    }
</style>
