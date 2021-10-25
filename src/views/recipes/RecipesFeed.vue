<template>
  <div>

    <Header></Header>


    <section class='recipe'>
      <div class='custom-container'>
        <div class="recipe__nav">
          <div class="recipe__search">
            <input type="text" placeholder="поиск рецепта">
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.5 17C11.5376 17 14 14.5376 14 11.5C14 8.46243 11.5376 6 8.5 6C5.46243 6 3 8.46243 3 11.5C3 14.5376 5.46243 17 8.5 17Z" stroke="#888E9A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M16 19L13 16" stroke="#888E9A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <button class="recipe__nav-filter" @click="toggleFilterVisible(true)">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 3H2L10 12.46V19L14 21V12.46L22 3Z" stroke="#5A5A75" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>фильтры</span>
          </button>
        </div>
        <div class='recipe__inner'>
          <div class="recipe__wpap">
            <div class="recipe__item">
                <RecipeCard></RecipeCard>
            </div>
            <div class="recipe__item">
                <RecipeCard></RecipeCard>
            </div>
            <div class="recipe__item">
                <RecipeCard></RecipeCard>
            </div>
            <div class="recipe__item">
                <RecipeCard></RecipeCard>
            </div>
            <div class="recipe__item">
                <RecipeCard></RecipeCard>
            </div>
            <div class="recipe__item">
                <RecipeCard></RecipeCard>
            </div>
        </div>
          <div class="recipe-plan__wrap">
                <div class="recipe-plan">
                    <div class="recipe-plan__title">мой план питания</div>
                    <div class="recipe-plan__nav">
                        <button class="recipe-plan__nav-btn">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 12H5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M12 19L5 12L12 5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                        <span class="recipe-plan__nav-date">22.09</span>
                        <button class="recipe-plan__nav-btn">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 12H19" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M12 19L19 12L12 5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                    </div>
                    <div class="recipe-plan__delivery">
                        <span>доставка:</span>
                        <select class="recipe-plan__delivery-select custom-select" name="" id="">
                            <option value="13:00 - 14:00">13:00 - 14:00</option>
                            <option value="14:00 - 15:00">14:00 - 15:00</option>
                            <option value="15:00 - 16:00">15:00 - 16:00</option>
                        </select>
                    </div>
                    <div class="recipe-plan__items">
                        <div class="recipe-plan__item">
                            <div class="recipe-plan__item-img">
                                <img src="../../assets/images/markup-img/plan.jpg" alt="">
                            </div>
                            <div class="recipe-plan__item-content">
                                <div class="recipe-plan__item-title">Куриные шашлычки в духовке</div>
                                <div class='recipe-plan__item-calc ccalc'>
                                    <button class='ccalc-minus'>
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.96722 8.92773H13.7017" stroke="#51B1A6" stroke-width="1.66876" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </button>
                                    <input type='text' value='1'>
                                    <button class='ccalc-plus'>
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.9162 4.06055V13.795" stroke="#51B1A6" stroke-width="1.66876" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M4.04895 8.92773H13.7834" stroke="#51B1A6" stroke-width="1.66876" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <button class="recipe-plan__item-delete">
                                <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 4.11108H2.55556H15" stroke="#D4145A" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M4.889 4.11111V2.55556C4.889 2.143 5.05289 1.74733 5.34461 1.45561C5.63633 1.16389 6.03199 1 6.44455 1H9.55566C9.96822 1 10.3639 1.16389 10.6556 1.45561C10.9473 1.74733 11.1112 2.143 11.1112 2.55556V4.11111M13.4446 4.11111V15C13.4446 15.4126 13.2807 15.8082 12.9889 16.0999C12.6972 16.3917 12.3016 16.5556 11.889 16.5556H4.11122C3.69866 16.5556 3.303 16.3917 3.01128 16.0999C2.71955 15.8082 2.55566 15.4126 2.55566 15V4.11111H13.4446Z" stroke="#D4145A" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M6.44434 8V12.6667" stroke="#D4145A" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M9.55566 8V12.6667" stroke="#D4145A" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </button>
                        </div>
                        <div class="recipe-plan__item">
                            <div class="recipe-plan__item-img">
                                <img src="../../assets/images/markup-img/plan.jpg" alt="">
                            </div>
                            <div class="recipe-plan__item-content">
                                <div class="recipe-plan__item-title">Куриные шашлычки в духовке</div>
                                <div class='recipe-plan__item-calc ccalc'>
                                    <button class='ccalc-minus'>
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.96722 8.92773H13.7017" stroke="#51B1A6" stroke-width="1.66876" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </button>
                                    <input type='text' value='1'>
                                    <button class='ccalc-plus'>
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.9162 4.06055V13.795" stroke="#51B1A6" stroke-width="1.66876" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M4.04895 8.92773H13.7834" stroke="#51B1A6" stroke-width="1.66876" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <button class="recipe-plan__item-delete">
                                <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 4.11108H2.55556H15" stroke="#D4145A" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M4.889 4.11111V2.55556C4.889 2.143 5.05289 1.74733 5.34461 1.45561C5.63633 1.16389 6.03199 1 6.44455 1H9.55566C9.96822 1 10.3639 1.16389 10.6556 1.45561C10.9473 1.74733 11.1112 2.143 11.1112 2.55556V4.11111M13.4446 4.11111V15C13.4446 15.4126 13.2807 15.8082 12.9889 16.0999C12.6972 16.3917 12.3016 16.5556 11.889 16.5556H4.11122C3.69866 16.5556 3.303 16.3917 3.01128 16.0999C2.71955 15.8082 2.55566 15.4126 2.55566 15V4.11111H13.4446Z" stroke="#D4145A" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M6.44434 8V12.6667" stroke="#D4145A" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M9.55566 8V12.6667" stroke="#D4145A" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </button>
                        </div>
                        <div class="recipe-plan__item">
                            <div class="recipe-plan__item-img">
                                <img src="../../assets/images/markup-img/plan.jpg" alt="">
                            </div>
                            <div class="recipe-plan__item-content">
                                <div class="recipe-plan__item-title">Куриные шашлычки в духовке</div>
                                <div class='recipe-plan__item-calc ccalc'>
                                    <button class='ccalc-minus'>
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.96722 8.92773H13.7017" stroke="#51B1A6" stroke-width="1.66876" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </button>
                                    <input type='text' value='1'>
                                    <button class='ccalc-plus'>
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.9162 4.06055V13.795" stroke="#51B1A6" stroke-width="1.66876" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M4.04895 8.92773H13.7834" stroke="#51B1A6" stroke-width="1.66876" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <button class="recipe-plan__item-delete">
                                <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 4.11108H2.55556H15" stroke="#D4145A" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M4.889 4.11111V2.55556C4.889 2.143 5.05289 1.74733 5.34461 1.45561C5.63633 1.16389 6.03199 1 6.44455 1H9.55566C9.96822 1 10.3639 1.16389 10.6556 1.45561C10.9473 1.74733 11.1112 2.143 11.1112 2.55556V4.11111M13.4446 4.11111V15C13.4446 15.4126 13.2807 15.8082 12.9889 16.0999C12.6972 16.3917 12.3016 16.5556 11.889 16.5556H4.11122C3.69866 16.5556 3.303 16.3917 3.01128 16.0999C2.71955 15.8082 2.55566 15.4126 2.55566 15V4.11111H13.4446Z" stroke="#D4145A" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M6.44434 8V12.6667" stroke="#D4145A" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M9.55566 8V12.6667" stroke="#D4145A" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div class="recipe-plan__sum">
                        <div class="recipe-plan__sum-title">Итого на <span>22.09</span></div>
                        <div class="recipe-plan__sum-price">1567 руб.</div>
                    </div>
                    <div class="recipe-plan__cart">
                        <img src="../../assets/images/markup-img/cart.svg" alt="">
                        <span>12</span>
                        <button class="recipe-plan__cart-btn">заказать</button>
                    </div>
                    <div class="recipe-plan__info">
                        <div class="recipe-plan__info-item">
                            <div class="recipe-plan__info-item-title">количество <br> дней в плане</div>
                            <div class="recipe-plan__info-item-num">6</div>
                        </div>
                        <div class="recipe-plan__info-item">
                            <div class="recipe-plan__info-item-title">общая сумма</div>
                            <div class="recipe-plan__info-item-num">12 309 руб.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>

    <div v-if="filterVisible" class="recipe-filter" v-scroll-lock="filterVisible">
        <div class="recipe-filter__bg" @click="toggleFilterVisible(false)"></div>
            <form class="recipe-filter__wrap">
                <div class="recipe-filter__top">
                    <div class="recipe-filter__title">Фильтры</div>
                    <button class="recipe-filter__close"
                            type="button"
                            @click="toggleFilterVisible(false)">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 6L6 18" stroke="#5A5A75" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M6 6L18 18" stroke="#5A5A75" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                </div>
                <div class="recipe-filter__group"
                     v-for='filterGroup in filterItems'>
                    <div class="recipe-filter__group-show" 
                        @click="openFilterGroup(filterGroup.groupName)">
                        <span>{{filterGroup.groupName}}</span>
                        <i>
                            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 1L5 5L1 1" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </i>
                    </div>
                    <div class="recipe-filter__group-hidden" 
                    v-if='visibleFilterGroup.visible === filterGroup.groupName'>
                        <div class="recipe-filter__ckeck"
                             v-for='(filter, idx) in filterGroup.groupFilters'>
                            <input type='checkbox' :id='filterGroup.groupLabel+idx'>
                            <label :for='filterGroup.groupLabel+idx'>
                                {{filter}}
                            </label>
                        </div>
                    </div>
                </div>
                <div class="recipe-filter__buttons">
                    <button class="recipe-filter__submit">применить</button>
                    <button class="recipe-filter__reset">сбросить все фильтры</button>
                </div>
            </form>
        </div>

  </div>
</template>

<script>

import Header from '../../layouts/header/Header'
import RecipeCard from './RecipeCard'


export default {
    components: {
        Header,
        RecipeCard
    },
    data() {
        return {
            filterVisible: false,
            filterItems: [
                {
                    groupName: 'Тип кухни',
                    groupLabel: 'cuisineType',
                    groupFilters: [
                        'Средиземноморская','Восточная', 'Русская', 'Среднеазиатская', 
                        'Армянская', 'Азиатская','Корейская','Японская','Китайская'
                    ]
                },
                {
                    groupName: 'Образ жизни',
                    groupLabel: 'lifeStile',
                    groupFilters: [
                        'Сидячий','Многоподвижный'
                    ]
                },
                {
                    groupName: 'Состояние здоровья',
                    groupLabel: 'healthStatus',
                    groupFilters: [
                        'Отличное','Хорошее','Удовлетворительное'
                    ]
                },
                {
                    groupName: 'Тип диеты',
                    groupLabel: 'dietType',
                    groupFilters: [
                        'Вегитарианская','Средиземноморская','Мясная'
                    ]
                }
            ],
            visibleFilterGroup: {
                visible: ''
            }
        };
    },
    methods: {
        toggleFilterVisible: function(value) {
            this.filterVisible = value
            window.scrollTo(0, 0)
        },
        openFilterGroup: function(filterName) {
            if (this.visibleFilterGroup.visible && this.visibleFilterGroup.visible === filterName){
                this.visibleFilterGroup.visible = ''
            } else {
                this.visibleFilterGroup.visible = filterName    
            }
            
        }
    },
}
</script>

<style lang="scss">
    /*@import "src/assets/scss/markup/custom-styles";*/
    /*@import "src/assets/scss/markup/recipe";*/
</style>
