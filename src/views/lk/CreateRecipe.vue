<template>
  <div>

    <Header></Header>

    <section class='profile'>
        <div class='custom-container'>
            <div class='profile__inner'>
                <BlogerProfileNav></BlogerProfileNav>
                <div class="profile-content">
                    <div>
                        <div class="profile-create" v-if="!profileDetailVisible">
                            <div class="profile-create__left">
                                <form>
                                    <div class="profile-create__top">
                                        <p class="profile__title profile-create__title">Создать рецепт</p>
                                        <router-link to="/draft" class="profile-create__top-link">черновики</router-link>
                                    </div>
                                    <div class="profile-create__img">
                                        <input type="file" name="" id="">
                                        <button class="profile-create__img-btn" type="button">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12 4.00001L12 12M12 12L12 20M12 12L20 12M12 12L4 12" stroke="white" stroke-width="2"/>
                                            </svg>
                                        </button>
                                        <span class="profile-create__img-link">загрузить фото</span>
                                    </div>
                                    <div class="profile-edit__form-group">
                                        <label for="">Тип блюда</label>
                                        <div class="profile-create__select">
                                            <span @click="openFoodTypeVisible">выберете тип блюда</span>
                                            <div class="profile-create__select-dropdown" 
                                                v-if="foodTypeVisible"
                                                v-click-outside="clickOutsideFoodTypeVisible">
                                                <div class="profile-create__select-check">
                                                    <input type="checkbox" id="typeFood1">
                                                    <label for="typeFood1">Первое</label>
                                                </div>
                                                <div class="profile-create__select-check">
                                                    <input type="checkbox" id="typeFood2">
                                                    <label for="typeFood2">Второе</label>
                                                </div>
                                                <div class="profile-create__select-check">
                                                    <input type="checkbox" id="typeFood3">
                                                    <label for="typeFood3">Завтрак</label>
                                                </div>
                                                <div class="profile-create__select-check">
                                                    <input type="checkbox" id="typeFood4">
                                                    <label for="typeFood4">Другое</label>
                                                </div>
                                                <div class="profile-create__select-check">
                                                    <input type="checkbox" id="typeFood5">
                                                    <label for="typeFood5">Напиток</label>
                                                </div>
                                                <div class="profile-create__select-check">
                                                    <input type="checkbox" id="typeFood6">
                                                    <label for="typeFood6">Десерт</label>
                                                </div>
                                                <div class="profile-create__select-check">
                                                    <input type="checkbox" id="typeFood7">
                                                    <label for="typeFood7">Выпечка</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="profile-edit__form-group">
                                        <input type="text" placeholder="Название блюда">
                                        <label for="">Название</label>
                                    </div>
                                    <div class="profile-edit__form-group">
                                        <textarea placeholder="Описание блюда"></textarea>
                                        <label for="">Название</label>
                                    </div>
                                    <div class="profile-edit__form-group">
                                        <input type="text" placeholder="Введите время готовки">
                                        <label for="">Время приготовления</label>
                                    </div>
                                    <div class="profile-create__form-check">
                                        <input type="checkbox" id="marinate">
                                        <label for="marinate">Требует дополнительной подготовки (маринования и т.д.)</label>
                                    </div>
                                    <div class="profile-edit__form-group">
                                        <label for="">Сложность</label>
                                        <div class="profile-edit__form-group-select">
                                            <select name="" id="">
                                                <option selected disabled hidden value="Выберет сложность рецепта">Выберет сложность рецепта</option>
                                                <option value="Тип 1">Тип 1</option>
                                                <option value="Тип 2">Тип 2</option>
                                                <option value="Тип 3">Тип 3</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="profile-edit__form-group">
                                        <label for="">Теги</label>
                                        <div class="profile-create__select">
                                            <span @click="openTagVisible">Отметьте теги</span>
                                            <div class="profile-create__select-dropdown" 
                                                v-if="tagVisible"
                                                v-click-outside="clickOutsideTagVisible">
                                                <div class="profile-create__select-check">
                                                    <input type="checkbox" id="tag1">
                                                    <label for="tag1">Тег 1</label>
                                                </div>
                                                <div class="profile-create__select-check">
                                                    <input type="checkbox" id="tag2">
                                                    <label for="tag2">Тег 2</label>
                                                </div>
                                                <div class="profile-create__select-check">
                                                    <input type="checkbox" id="tag3">
                                                    <label for="tag3">Тег 3</label>
                                                </div>
                                                <div class="profile-create__select-check">
                                                    <input type="checkbox" id="tag4">
                                                    <label for="tag4">Тег 4</label>
                                                </div>
                                                <div class="profile-create__select-check">
                                                    <input type="checkbox" id="tag5">
                                                    <label for="tag5">Тег 5</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="profile-edit__form-group">
                                        <input type="text" placeholder="Количество калорий">
                                        <label for="">Калории</label>
                                    </div>
                                    <div class="profile-create__nav">
                                        <button type="button" 
                                                @click="profileDetailVisible = true"
                                                class="profile-create__nav-btn-green">
                                                добавить детали
                                        </button>
                                        <button class="profile-create__nav-btn">сохранить как черновик</button>
                                    </div>
                                </form>
                            </div>
                            <div class="profile-create__right">
                                <p class="profile__title profile-create__title">Предпросмотр</p>
                                <div class="profile-create__preview">
                                    <div class="recipe-card">
                                        <div class="recipe-card__top">
                                            <div class="recipe-card__logo">
                                                <img src="../../assets/images/markup-img/avatar1.jpg" alt="">
                                            </div>
                                            <div class="recipe-card__top-content">
                                                <div class="recipe-card__name">yourdoctor</div>
                                                <div class="recipe-card__profession">терапевт</div>
                                                <div class="recipe-card__tags">
                                                    <a class="recipe-card__tag" href="">#</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="recipe-card__img">
                                            <!-- <img src="img/recipe1.jpg" alt=""> -->
                                        </div>
                                        <div class="recipe-card__nav">
                                            <button class="recipe-card__favourite recipe-card__nav-btn">
                                                <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M16.3422 2.39601C15.9344 1.97507 15.4503 1.64115 14.9175 1.41332C14.3846 1.1855 13.8135 1.06824 13.2367 1.06824C12.6599 1.06824 12.0888 1.1855 11.5559 1.41332C11.0231 1.64115 10.5389 1.97507 10.1312 2.39601L9.28495 3.26921L8.43871 2.39601C7.61508 1.54614 6.49799 1.06868 5.3332 1.06868C4.16841 1.06868 3.05132 1.54614 2.22769 2.39601C1.40406 3.24589 0.941345 4.39858 0.941345 5.60049C0.941345 6.8024 1.40406 7.95508 2.22769 8.80496L3.07392 9.67816L9.28495 16.0871L15.496 9.67816L16.3422 8.80496C16.7501 8.38421 17.0738 7.88465 17.2945 7.33482C17.5153 6.78499 17.629 6.19565 17.629 5.60049C17.629 5.00532 17.5153 4.41599 17.2945 3.86615C17.0738 3.31632 16.7501 2.81676 16.3422 2.39601V2.39601Z" stroke="#5A5A75" stroke-width="0.834381" stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg>
                                                <span>сохранить</span>
                                            </button>
                                            <button class="recipe-card__share recipe-card__nav-btn">
                                                <svg width="13" height="17" viewBox="0 0 13 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M0.551453 8.57751V14.5851C0.551453 14.9834 0.709687 15.3654 0.991345 15.6471C1.273 15.9287 1.65501 16.0869 2.05334 16.0869H11.0647C11.463 16.0869 11.845 15.9287 12.1267 15.6471C12.4083 15.3654 12.5665 14.9834 12.5665 14.5851V8.57751" stroke="#5A5A75" stroke-width="0.834381" stroke-linecap="round" stroke-linejoin="round"/>
                                                    <path d="M9.56254 4.07201L6.55877 1.06824L3.55499 4.07201" stroke="#5A5A75" stroke-width="0.834381" stroke-linecap="round" stroke-linejoin="round"/>
                                                    <path d="M6.55902 1.06824V10.8305" stroke="#5A5A75" stroke-width="0.834381" stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg>
                                                <span>поделиться</span>
                                            </button>
                                        </div>
                                        <div class="recipe-card__subtitle">-</div>
                                        <div class="recipe-card__title">-</div>
                                        <div class="recipe-card__desc">-</div>
                                        <div class="recipe-card__info">
                                            <div class="recipe-card__info-item">
                                                <img src="../../assets/images/markup-img/time.png" alt="">
                                                <span>-</span>
                                            </div>
                                            <div class="recipe-card__info-item">
                                                <img src="../../assets/images/markup-img/hat.svg" alt="">
                                                <span>-</span>
                                            </div>
                                            <div class="recipe-card__info-item">
                                                <img src="../../assets/images/markup-img/fire.svg" alt="">
                                                <span>-</span>
                                            </div>
                                        </div>
                                        <div class="recipe-card__cart">
                                            <button class="recipe-card__plan">
                                                <img src="../../assets/images/markup-img/calendar.svg" alt="">
                                                <span>добавить <br>в план</span>
                                            </button>
                                            <div class='recipe-card__calc ccalc'>
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
                                            <button class="recipe-card__cart-add">
                                                <img src="../../assets/images/markup-img/cart.svg" alt="">                                        
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="profile-detail" v-if="profileDetailVisible">
                            <p class="profile__title profile-create__title mb-35">Детали рецепта</p>
                            <div class="profile-edit__form-group">
                                <input type="text" placeholder="Название блюда">
                                <label for="">Количество персон</label>
                            </div>
                            <div class="profile-edit__form-group profile-create__form-kkal">
                                <input type="number" placeholder="Белки">
                                <span>г.</span>
                                <input type="number" placeholder="Жиры">
                                <span>г.</span>
                                <input type="number" placeholder="Углев.">
                                <span>г.</span>
                                <label for="">Пищевая ценность</label>
                            </div>
                            <div class="profile-edit__form-group profile-create__form-ingridient">
                                <input class="profile-create__form-ingridient-search" type="text" placeholder="Начните вводить название">
                                <input class="profile-create__form-ingridient-weight" type="text" placeholder="введите вес">
                                <select class="profile-create__form-ingridient-unit">
                                    <option value="кг.">кг.</option>
                                    <option value="гр.">гр.</option>
                                    <option value="л.">л.</option>
                                    <option value="мл.">мл.</option>
                                    <option value="шт.">шт.</option>
                                </select>
                                <button class="profile-create__form-ingridient-btn">
                                    <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.00003 11.1701L1.83003 7.00009L0.410034 8.41009L6.00003 14.0001L18 2.00009L16.59 0.590088L6.00003 11.1701Z" fill="#51B1A6"/>
                                    </svg>
                                </button>
                                <label for="">Ингредиенты</label>
                            </div>
                            <div class="profile-create__ingridients">
                                <div class="profile-create__ingridients-item">
                                    <button>
                                        <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.99375 0.125L4.5 3.61875L1.00625 0.125L0.125 1.00625L3.61875 4.5L0.125 7.99375L1.00625 8.875L4.5 5.38125L7.99375 8.875L8.875 7.99375L5.38125 4.5L8.875 1.00625L7.99375 0.125Z" fill="#D4145A"/>
                                        </svg>
                                    </button>
                                    <p>
                                        <strong>Картофель</strong>
                                        <span>400 гр.</span>
                                    </p>
                                </div>
                                <div class="profile-create__ingridients-item">
                                    <button>
                                        <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.99375 0.125L4.5 3.61875L1.00625 0.125L0.125 1.00625L3.61875 4.5L0.125 7.99375L1.00625 8.875L4.5 5.38125L7.99375 8.875L8.875 7.99375L5.38125 4.5L8.875 1.00625L7.99375 0.125Z" fill="#D4145A"/>
                                        </svg>
                                    </button>
                                    <p>
                                        <strong>Оливковое масло, первый отжим, Экстра верджин “Оиллукоил”</strong>
                                        <span>400 гр.</span>
                                    </p>
                                </div>
                            </div>
                            <button class="profile-create__add-step" 
                                    @click="profileStepsVisible = true">
                                <i>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 4.00001L12 12M12 12L12 20M12 12L20 12M12 12L4 12" stroke="white" stroke-width="2"/>
                                    </svg>
                                </i>
                                <span>добавить пошаговый рецепт</span>
                            </button>

                            <div class="profile-steps" v-if="profileStepsVisible">
                                <p class="profile__title profile-create__title mb-35">Детали рецепта</p>
                                <div class="profile-steps__items">
                                    <div class="profile-steps__item">
                                        <div class="profile-steps__item-num">Шаг 1.</div>
                                        <div class="profile-steps__item-wrap">
                                            <div class="profile-create__img m-0">
                                                <input type="file" name="" id="">
                                                <button class="profile-create__img-btn" type="button">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M12 4.00001L12 12M12 12L12 20M12 12L20 12M12 12L4 12" stroke="white" stroke-width="2"/>
                                                    </svg>
                                                </button>
                                                <span class="profile-create__img-link">загрузить фото</span>
                                            </div>
                                            <div class="profile-steps__item-right">
                                                <div class="profile-steps__title">Ингредиенты</div>
                                                <div class="profile-steps__desc">Отметьте необходимые ингредиенты для данного этапа приготовления</div>
                                                <div class="profile-steps__tags">
                                                    <div class="profile-steps__tag">картофель</div>
                                                    <div class="profile-steps__tag profile-steps__tag--selected">Томаты на ветке “Экоферма”</div>
                                                    <div class="profile-steps__tag">картофель</div>
                                                    <div class="profile-steps__tag">перец</div>
                                                    <div class="profile-steps__tag">Оливковое масло, первый отжим, Экстра верджин “Оиллукоил”</div>
                                                    <div class="profile-steps__tag">Соль</div>
                                                    <div class="profile-steps__tag">кус-кус</div>
                                                </div>
                                                <div class="profile-steps__title">Описание</div>
                                                <div class="profile-steps__desc">Подробно опишите этап приготовления блюда</div>
                                                <textarea placeholder="Описание блюда"></textarea>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                                <button class="profile-create__add-step">
                                    <i>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 4.00001L12 12M12 12L12 20M12 12L20 12M12 12L4 12" stroke="white" stroke-width="2"/>
                                        </svg>
                                    </i>
                                    <span>добавить следующий шаг</span>
                                </button>
                            </div>

                            <div class="profile-create__nav">
                                <button class="profile-create__nav-btn-green">опубликовать</button>
                                <button class="profile-create__nav-btn">сохранить как черновик</button>
                            </div>
                        </div>
                    </div>
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



export default {
    components: {
        Header,
        BlogerProfileNav,
        DraftRecipeCard
    },
    data() {
        return {
            foodTypeVisible: false,
            tagVisible: false,
            profileDetailVisible: false,
            profileStepsVisible: false,
        };
    },
    methods: {
        openFoodTypeVisible(){
            this.foodTypeVisible = true
        },
        clickOutsideFoodTypeVisible(event){
            this.foodTypeVisible = false
        },
        openTagVisible(){
            this.tagVisible = true
        },
        clickOutsideTagVisible(event){
            this.tagVisible = false
        },
    },
}
</script>

<style lang="scss">
    .mb-35{
        margin-bottom:35px;
    }
    .mb-25{
        margin-bottom:25px !important;
    }
    .m-0{
        margin:0;
    }
</style>
