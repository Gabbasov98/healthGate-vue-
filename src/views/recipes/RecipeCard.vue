<template>
    <div class="recipe-card">
        <div class="recipe-card__top">
            <router-link to="/feed-bloger">
                <div class="recipe-card__logo">
                    <img src="../../assets/images/markup-img/avatar2.jpg" alt="">
                </div>
            </router-link>
            <div class="recipe-card__top-content">
                <div class="recipe-card__name">yourdoctor</div>
                <div class="recipe-card__profession">терапевт</div>
                <div class="recipe-card__tags">
                    <a class="recipe-card__tag" href="">#без глютена</a>
                    <a class="recipe-card__tag" href="">#диетическое</a>
                    <a class="recipe-card__tag" href="">#легко готовить</a>
                </div>
            </div>
        </div>
        
        <div class="recipe-card__img">
            <img src="../../assets/images/markup-img/recipe2.jpg" alt="">
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
        <div class="recipe-card__subtitle">второе блюдо</div>
        <div class="recipe-card__title">Кальмары, фаршированные кускусом</div>
        <div class="recipe-card__desc">
            Это ароматное мясо с кускусом и овощами, настоящее объедение. Любители вкусно покушать будут в восторге от такого блюда
        </div>
        <div class="recipe-card__info">
            <div class="recipe-card__info-item">
                <img src="../../assets/images/markup-img/time.png" alt="">
                <span>1 час 40 мин</span>
            </div>
            <div class="recipe-card__info-item">
                <img src="../../assets/images/markup-img/hat.svg" alt="">
                <span>сложно</span>
            </div>
            <div class="recipe-card__info-item">
                <img src="../../assets/images/markup-img/fire.svg" alt="">
                <span>55 кал</span>
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
</template>

<script>
export default {
    
}
</script>