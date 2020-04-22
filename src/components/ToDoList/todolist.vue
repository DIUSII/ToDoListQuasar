<template>
    <div class="todolist ">
        <div class="todolist__nav-bar">
            <div class="fixed-container todolist__box">
                <logo/>
                <div class ="todolist__user">
                    <p class="todolist__nick-name"> Никнейм1234</p>
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
                <div class="todolist__task">
                    <div class="todolist__main-panel">
                        <div class="todolist__filter">
                            <span class="todolist__span">Задачи</span>
                            <img src="./images/sorting.png" alt="sorting" class="todolist__sorting">
                            <img src='./images/filter.png' alt="filter">
                        </div>
                        <button class="todolist__btn"
                        :class="{backgroundLightRed: checkHoverButtonEllipse1, backgroundDarkRed: checkClickButtonEllipse1}"
                        @mouseover="hoveButtonEllipse1"
                        @mouseleave="hoveButtonEllipse1"
                        @mousedown="clickButtonEllipse1"
                        @mouseup="clickButtonEllipse1"
                        ></button>
                    </div>
                    <div class="todolist__items">
                        <div class="todolist__item-task">
                            <div class="todolist__checkbox-name">
                                <div class="todolist__urgency"></div>
                                <div class="todolist__ellipse-mini"></div>
                                <div class="todolist__text-task">
                                    Задача №1
                                </div>
                            </div>
                            <div class="todolist__time-progress">
                                <div class="todolist__time">
                                    <div class="todolist__old-time">30.05.20 <span class="todolist__hour">12:34</span></div>
                                    <div class="todolist__new-time">05.06.20 <span class="todolist__hour">15:12</span></div>
                                </div>
                                <div class="todolist__progress">
                                    <div 
                                        class="todolist__cross"
                                        :class="{blueLightBackgroundCross: checkHoverCross1, blueDarkBackgroundCross: checkClickCross1}"
                                        @mouseleave="hoverCross1"
                                        @mouseover="hoverCross1"
                                        @mousedown="clickCross1"
                                        @mouseup="clickCross1"

                                    >
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- <p class="todolist__opacity-text todolist__opacity-text_big">У вас пока нет задач.</p> -->
                    </div>
                </div>
                <div class="todolist__sub-task">
                    <div class="todolist__name-task">
                        <div class="todolist__text-ellipse">
                            <div class="todolist__ellipse"></div>
                            <div class="todolist__text">
                                Тут будет отображаться<br> выбранная задача.
                            </div>
                        </div>
                        <img src="./images/pen.png" alt="pen" class="todolist__pen">
                    </div>
                    <div class="todolist__description">
                        <div class="todolist__title-sub-task">Подзадачи</div>
                        <div class="todolist__description-task">
                            <span class="todolist__description-text">Описание</span>
                            <span class="todolist__arrow"></span>
                        </div>
                        <button 
                        class="todolist__btn todolist__padding"
                        :class="{backgroundLightRed: checkHoverButtonEllipse2, backgroundDarkRed: checkClickButtonEllipse2}"
                        @mouseover="hoveButtonEllipse2"
                        @mouseleave="hoveButtonEllipse2"
                        @mousedown="clickButtonEllipse2"
                        @mouseup="clickButtonEllipse2"
                        ></button>
                    </div>
                    <div class="todolist__sub-items">
                        <div class="todolist__sub-item">
                            <div class="todolist__checkbox-sub-task">
                                <div class="todolist__ellipse-sub"></div>
                                <div class="todolist__title-sub">
                                    Подзадача 1
                                </div>
                            </div>
                            <div class="todolist__time-cross">
                                <div class="todolist__time">
                                    <div class="todolist__old-time-sub">30.05.20 12:34</div>
                                    <div class="todolist__new-time-sub">05.06.20 15:12</div>
                                </div>
                                <div class="todolist__cross-sub"
                                :class="{blueLightBackgroundCross: checkHoverCross2, blueDarkBackgroundCross: checkClickCross2}"
                                        @mouseleave="hoverCross2"
                                        @mouseover="hoverCross2"
                                        @mousedown="clickCross2"
                                        @mouseup="clickCross2"
                                >

                                </div>
                            </div>
                        </div>
                        <!-- <p class="todolist__opacity-text">В задаче пока нет подзадач.</p> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import logo from '../logo/logo'
export default{
    name: "todolist",
    data() {
        return{
            checkHoverButton: false,
            checkClickButton: false,
            checkHoverButtonEllipse1: false,
            checkClickButtonEllipse1: false,
            checkHoverButtonEllipse2: false,
            checkClickButtonEllipse2: false,
            checkHoverCross1: false,
            checkClickCross1: false,
            checkHoverCross2: false,
            checkClickCross2: false,

        }
    },
    components: {
        logo
    },
    methods: {
        hoverButton(){
            this.checkHoverButton = !this.checkHoverButton;
        },
        clickButton(){
            this.checkClickButton = !this.checkClickButton;
        },
        hoveButtonEllipse1(){
             this.checkHoverButtonEllipse1 = !this.checkHoverButtonEllipse1;
        },
        clickButtonEllipse1(){
            this.checkClickButtonEllipse1 = !this.checkClickButtonEllipse1;
        },
        hoveButtonEllipse2(){
             this.checkHoverButtonEllipse2 = !this.checkHoverButtonEllipse2;
        },
        clickButtonEllipse2(){
            this.checkClickButtonEllipse2 = !this.checkClickButtonEllipse2;
        },
        hoverCross1(){
            this.checkHoverCross1 = !this.checkHoverCross1;
        },
        clickCross1(){
            this.checkClickCross1 = !this.checkClickCross1;
        },
        hoverCross2(){
            this.checkHoverCross2 = !this.checkHoverCross2;
        },
        clickCross2(){
            this.checkClickCross2 = !this.checkClickCross2;
        },

    }
}
</script>
<style lang="scss">
    body{
        margin: 0;padding: 0;
    }
    .blueLightBackgroundCross{
        background: url('./images/white-cross.png') no-repeat 60% 45% !important;
        background-color: #615AFE !important;
    }
    .blueDarkBackgroundCross{
        background: url('./images/white-cross.png') no-repeat 60% 45% !important;
        background-color: #635FB5 !important;
    }
    .blueBorderTo{
        border: 2px solid #615AFE !important;
    }
    .backgroundDarkBlue{
        background-color:#E1DFFF !important;
    }
    .backgroundLightRed{
        background: url('./images/white-plus.png') no-repeat center center !important;
        background-color:#F88081 !important;
    }
    .backgroundDarkRed{
        background: url('./images/white-plus.png') no-repeat center center !important;
        background-color:#D47070 !important;
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
    .todolist{//task
        &__menu{
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin: 21px 0 40px 0;
        }
        &__task{
            max-width:575px;
            width: 100%;
        }
        &__main-panel{
            background: #615AFE;
            box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
            border-radius: 20px 20px 0px 0px;
            padding: 28px 23px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        &__filter{
            display: flex;
            justify-content: space-between;
            align-items: center;
            // width: ;
        }
        &__span{
            font-family: Roboto;
            font-weight: 400;
            font-size: 24px;
            color: #FFFFFF;
            margin-right: 17px;
        }
        &__sorting{
            margin-right: 7px;
        }
        &__btn{
            background: url('./images/red-plus.png') no-repeat center center;
            background-size:50%;
            width: 36px;
            height: 36px;
            border: none;
            background-color: #FFFFFF;
            border-radius: 50%;
            outline: none;
        }
        &__items{
            background: #EFEEFF;
            box-shadow: inset 12px 0px 10px rgba(202, 201, 214, 0.5), inset -12px -16px 10px rgba(255, 255, 255, 0.5);
            border-radius: 0px 0px 20px 20px;
            height:439px;
            margin-bottom: 40px;
            padding-top: 26px;
        }
    }
    .todolist{//item-task-right
        &__item-task{
            max-width: 495px;
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: #FFF;
            box-shadow: 3px 4px 8px rgba(0, 0, 0, 0.1);
            border-radius: 20px;
            margin: 0 auto 20px;
        }
        &__checkbox-name{
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        &__urgency{
            background: #F46262;
            border-radius: 0px 5px 5px 0px;
            height: 24px;
            width: 4px;
            margin-right: 20px;

        }
        &__ellipse-mini{
            border: 1px solid #615AFE;
            box-sizing: border-box;
            border-radius: 200px;
            width: 26px;
            height: 26px;
        }
        &__text-task{
            font-family: Roboto;
            font-size: 16px;
            color: #615AFE;
            margin-left: 13px;
        }
    }
    .todolist{//item-task-left
        &__time-progress{
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        &__progress{
            background-color: #50CE92;
            border-radius: 0px 20px 20px 0px;
            width: 26px;
            height: 82px;
            margin-left: 12px;

        }
        &__old-time{
            background: url('./images/old-time.png') no-repeat 0 center;
            background-size: contain;
            height: 17px;
            width: 100px;
            text-align:right;
            margin-bottom: 7px;
            font-family: Roboto;
            font-weight: 300;
            font-size: 12px;
            color: rgb(139, 139, 139);
            display: flex;
            align-items: flex-end;
            justify-content: flex-end;
        }
        &__new-time{
            background: url('./images/new-time.png') no-repeat 0 center;
            background-size: contain;
            height: 17px;
            width: 100px;
            text-align:right;
            font-family: Roboto;
            font-weight: 300;
            font-size: 12px;
            color: rgb(139, 139, 139);
            display: flex;
            align-items: flex-end;
            justify-content: flex-end;
        }
        &__hour{
            font-weight: 500;
            color: #292E4E;
            vertical-align: middle;
            margin-left: 2px;
        }
        &__cross{
            background: url('./images/cross.png') no-repeat 60% 45%;
            width: 26px;
            height: 26px;
            margin: 0 auto;
            background-color: #F1F0FF;
            border-radius: 0px 19px 0px 26px;

        }
    }

    .todolist{ //sub-task
        &__sub-task{
            // opacity: 0.5;
            max-width:475px;
            width: 100%;
        }
        &__name-task{
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: #FFFFFF;
            box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
            border-radius: 20px 20px 0px 0px;
            padding: 29px 48px 29px 40px;
        }
        &__text-ellipse{
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        &__ellipse{
            background-color: transparent;
            border: 2px solid #615AFE;
            border-radius: 50%;
            width: 32px;
            height: 32px;
            margin-right: 14px;
        }
        &__text{
            font-family: Roboto;
            font-weight: 500;
            font-size: 18px;
            color: #615AFE;
        }
        &__description{
            background-color: #615AFE;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0px 40px;

        }
        &__padding{
            margin: 17px 0;
        }
        &__sub-items{
            background: #EFEEFF;
            box-shadow: inset 12px 0px 10px rgba(202, 201, 214, 0.5), inset -12px -16px 10px rgba(255, 255, 255, 0.5);
            border-radius: 0px 0px 20px 20px;
            height:368px;
            margin-bottom: 40px;
            padding-top: 17px;
        }
        &__title-sub-task{
            font-family: Roboto;
            font-weight: 400;
            font-size: 22px;
            color: #FFFFFF;
        }
        &__description-task{
            background: #FFFFFF;
            border: 1px solid #DBDBDB;
            box-sizing: border-box;
            border-radius: 0px 0px 18px 18px;
            max-width: 160px;
            width: 160px;
            text-align: center;
            font-family: Roboto;
            font-weight: 500;
            font-size: 14px;
            color: #292E4E;
            padding: 7px 0;
            align-self: flex-start;
            margin-left: -70px;

        }
        &__opacity-text{
            font-family: Roboto;
            font-weight: 500;
            font-size: 30px;
            color: #615AFE;
            opacity: 0.3;
            margin: 0;
            text-align: center;
            padding-top: 30%;
            &_big{
                font-size: 40px;
            }
        }
        &__description-text{
            margin-right: 20px;
        }
        &__arrow{
            background: url('./images/arrow.png') no-repeat 100% center;
            width: 12px;
            height: 10px;
            display: inline-block;
            margin-right: -30px;
        }
    }
    .todolist{//sub-task-item
        &__sub-item{
            max-width: 401px;
            background: #E3E7FF;
            border: 1px solid #615AFE;
            box-sizing: border-box;
            border-radius: 20px;
            margin: 0px auto 14px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        &__checkbox-sub-task{
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-left: 30px;
        }
        &__title-sub{
            font-family: Roboto;
            font-size: 12px;
            color: #615AFE;
        }
        &__ellipse-sub{
            background: #FAFAFA;
            border: 1px solid #615AFE;
            box-sizing: border-box;
            border-radius: 200px;
            width:18px;
            height: 18px;
            margin-right: 14px;
        }
        &__time-cross{
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 58px;
        }
        &__cross-sub{
            background: url('./images/cross.png') no-repeat 60% 45%;
            width: 26px;
            height: 26px;
            background-color: #FFF;
            align-self: flex-start;
            border-radius: 0px 19px 0px 26px;
            margin-left: 9px;
        }
        &__old-time-sub{
            background: url('./images/old-time.png') no-repeat 0 center;
            background-size: contain;
            height: 13px;
            width: 85px;
            text-align:right;
            margin-bottom: 7px;
            font-family: Roboto;
            font-size: 10px;
            color: #292E4E;
            display: flex;
            align-items: flex-end;
            justify-content: flex-end;
        }
        &__new-time-sub{
            background: url('./images/new-time.png') no-repeat 0 center;
            background-size: contain;
            height: 13px;
            width: 85px;
            text-align:right;
            font-family: Roboto;
            font-size: 10px;
            color: #292E4E;
            display: flex;
            align-items: flex-end;
            justify-content: flex-end;
        }
    }
</style>   