<template>
    <div class="createTask">
        <div 
            class="todolist__item-task" 
            :class="{
                darkWhiteBackgroundTask: checkBackgraundTask
            }"
            v-for="item in items" 
            :key="item.id" 
            @mouseleave="hoverItemTask"
            @mouseenter="hoverItemTask"
            @mousedown="clickItemTask"
            @mouseup="clickItemTask"   
            @click="testTest"
        >
            <div class="todolist__checkbox-name">
                <div class="todolist__urgency"></div>
                <div class="todolist__ellipse-mini"></div>
                <p class="todolist__text-task" v-if="editBullion">
                    {{item.title}}
                </p>
                <input
                    type="text" 
                    v-model="item.title" 
                    v-else 
                    v-focus 
                    class="todolist__text-task todolist__editInput" 
                    :class="{darkWhiteBackgroundTask: checkBackgraundTask}"
                    @blur="doneOrCancelEdit"
                    @keyup.enter="doneOrCancelEdit()"
                    @keyup.esc="doneOrCancelEdit()"
                    @mouseleave="checkPen = true"
                    @mouseenter="checkPen = false"
                    maxlength="50"
                    
                > 
                <img src="../../images/pen.png" alt="pen" v-if="checkPen" width="24" height="24" style="margin-left: 10px" @click = "editText">
            </div>
            <div class="todolist__time-progress">
                <div class="todolist__time">
                    <div class="todolist__old-time">{{addDateTask}}<span class="todolist__hour">{{addTimeTask}}</span></div>
                    <div class="todolist__new-time">{{editDate}}<span class="todolist__hour">{{editTime}}</span></div>
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
                        @click="deleteItem"
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
            addDateTask: this.$parent.$options.data().fullDate,
            addTimeTask: this.$parent.$options.data().fullTime,
            editTime: this.$parent.$options.data().fullTime,
            editDate: this.$parent.$options.data().fullDate,
            testw: "afsdfsd",
            kaka: false,
            items: [
                {   
                    title: "",
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
        deleteItem(){
            this.items.pop();
            this.$emit('titleArea', "");
        },
        editText(){
            this.editBullion = !this.editBullion;
        },
        doneOrCancelEdit(){
            let date = new Date();
            let shortYear = String(date.getFullYear());
            let obj = {
                month:(date.getMonth() + 1),
                minutes: date.getMinutes(),
                days: date.getDate(),
                hours: date.getHours()
            }
            let i=0;
            for(let item in obj){
                if(obj[item] < 10){
                    item = "0" + obj[item];
                } else {
                    item = obj[item];
                }
                obj[Object.keys(obj)[i]] = item;
                i++;
            }
            let fullDate = obj.days + "." + obj.month + "." + shortYear.slice(2);
            let fullTime = obj.hours + ":" + obj.minutes;
            this.editDate = fullDate;
            this.editTime = fullTime;
            this.editBullion = true;
            this.$emit('titleArea', this.items[0].title);
        },
        testTest(){
            this.$emit('titleArea', this.items[0].title);
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
            margin: 0;
            margin-left: 13px;
            max-width: 180px;
            word-wrap: break-word;
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
            background: url('../../images/old-time.png') no-repeat 0 center;
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
            background: url('../../images/new-time.png') no-repeat 0 center;
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
            background: url('../../images/cross.png') no-repeat 60% 45%;
            width: 26px;
            height: 26px;
            margin: 0 auto;
            background-color: #F1F0FF;
            border-radius: 0px 19px 0px 26px;

        }
    }
</style>