<template>
    <div class = "login fixed-container">
        <logo></logo>
        <div class="login__form">
            <h2 class="login__title">Вход</h2>
            <label class="login__label">
                <span class="login__span">Логин:</span>
                <input 
                    type="text"
                    class="login__input" 
                    :class="{
                        blueBorder: inputFocus, 
                        blackBorder: inputHover, 
                        redBorder: inputClick || buttonError,
                    }" 
                    @focus="inputFocus = true" 
                    @blur="inputFocus = false" 
                    @mouseover="hoverLogin" 
                    @mouseleave="hoverLogin" 
                    v-model="valueInput"
                >
            </label>
                <label class="login__label">
                <span class="login__span">Пароль:</span>
                <input 
                    type="password" 
                    class="login__input login__input_margin" 
                    :class="{
                        blueBorder: inputFocusPass, 
                        blackBorder: inputHoverPass, 
                        redBorder: inputClickPass || buttonError,
                    }" 
                    @focus="inputFocusPass = true" 
                    @blur="inputFocusPass = false" 
                    @mouseover="hoverPass" 
                    @mouseleave="hoverPass" 
                    v-model="valueInputPass"
                >
            </label>
            <div class="login__error" v-if="inputClick || inputClickPass">
                Поля "Логин" и "Пароль" не могут быть пустыми.<br>Введите логин и/или пароль.
            </div>  
            <div class="login__error" v-if="buttonError">
                Неверно введен логин и/или пароль
            </div>  
            <button 
                class="login__button" 
                :class="{
                    backgroundLightColor: hoverbullion,
                    backgroundDarkColor:buttonBullion, 
                    marginTopNone: inputClick || inputClickPass || buttonError,
                }"
                @click="buttonClick"
                @mouseover="hoverButton"  
                @mouseleave="hoverButton" 
                @mouseup="buttonFocus" 
                @mousedown="buttonFocus"
            >
                Войти
            </button>
        </div>
    </div>
</template>
<script>
import logo from '../logo/logo.vue';
import user from './user.json'
import router from '../../router/router'
let people =  JSON.parse(JSON.stringify(user));
export default {
    name : "login",
    data(){
        return{
            user,
            inputFocus: false,
            inputFocusPass: false,
            inputHover:false,
            inputHoverPass: false,
            inputClick: false,
            inputClickPass: false,
            valueInput: "",
            valueInputPass: "",
            buttonError: false,
            hoverbullion: false,
            buttonBullion: false,
        }
    },
    components: {
        logo,
    },
    methods: {
        hoverLogin(){
            this.inputHover = !this.inputHover;
        },
        hoverPass(){
            this.inputHoverPass = !this.inputHoverPass;
        },
        hoverButton(){
            this.hoverbullion = !this.hoverbullion;
        },
        buttonFocus(){
            this.buttonBullion = !this.buttonBullion;
        },
        buttonClick(){
            if(this.valueInput === ""){
                this.inputClick = true;
                
            }
            else{
                this.inputClick = false;
            }
            if(this.valueInputPass === ""){
                this.inputClickPass = true;
            }
            else{
                this.inputClickPass = false;
            }
            for(let i = 0; i < people.users.length; i++){
                if(people.users[i].login === this.valueInput && people.users[i].password === this.valueInputPass){
                    router.push({path: "/todolist"});
                }
                else if(this.inputClickPass == false && this.inputClick == false){
                    this.buttonError = true;
                }
                else{
                    this.buttonError = false;
                }
            }
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
        border: 1px solid #292E4E !important;
    }
    .blueBorder{
        border: 1px solid #615AFE !important;
    }
    .redBorder{
        border: 1px solid #DB2322 !important;
    }
    .backgroundLightColor{
        background-color: #F06061 !important;
    }
    .backgroundDarkColor{
        background-color: #D47070 !important;
    }
    .marginTopNone{
        margin-top: 0 !important;
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
            max-width: 382px;
            padding: 15px 0 15px 16px;
            display: block;
            width: 100%;
            margin-bottom: 16px;
            font-family: Roboto;
            font-size: 14px;
            color: rgb(86, 89, 114);
            outline: none;
            transition: 1s;
            // &_margin{
            //     // margin-bottom: 55px;
            // }
        }
        &__error{
            color:#DB2322;
            font-family: Roboto;
            text-align: center;
            margin-top: 20px;
            margin-bottom: 39px;

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
            margin-top: 55px;
            margin-bottom: 77px;
        }
    }
</style>