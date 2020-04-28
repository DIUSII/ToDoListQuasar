
<template>
    <div class="todolist ">
        <div class="todolist__nav-bar">
            <div class="fixed-container todolist__box">
                <logo/>
                <div class ="todolist__user">
                    <p class="todolist__nick-name">Никнейм1234</p>
                    <button 
                    class="todolist__button todolist__button_white"
                    :class="{blueBorderTo: checkHoverButton, backgroundDarkBlue: checkClickButton}"
                    @mouseover="hoverButton"
                    @mouseleave="hoverButton"
                    @mousedown="clickButton"
                    @mouseup="clickButton"
                    @click="clickLogOut"
                    >Выход</button>
                    <log-out 
                        v-show="checkLogOut" 
                        class="todolist__log-out" 
                        @cancelLogOut="cancelLogOut($event)"
                        @YesLogOut="YesLogOut($event)"
                    ></log-out>
                </div>
            </div>
        </div>
        <div class="fixed-container">
            <div class="todolist__menu">
                <task 
                    @titleArea="titleArea($event)" 
                    @indexArrayTask="indexInSubTask($event)" 
                    :sendArraySubTask="arraySubTask" 
                    @nullArraySubTask="nullSubTask($event)"
                />
                <sub-task 
                    :titleTextSub="titleSubTask" 
                    :indexTaskInSubTask="indexTask"
                    :nullArraySubTaskInTask="nullArray"
                    @pushInItemTask="receiveArraySubTask($event)"
                    @modalWindow="modalWindow($event)"
                    :pushTitleSubTask="titleInputSub"
                ></sub-task>
            </div>
        </div>
        <modal-sub-task 
            class="todolist__check-modal-sub-task" 
            v-show="checkSubTaskWindow" 
            @inputTitleSubTask="pushInputSubTask($event)" 
            @cancelMobelSubTask="cancelMobelSubTask($event)"
        ></modal-sub-task>
        <div 
            class="todolist__shadow"    
            v-show="checkSubTaskWindow" 
            @click="checkSubTaskWindow=false"
        ></div>
    </div>
</template>

<script>

import logo from '../logo/logo'
import task from './components/leftСolumn'
import SubTask from './components/rightСolumn'
import logOut from './components/model/logOutWithUser'
import roter from '../../router/router'
import modalSubTask from './components/model/createOrEditModalSubTask'
export default{
    name: "todolist",
    data() {
        return{
            checkHoverButton: false,
            checkClickButton: false,
            titleSubTask: "",
            indexTask: "",
            arraySubTask: "",
            nullArray: "",
            checkLogOut: false,
            checkSubTaskWindow: false,
            titleInputSub: "",
        }
    },
    components: {
        logo,
        task,
        'sub-task': SubTask,
        'log-out': logOut,
        'modal-sub-task': modalSubTask,
    },
    directives:{
        focus:{
            inserted: function(el){
                el.focus()
            }
        }
    },
    methods: {
        hoverButton(){
            this.checkHoverButton = !this.checkHoverButton;
        },
        clickButton(){
            this.checkClickButton = !this.checkClickButton;
            console.log(this.itemsTask);
        },
        titleArea(x){
            this.titleSubTask = x;
        },
        indexInSubTask(x){
            this.indexTask = x;
        },
        receiveArraySubTask(x){
            this.arraySubTask = x;

        },
        nullSubTask(x){
            this.nullArray = x;
        },
        clickLogOut(){
            this.checkLogOut = true;
        },
        cancelLogOut(){
            this.checkLogOut = false;
        },
        YesLogOut(x){
            if(x == true){
                roter.push({ path: './login'});
            }
            this.checkLogOut = false;
        },
        modalWindow(x){
            this.checkSubTaskWindow = x;
        },
        pushInputSubTask(x){
            this.titleInputSub = x;
        },
        cancelMobelSubTask(x){
            this.checkSubTaskWindow = x;
        }

    }
}

</script>
<style lang="scss">
    body{
        margin: 0;padding: 0;
    }
    .blueBorderTo{
        border: 2px solid #615AFE !important;
    }
    .backgroundDarkBlue{
        background-color:#E1DFFF !important;
    }
    .todolist{
        position: relative;
        background-color: #F0EFFF;
        .fixed-container{
            max-width: 1170px;
            margin: 0 auto ;
        }
        .log{
            &__img{
                max-width: 50px;
                max-height: 50px;
            }
            &__title{
                font-size: 40px;
            }
        }
        &__nav-bar{
            padding: 18px 0;
            background: #FFFFFF;
            box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
        }
        &__box{
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        &__user{
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        &__nick-name{
            font-family: Roboto;
            font-size: 20px;
            color: #474A53;
        }
        &__button{
            font-family: Roboto;
            font-size: 12px;
            line-height: 14px;
            color: #6A63FF;
            background: #FFFFFF;
            border: 1px solid #6A63FF;
            box-sizing: border-box;
            padding: 15px 34px;
            margin-left: 20px;
            position: relative;
        }
        &__log-out{
            z-index: 1000;
            position: absolute;
            top: 0;
        }
        &__check-modal-sub-task{
            position: absolute;
            z-index: 1000;
            top: 35%;
            margin: auto;
            left: 0;
            right: 0;

        }
        &__shadow{
            position: absolute;
            z-index: 15px;
            background: #323232;
            opacity: 0.5;
            width: 100%;
            height: 100%;
            top: 0;
        }
    }
    

    
    
</style>   