
<template>
    <div class="todolist ">
        <div class="todolist__nav-bar">
            <div class="fixed-container todolist__box">
                <logo/>
                <div class ="todolist__user">
                    <p class="todolist__nick-name"> Никнейм1234{{titleSubTask}}</p>
                    <button 
                    class="todolist__button todolist__button_white"
                    :class="{blueBorderTo: checkHoverButton, backgroundDarkBlue: checkClickButton}"
                    @mouseover="hoverButton"
                    @mouseleave="hoverButton"
                    @mousedown="clickButton"
                    @mouseup="clickButton"
                    
                    >Выход</button>
                </div>
            </div>
        </div>
        <div class="fixed-container">
            <div class="todolist__menu">
                <task @titleArea="titleArea($event)" />
                <sub-task :titleTextSub="titleSubTask"></sub-task>
            </div>
        </div>
    </div>
</template>

<script>

import logo from '../logo/logo'
import task from './components/leftСolumn'
import SubTask from './components/rightСolumn'
export default{
    name: "todolist",
    data() {
        return{
            checkHoverButton: false,
            checkClickButton: false,
            titleSubTask: "",
            itemsTask: [
                {
                    id: 1,
                    itemSub: [
                        {
                            id: 1,
                        }
                    ]
                }
            ]
        }
    },
    components: {
        logo,
        task,
        'sub-task': SubTask
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
        },
        titleArea(x){
            this.titleSubTask = x;
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
        }
    }
    

    
    
</style>   