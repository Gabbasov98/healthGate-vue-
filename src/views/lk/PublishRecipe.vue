<template>
  <div>

    <Header></Header>

    <section class='profile'>
        <div class='custom-container'>
            <div class='profile__inner'>
                <BlogerProfileNav></BlogerProfileNav>
                <div class="profile-content">
                    <p class="profile__title profile-create__title">Создать пост</p>
                    <div class="publish-post">
                        <div class="publish-post__top">
                            <div class="publish-post__top-title">Ваши рецепты</div>
                            <div class="publish-post__top-right">
                                <div class="publish-post__top-hint">отметьме один или несколько рецептом</div>
                                <div class="publish-post__top-search">
                                    <input type="text" placeholder="поиск рецепта">
                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.5 17C11.5376 17 14 14.5376 14 11.5C14 8.46243 11.5376 6 8.5 6C5.46243 6 3 8.46243 3 11.5C3 14.5376 5.46243 17 8.5 17Z" stroke="#888E9A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M16 19L13 16" stroke="#888E9A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div class="publish-post__recipes">
                            <div class="publish-post__recipes-top">
                                <span>ваши последние рецепты</span>
                                <span>показать все</span>
                            </div>
                            <div class="publish-post__scroll">
                                <vue-custom-scrollbar class="scroll-area"  :settings="scrollbarSettings" @ps-scroll-x="scrollHanle">
                                    <div class="publish-post__wrap">
                                        <div class="publish-post__item">
                                            <div class="publish-post__item-top">
                                                <div class="publish-post__item-img">
                                                    <img src="../../assets/images/markup-img/recipe2.jpg" alt="">
                                                </div>
                                                <div class="publish-post__item-check">
                                                    <input type="checkbox" name="" id="publish1">
                                                    <label for="publish1"></label>
                                                </div>
                                            </div>
                                            <div class="publish-post__item-title">
                                                Куриные шашлычки в духовке
                                            </div>
                                        </div>
                                        <div class="publish-post__item">
                                            <div class="publish-post__item-top">
                                                <div class="publish-post__item-img">
                                                    <img src="../../assets/images/markup-img/recipe2.jpg" alt="">
                                                </div>
                                                <div class="publish-post__item-check">
                                                    <input type="checkbox" name="" id="publish1">
                                                    <label for="publish1"></label>
                                                </div>
                                            </div>
                                            <div class="publish-post__item-title">
                                                Куриные шашлычки в духовке
                                            </div>
                                        </div>
                                        <div class="publish-post__item">
                                            <div class="publish-post__item-top">
                                                <div class="publish-post__item-img">
                                                    <img src="../../assets/images/markup-img/recipe2.jpg" alt="">
                                                </div>
                                                <div class="publish-post__item-check">
                                                    <input type="checkbox" name="" id="publish1">
                                                    <label for="publish1"></label>
                                                </div>
                                            </div>
                                            <div class="publish-post__item-title">
                                                Куриные шашлычки в духовке
                                            </div>
                                        </div>
                                        <div class="publish-post__item">
                                            <div class="publish-post__item-top">
                                                <div class="publish-post__item-img">
                                                    <img src="../../assets/images/markup-img/recipe2.jpg" alt="">
                                                </div>
                                                <div class="publish-post__item-check">
                                                    <input type="checkbox" name="" id="publish1">
                                                    <label for="publish1"></label>
                                                </div>
                                            </div>
                                            <div class="publish-post__item-title">
                                                Куриные шашлычки в духовке
                                            </div>
                                        </div>
                                        <div class="publish-post__item">
                                            <div class="publish-post__item-top">
                                                <div class="publish-post__item-img">
                                                    <img src="../../assets/images/markup-img/recipe2.jpg" alt="">
                                                </div>
                                                <div class="publish-post__item-check">
                                                    <input type="checkbox" name="" id="publish1">
                                                    <label for="publish1"></label>
                                                </div>
                                            </div>
                                            <div class="publish-post__item-title">
                                                Куриные шашлычки в духовке
                                            </div>
                                        </div>
                                        <div class="publish-post__item">
                                            <div class="publish-post__item-top">
                                                <div class="publish-post__item-img">
                                                    <img src="../../assets/images/markup-img/recipe2.jpg" alt="">
                                                </div>
                                                <div class="publish-post__item-check">
                                                    <input type="checkbox" name="" id="publish1">
                                                    <label for="publish1"></label>
                                                </div>
                                            </div>
                                            <div class="publish-post__item-title">
                                                Куриные шашлычки в духовке
                                            </div>
                                        </div>
                                        <div class="publish-post__item">
                                            <div class="publish-post__item-top">
                                                <div class="publish-post__item-img">
                                                    <img src="../../assets/images/markup-img/recipe2.jpg" alt="">
                                                </div>
                                                <div class="publish-post__item-check">
                                                    <input type="checkbox" name="" id="publish1">
                                                    <label for="publish1"></label>
                                                </div>
                                            </div>
                                            <div class="publish-post__item-title">
                                                Куриные шашлычки в духовке
                                            </div>
                                        </div>
                                        <div class="publish-post__item">
                                            <div class="publish-post__item-top">
                                                <div class="publish-post__item-img">
                                                    <img src="../../assets/images/markup-img/recipe2.jpg" alt="">
                                                </div>
                                                <div class="publish-post__item-check">
                                                    <input type="checkbox" name="" id="publish1">
                                                    <label for="publish1"></label>
                                                </div>
                                            </div>
                                            <div class="publish-post__item-title">
                                                Куриные шашлычки в духовке
                                            </div>
                                        </div>
                                    </div>
                                </vue-custom-scrollbar>
                            </div>
                            <div class="publish-post__recipes-nav">
                                <div class="publish-post__recipes-selected">Выбрано: <strong>2 рецепта</strong></div>
                                <button class="publish-post__recipes-cancel">отменить выбор</button>
                            </div>
                        </div>
                    </div>
                    <button class="publish-post__publicate">поделиться</button>
                </div>
            </div>
        </div>
    </section>

  </div>
</template>

<script>

import Header from '../../layouts/header/Header'
import BlogerProfileNav from './BlogerProfileNav'
import DraftRecipeCard from './DraftRecipeCard'
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
