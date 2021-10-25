<template>
  <div>

    <Header></Header>

    <section class='profile'>
        <div class='custom-container'>
            <div class='profile__inner'>
                <BlogerProfileNav></BlogerProfileNav>
                <div class="profile-content">
                    <div class="draft">
                        <p class="profile__title profile-create__title mb-25">Черновик</p>
                        <div class="draft__groups">
                            <div class="draft__group">
                                <div class="draft__group-title">За последнюю неделю</div>
                                <div class="draft__group-wrap">
                                    <div class="recipe__wpap">
                                        <div class="recipe__item" v-for="(blogerRecipe, idx) in blogerRecipes">
                                            <DraftRecipeCard 
                                                :blogerRecipe='blogerRecipe'
                                                :index='idx'
                                                >
                                            </DraftRecipeCard>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="draft__group">
                                <div class="draft__group-title">Ранее</div>
                                <div class="draft__group-wrap">
                                    <div class="recipe__wpap">
                                        <div class="recipe__item" v-for="(blogerRecipe, idx) in blogerRecipes">
                                            <DraftRecipeCard 
                                                :blogerRecipe='blogerRecipe'
                                                :index='idx'
                                                >
                                            </DraftRecipeCard>
                                        </div>
                                    </div>
                                </div>
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
            blogerRecipes: [
                {
                    avatarUrl: 'avatar1.jpg',
                    blogerName: 'yourdoctor',
                    blogerProfession: 'терапевт',
                    blogerTags: [
                        'легко готовить','диетическое','без глютена'
                    ],
                    foodUrl: 'recipe1.jpg',
                    foodType: 'второе блюдо',
                    foodName: 'Кальмары, фаршированные кус-кусом',
                    foodDesc: 'Это ароматное мясо с кускусом и овощами, настоящее объедение. Любители вкусно покушать будут в восторге от такого блюда',
                    foodCookingDuration: '1 час 40 мин',
                    foodDifficulty: 'сложно',
                    foodKkal: 55,
                },
                {
                    avatarUrl: 'avatar2.jpg',
                    blogerName: 'mydoctor',
                    blogerProfession: 'терапевт',
                    blogerTags: [
                        'легко готовить','диетическое','без глютена'
                    ],
                    foodUrl: 'recipe2.jpg',
                    foodType: 'второе блюдо',
                    foodName: 'Кальмары, фаршированные кус-кусом',
                    foodDesc: 'Это ароматное мясо с кускусом и овощами, настоящее объедение. Любители вкусно покушать будут в восторге от такого блюда',
                    foodCookingDuration: '1 час 40 мин',
                    foodDifficulty: 'сложно',
                    foodKkal: 55,
                },
                {
                    avatarUrl: 'avatar3.jpg',
                    blogerName: 'hisdoctor',
                    blogerProfession: 'терапевт',
                    blogerTags: [
                        'легко готовить','диетическое','без глютена'
                    ],
                    foodUrl: 'recipe3.jpg',
                    foodType: 'второе блюдо',
                    foodName: 'Кальмары, фаршированные кус-кусом',
                    foodDesc: 'Это ароматное мясо с кускусом и овощами, настоящее объедение. Любители вкусно покушать будут в восторге от такого блюда',
                    foodCookingDuration: '1 час 40 мин',
                    foodDifficulty: 'сложно',
                    foodKkal: 55,
                }
            ],
        };
    },
    methods: {
      
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
