<template>
  <div>

    <Header></Header>

    <section class='profile'>
        <div class='custom-container'>
            <div class='profile__inner'>
                <BlogerProfileNav></BlogerProfileNav>
                <div class="profile-content">
                    <div class="profile-edit">
                        <p class="profile-edit__title">Редактировать профиль</p>
                        <form class="profile-edit__form">
                            <div class="profile-edit__form-group">
                                <label for="">Ваш ник</label>
                                <input type="text">
                            </div>
                            <div class="profile-edit__form-group">
                                <label for="">Ваше имя</label>
                                <input type="text">
                            </div>
                            <div class="profile-edit__form-group">
                                <label for="">Пароль</label>
                                <input type="password">
                                <a href="" class="profile-edit__password-btn">изменить</a>
                            </div>

                            <div class="profile-edit__form-group">
                                <label for="">О себе</label>
                                <textarea></textarea>
                            </div>

                            <div class="profile-edit__form-group">
                                <label for="">Телефон</label>
                                <input type="tel">
                                <div class="profile-edit__confirmed">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 22C6.47967 21.994 2.00606 17.5204 2 12V11.8C2.10993 6.30455 6.63459 1.92797 12.1307 2.0009C17.6268 2.07382 22.0337 6.5689 21.9978 12.0654C21.9619 17.5618 17.4966 21.9989 12 22ZM7.41 11.59L6 13L10 17L18 9.00002L16.59 7.58002L10 14.17L7.41 11.59Z" fill="#51B1A6"/>
                                    </svg>
                                    <span>подтвержден</span>
                                </div>
                            </div>
                            <div class="profile-edit__form-group">
                                <label for="">Почта</label>
                                <input type="email">
                                <div class="profile-edit__confirmed">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 22C6.47967 21.994 2.00606 17.5204 2 12V11.8C2.10993 6.30455 6.63459 1.92797 12.1307 2.0009C17.6268 2.07382 22.0337 6.5689 21.9978 12.0654C21.9619 17.5618 17.4966 21.9989 12 22ZM7.41 11.59L6 13L10 17L18 9.00002L16.59 7.58002L10 14.17L7.41 11.59Z" fill="#51B1A6"/>
                                    </svg>
                                    <span>подтвержден</span>
                                </div>
                            </div>

                            <div class="profile-edit__form-socials">
                                <div class="profile-edit__form-group">
                                    <label for="">Twitter</label>
                                    <input type="text">
                                </div>
                                <div class="profile-edit__form-group">
                                    <label for="">Facebook</label>
                                    <input type="text">
                                </div>
                                <div class="profile-edit__form-group">
                                    <label for="">Instagram</label>
                                    <input type="text">
                                </div>
                                <div class="profile-edit__form-group">
                                    <label for="">Youtube</label>
                                    <input type="text">
                                </div>
                                <div class="profile-edit__form-group">
                                    <label for="">Tik-Tok</label>
                                    <input type="text">
                                </div>
                                <div class="profile-edit__form-group">
                                    <label for="">Patreon</label>
                                    <input type="text">
                                </div>
                            </div>

                            <button class="profile-edit__form-btn">сохранить</button>

                        </form>
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



export default {
    components: {
        Header,
        BlogerProfileNav
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
