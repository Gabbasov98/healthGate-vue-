<template>
  <div>

    <Header></Header>

    <section class='recipe-bloger'>
        <div class='custom-container'>
            <div class='recipe-bloger__inner'>
                <div class="recipe-bloger__avatar">
                    <img src="../../assets/images/markup-img/avatar2.jpg" alt="">
                </div>
                <div class="recipe-bloger__content">
                    <div class="recipe-bloger__top">
                        <div class="recipe-bloger__name">Олег Лечебов</div>
                        <button class="recipe-bloger__top-btn">
                            <svg width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 8.5V14.5C1 14.8978 1.15804 15.2794 1.43934 15.5607C1.72064 15.842 2.10218 16 2.5 16H11.5C11.8978 16 12.2794 15.842 12.5607 15.5607C12.842 15.2794 13 14.8978 13 14.5V8.5" stroke="#5A5A75" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M10 4L7 1L4 4" stroke="#5A5A75" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M7.00024 1V10.75" stroke="#5A5A75" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                        <button class="recipe-bloger__follow btn btn-green">подписаться</button>
                        <button class="recipe-bloger__order btn btn-green-outline">записаться на прием</button>
                    </div>
                    <div class="recipe-bloger__stat">
                        <div class="recipe-bloger__stat-item">
                            <div>
                                <div class="recipe-bloger__stat-num">34</div>
                                <div class="recipe-bloger__stat-text">рецепта</div>
                            </div>
                        </div>
                        <div class="recipe-bloger__stat-item">
                            <div>
                                <div class="recipe-bloger__stat-num">170</div>
                                <div class="recipe-bloger__stat-text">подписчики</div>
                            </div>
                        </div>
                        <div class="recipe-bloger__stat-item">
                            <div>
                                <div class="recipe-bloger__stat-num">1548</div>
                                <div class="recipe-bloger__stat-text">лайков</div>
                            </div>
                        </div>
                    </div>
                    <div class="recipe-bloger__info">
                        врач со стажем больше 20 лет <br> работаю с пациентами с расстройством ЖКТ
                    </div>
                    <div class="recipe-bloger__tags">
                        <a href="" class="recipe-bloger__tag">#без глютена</a>
                        <a href="" class="recipe-bloger__tag">#диетическое</a>
                        <a href="" class="recipe-bloger__tag">#легко готовить</a>
                    </div>
                    <div class="recipe-bloger__socials">
                        <a href="">
                            <svg width="21" height="17" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.6311 1.98944C19.8724 2.32563 19.0574 2.55278 18.2006 2.65546C19.0847 2.12645 19.7461 1.29386 20.0614 0.313036C19.2308 0.806407 18.3217 1.15369 17.3737 1.33978C16.7362 0.659098 15.8918 0.207933 14.9716 0.0563275C14.0514 -0.0952777 13.1069 0.0611591 12.2848 0.50135C11.4626 0.941541 10.8087 1.64086 10.4247 2.49073C10.0407 3.3406 9.94806 4.29347 10.1611 5.20141C8.47805 5.11691 6.83157 4.67945 5.32853 3.91744C3.82549 3.15544 2.49947 2.0859 1.43653 0.77825C1.07308 1.4052 0.864098 2.13209 0.864098 2.90624C0.863692 3.60314 1.03531 4.28938 1.36373 4.90405C1.69214 5.51872 2.16721 6.04283 2.74676 6.42986C2.07463 6.40848 1.41733 6.22686 0.82957 5.90014V5.95466C0.829502 6.9321 1.16761 7.87946 1.78651 8.63599C2.40542 9.39252 3.26701 9.91163 4.22508 10.1052C3.60157 10.274 2.94787 10.2988 2.31335 10.1779C2.58366 11.019 3.1102 11.7544 3.81926 12.2813C4.52832 12.8082 5.38441 13.1002 6.26766 13.1164C4.76829 14.2934 2.91657 14.9319 1.01039 14.9291C0.672725 14.9292 0.33535 14.9095 0 14.87C1.93488 16.1141 4.18723 16.7743 6.48755 16.7718C14.2744 16.7718 18.5313 10.3224 18.5313 4.72893C18.5313 4.5472 18.5268 4.36366 18.5186 4.18194C19.3466 3.58314 20.0613 2.84163 20.6293 1.99217L20.6311 1.98944Z" fill="#C4C9D3"/>
                            </svg>
                        </a>
                        <a href="">
                            <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.548828 10.9643C0.548828 16.3851 4.48588 20.8928 9.63503 21.8069V13.9319H6.90917V10.9034H9.63503V8.48015C9.63503 5.75429 11.3914 4.24053 13.8756 4.24053C14.6624 4.24053 15.5111 4.36138 16.2979 4.48222V7.26896H14.905C13.5721 7.26896 13.2695 7.93498 13.2695 8.78363V10.9034H16.1771L15.6928 13.9319H13.2695V21.8069C18.4187 20.8928 22.3557 16.386 22.3557 10.9643C22.3557 4.93381 17.4492 0 11.4523 0C5.45538 0 0.548828 4.93381 0.548828 10.9643Z" fill="#C4C9D3"/>
                            </svg>
                        </a>
                        <a href="">
                            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.4972 6.99851C8.56916 6.99851 6.99575 8.57195 6.99575 10.5C6.99575 12.4281 8.56916 14.0015 10.4972 14.0015C12.4252 14.0015 13.9986 12.4281 13.9986 10.5C13.9986 8.57195 12.4252 6.99851 10.4972 6.99851ZM20.9988 10.5C20.9988 9.05002 21.012 7.61317 20.9305 6.16582C20.8491 4.48469 20.4656 2.99268 19.2363 1.76335C18.0044 0.53139 16.515 0.150507 14.8339 0.0690774C13.3839 -0.0123526 11.9471 0.000781319 10.4998 0.000781319C9.04985 0.000781319 7.61303 -0.0123526 6.16571 0.0690774C4.4846 0.150507 2.99262 0.534016 1.76331 1.76335C0.53138 2.9953 0.150505 4.48469 0.0690761 6.16582C-0.0123524 7.6158 0.000781304 9.05265 0.000781304 10.5C0.000781304 11.9474 -0.0123524 13.3868 0.0690761 14.8342C0.150505 16.5153 0.534007 18.0073 1.76331 19.2367C2.99525 20.4686 4.4846 20.8495 6.16571 20.9309C7.61566 21.0124 9.05248 20.9992 10.4998 20.9992C11.9498 20.9992 13.3866 21.0124 14.8339 20.9309C16.515 20.8495 18.007 20.466 19.2363 19.2367C20.4682 18.0047 20.8491 16.5153 20.9305 14.8342C21.0146 13.3868 20.9988 11.95 20.9988 10.5ZM10.4972 15.8875C7.51584 15.8875 5.10976 13.4814 5.10976 10.5C5.10976 7.51861 7.51584 5.11248 10.4972 5.11248C13.4785 5.11248 15.8846 7.51861 15.8846 10.5C15.8846 13.4814 13.4785 15.8875 10.4972 15.8875ZM16.1052 6.15006C15.4092 6.15006 14.847 5.58793 14.847 4.89184C14.847 4.19574 15.4092 3.63361 16.1052 3.63361C16.8013 3.63361 17.3634 4.19574 17.3634 4.89184C17.3636 5.05713 17.3312 5.22083 17.2681 5.37358C17.2049 5.52633 17.1123 5.66512 16.9954 5.782C16.8785 5.89888 16.7397 5.99155 16.587 6.05471C16.4342 6.11787 16.2705 6.15027 16.1052 6.15006Z" fill="#C4C9D3"/>
                            </svg>
                        </a>
                        <a href="">
                            <svg width="21" height="14" viewBox="0 0 21 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.8737 2.10685C19.7597 1.70026 19.5377 1.33215 19.2312 1.04166C18.9161 0.742241 18.5299 0.528057 18.109 0.419328C16.5339 0.00415906 10.2233 0.00415915 10.2233 0.00415915C7.59248 -0.0257728 4.96231 0.105875 2.34765 0.39836C1.92677 0.515122 1.54126 0.734091 1.22543 1.03579C0.915102 1.33438 0.690324 1.70258 0.572902 2.10601C0.290832 3.62556 0.153784 5.16848 0.163604 6.71397C0.153539 8.25806 0.290251 9.80048 0.572902 11.3219C0.687807 11.7237 0.911747 12.0902 1.22291 12.3863C1.53408 12.6823 1.92157 12.8962 2.34765 13.0094C3.94374 13.4238 10.2233 13.4238 10.2233 13.4238C12.8574 13.4537 15.491 13.3221 18.109 13.0296C18.5299 12.9208 18.9161 12.7067 19.2312 12.4072C19.5415 12.1112 19.7621 11.743 19.8728 11.3421C20.1623 9.82309 20.303 8.27953 20.293 6.73326C20.3148 5.18044 20.1742 3.62961 19.8737 2.10601V2.10685ZM8.21705 9.58576V3.84301L13.4675 6.71481L8.21705 9.58576Z" fill="#C4C9D3"/>
                            </svg>
                        </a>
                        <a href="">
                            <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 6.64185V10.793C21 11.0132 20.9149 11.2244 20.7634 11.3801C20.612 11.5358 20.4065 11.6232 20.1923 11.6232C18.5051 11.627 16.8422 11.2101 15.3462 10.4082V14.1139C15.3459 15.6143 14.9294 17.0836 14.1454 18.3492C13.3614 19.6148 12.2424 20.6242 10.9199 21.2591C9.59731 21.894 8.12602 22.1279 6.67866 21.9335C5.2313 21.739 3.86792 21.1243 2.74854 20.1613C1.62915 19.1984 0.8002 17.9272 0.358964 16.497C-0.0822712 15.0668 -0.117482 13.5369 0.257465 12.0868C0.632412 10.6367 1.40196 9.3267 2.47579 8.31042C3.54963 7.29414 4.8832 6.61378 6.31999 6.3492C6.43621 6.32793 6.55556 6.33311 6.66963 6.36438C6.78369 6.39564 6.88971 6.45222 6.9802 6.53014C7.0707 6.60807 7.14347 6.70543 7.19341 6.81539C7.24335 6.92534 7.26923 7.04521 7.26923 7.16656V11.4878C7.26923 11.6448 7.22591 11.7986 7.1443 11.9314C7.06268 12.0641 6.94612 12.1703 6.80814 12.2377C6.4815 12.3968 6.20237 12.643 5.99989 12.9508C5.7974 13.2586 5.67898 13.6165 5.65698 13.9874C5.63498 14.3582 5.71021 14.7283 5.87482 15.0591C6.03942 15.3899 6.28737 15.6692 6.59279 15.8679C6.89821 16.0665 7.24991 16.1773 7.61119 16.1887C7.97246 16.2 8.33008 16.1114 8.64671 15.9323C8.96335 15.7531 9.2274 15.4899 9.41132 15.17C9.59523 14.8502 9.69227 14.4855 9.69231 14.1139V0.830232C9.69231 0.61004 9.7774 0.398868 9.92887 0.243169C10.0803 0.0874705 10.2858 0 10.5 0H14.5385C14.7527 0 14.9581 0.0874705 15.1096 0.243169C15.2611 0.398868 15.3462 0.61004 15.3462 0.830232C15.3476 2.15092 15.8586 3.4171 16.7672 4.35097C17.6757 5.28484 18.9075 5.81014 20.1923 5.81162C20.4065 5.81162 20.612 5.89909 20.7634 6.05479C20.9149 6.21049 21 6.42166 21 6.64185Z" fill="#C4C9D3"/>
                            </svg>
                        </a>
                        <a href="">
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_318:4592)">
                                <path d="M14.1047 0.479126C9.73567 0.479126 6.18404 4.03144 6.18404 8.39981C6.18404 12.7538 9.73636 16.2951 14.1047 16.2951C18.4587 16.2951 22 12.7538 22 8.39981C22 4.03075 18.4587 0.479126 14.1047 0.479126ZM0.00341797 21.5737H3.87061V0.479126H0.00341797V21.5737Z" fill="#C4C9D3"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_318:4592">
                                <rect width="22" height="22" fill="white"/>
                                </clipPath>
                                </defs>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class='recipe'>
      <div class='custom-container'>
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
            
        };
    },
    methods: {
    },
}
</script>

<style lang="scss">
    /*@import "src/assets/scss/markup/custom-styles";*/
    /*@import "src/assets/scss/markup/recipe";*/
</style>
