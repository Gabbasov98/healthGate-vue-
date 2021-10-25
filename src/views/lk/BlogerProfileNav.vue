<template>
    <div class="profile-sidebar">
        <router-link to="/profile/edit" class="profile-sidebar__link">
            <span>
                Редактировать профиль
            </span>
            <img src="../../assets/images/markup-img/edit-green.svg" alt="">
        </router-link>
        <router-link to="/create" class="profile-sidebar__link">
            <span>Создать рецепт</span>
            <img src="../../assets/images/markup-img/add-green.svg" alt="">
        </router-link>
        <router-link to="/publish" class="profile-sidebar__link">
            <span>Создать пост</span>
            <img src="../../assets/images/markup-img/post-green.svg" alt="">
        </router-link>
        <router-link to="/referal" class="profile-sidebar__link">
            <span>Рефералы</span>
            <img src="../../assets/images/markup-img/referal-green.svg" alt="">
        </router-link>
        <a href="" class="profile-sidebar__link">
            <span>Статистика</span>
            <img src="../../assets/images/markup-img/stat-green.svg" alt="">
        </a>
        <a href="" class="profile-sidebar__link">
            <span>Выйти</span>
            <img src="../../assets/images/markup-img/logout-green.svg" alt="">
        </a>
    </div>
</template>

<script>


export default {
    components: {
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
    
</style>
