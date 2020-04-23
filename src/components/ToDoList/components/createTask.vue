<template>
    <div class="createTask">
        <div 
            class="todolist__item-task" 
            :class="{
                darkWhiteBackgroundTask: checkBackgraundTask
            }"
            v-for="(item, index) in items" 
            :key="item.id" 
            @mouseleave="hoverItemTask"
            @mouseenter="hoverItemTask"
            @mousedown="clickItemTask"
            @mouseup="clickItemTask"
        >
            <div class="todolist__checkbox-name">
                <div class="todolist__urgency"></div>
                <div class="todolist__ellipse-mini"></div>
                <div class="todolist__text-task" v-if="editBullion">
                    {{item.title}}
                </div>
                <input 
                    type="text" 
                    v-model="item.title" 
                    v-else 
                    v-focus 
                    class="todolist__text-task todolist__editInput" 
                    :class="{darkWhiteBackgroundTask: checkBackgraundTask}"
                    @blur="doneEdit()"
                    @keyup.enter="doneEdit()"
                    @keyup.esc="cancelEdit()"
                > 
                <img src="../images/pen.png" alt="pen" v-if="checkPen" width="24" height="24" style="margin-left: 10px" @click = "editText">
            </div>
            <div class="todolist__time-progress">
                <div class="todolist__time">
                    <div class="todolist__old-time">30.05.20 <span class="todolist__hour">12:34</span></div>
                    <div class="todolist__new-time">05.06.20 <span class="todolist__hour">15:12</span></div>
                </div>
                <div class="todolist__progress">
                    <div 
                        class="todolist__cross"
                        :class="{
                            blueLightBackgroundCross: checkHoverCross, 
                            blueDarkBackgroundCross: checkClickCross
                        }"
                        @mouseout="hoverCross"
                        @mouseover="hoverCross"
                        @mousedown="clickCross"
                        @mouseup="clickCross"
                        @click="deleteItem(index)"
                    >
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "createTask",
    data(){
        return {
            checkBackgraundTask: false,
            checkPen: false,
            checkHoverCross: false,
            checkClickCross: false,
            editBullion: true,
            items: [
                {   
                    title: "задача "
                }
            ]
        }
    },
    directives:{
        focus:{
            inserted: function(el){
                el.focus()
            }
        }
    },
    methods:{
        hoverItemTask(){
            this.checkPen = !this.checkPen;
        },
        clickItemTask(){
            this.checkBackgraundTask = !this.checkBackgraundTask;
        },
        hoverCross(){
            this.checkHoverCross = !this.checkHoverCross;
        },
        clickCross(){
            this.checkClickCross = !this.checkClickCross;
        },
        deleteItem(index){
            this.items.splice(index, 1);
        },
        editText(){
            this.editBullion = !this.editBullion;
        },
        doneEdit(){
            this.checkPen = false;
            this.editBullion = true;
        },
        cancelEdit(){
            this.checkPen = false;
            this.editBullion = true;
        }
    }
}
</script>
<style lang="scss">
    .darkWhiteBackgroundTask{
        background-color: #F5F5F5 !important;
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
        &__editInput{
            border: none;
            outline: none;
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
            background: url('../images/old-time.png') no-repeat 0 center;
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
            background: url('../images/new-time.png') no-repeat 0 center;
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
            background: url('../images/cross.png') no-repeat 60% 45%;
            width: 26px;
            height: 26px;
            margin: 0 auto;
            background-color: #F1F0FF;
            border-radius: 0px 19px 0px 26px;

        }
    }
</style>