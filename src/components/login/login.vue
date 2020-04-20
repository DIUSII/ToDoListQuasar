<template>
    <div class = "login fixed-container">
        <logo></logo>
        <div class="login__form">
            <h2 class="login__title">Вход</h2>
            <label class="login__label">
                <span class="login__span">Логин:</span>
                <input type="text" class="login__input" :class="{'blueBorder': blueBorderClick}" v-on:click="inputClick">
            </label>
                <label class="login__label">
                <span class="login__span">Пароль:</span>
                <input type="text" class="login__input login__input_margin">
            </label>
            <button class="login__button">Войти</button>
        </div>
    </div>
</template>
<script>
import logo from '../logo/logo.vue';
export default {
    name : "login",
    data(){
        return{
            blackBorderHover: false,
            blueBorderClick: false
        }
    },
    components: {
        logo
    },
    methods: {
        inputHover(){
            this.blackBorderHover = true;
        },
        inputClick(){
            this.blueBorderClick = !this.blueBorderClick;
        }

    }
}
</script>
<style lang="scss">
    @import url("../fonts/fonts.css");
    .fixed-container{
        max-width: 1000px;
        margin: 0 auto;
    }
    .blackBorder{
        border: 1px solid #292E4E;
    }
    .blueBorder{
        border: 1px solid #615AFE !important;
    }
    .login{
        margin: 121px auto;
        display:flex;
        justify-content: space-between;
        align-items: center;
        &__form{
            max-width: 400px;
            padding: 0 40px;
            width: 100%;
            background: #FFFFFF;
            box-shadow: 4px 5px 12px rgba(0, 0, 0, 0.1);
            border-radius: 12px;
        }
        &__title{
            font-family: Comfortaa;
            font-size: 40px;
            line-height: 45px;
            color: #615AFE;
            margin: 35px 0;
        }
        &__span{
            font-family: Comfortaa;
            font-weight: bold;
            font-size: 18px;
            color: #292E4E;
            margin-bottom: 6px;
        }
        &__input{
            border: 1px solid #B5B7BE;
            border-radius: 4px;
            max-width: 400px;
            padding: 15px 0 15px 16px;
            display: block;
            width: 100%;
            margin-bottom: 16px;
            font-family: Roboto;
            font-size: 14px;
            color: #292E4E;
            outline: none;
            // transition: 1s;
            // outline-color: #615AFE;
            // &:hover{
            //     border: 1px solid #292E4E;
            // }
            &_margin{
                margin-bottom: 55px;
            }
        }
        &__button{
            border: none;
            outline: none;
            background: #F88081;
            max-width: 400px;
            padding: 15px 0;
            width: 100%;
            font-family: Roboto;
            font-weight: 500;
            font-size: 16px;
            color: #FFFFFF;
            margin-bottom: 77px;
        }
    }
</style>