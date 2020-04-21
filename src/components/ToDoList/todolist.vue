<template>
    <div class="todolist ">
        <div class="todolist__nav-bar">
            <div class="fixed-container todolist__box">
                <logo/>
                <div class ="todolist__user">
                    <p class="todolist__nick-name"> Никнейм1234</p>
                    <button class="todolist__button todolist__button_white">Выход</button>
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
                        <button class="todolist__btn"></button>
                    </div>
                    <div class="todolist__items">
                        <p class="todolist__opacity-text todolist__opacity-text_big">У вас пока нет задач.</p>
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
                        <div class="todolist__description-task">Описание<span class="todolist__arrow"></span></div>
                        <button class="todolist__btn todolist__padding"></button>
                    </div>
                    <div class="todolist__sub-items">
                        <p class="todolist__opacity-text">В задаче пока нет подзадач.</p>
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
        return{}
    },
    components: {
        logo
    },
    methods: {

    }
}
</script>
<style lang="scss">
    body{
        margin: 0;padding: 0;
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
            font-weight: 500;
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
        }
        &__items{
            background: #EFEEFF;
            box-shadow: inset 12px 0px 10px rgba(202, 201, 214, 0.5), inset -12px -16px 10px rgba(255, 255, 255, 0.5);
            border-radius: 0px 0px 20px 20px;
            height:439px;
            margin-bottom: 40px;
        }
    }
    .todolist{ //sub-task
        &__sub-task{
            opacity: 0.5;
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
        }
        &__title-sub-task{
            font-family: Roboto;
            font-weight: 500;
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
    }
</style>   