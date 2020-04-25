<template>
    <div class="task todolist__task">
        <div class="todolist__main-panel">
            <div class="todolist__filter">
                <span class="todolist__span">Задачи</span>
                <img src="../images/sorting.png" alt="sorting" class="todolist__sorting">
                <img src='../images/filter.png' alt="filter">
            </div>
            <button-ellipse @click.native="addItemTask"></button-ellipse>
        </div>
        <div class="todolist__items">
            <create-task 
                v-for="itemTask in itemsTask" 
                :key="itemTask.id" 
                @titleArea="testTest($event)"
            >{{titleTask}}</create-task>
            <!-- <p class="todolist__opacity-text todolist__opacity-text_big" v-if="itemsTask.length === 0">У вас пока нет задач.</p> -->
        </div>
    </div>
</template>
<script>
import createTask from './createTask/createTask'
import buttonEllipse from './buttonEllipse/buttonEllipse'
let date = new Date();
let shortYear = String(date.getFullYear());
let сlerkMouth = "", clerkMinutes ="", clerkDays = "", clerkHours = "";
export default {
    name: "task",
    data(){
        return{
            titleTask: "Задача",
            fullDate:   clerkDays + "." + сlerkMouth + "." + shortYear.slice(2),
            fullTime:   clerkHours + ":" + clerkMinutes,
            title: '',
            itemsTask: [
                // {
                //     // id: 1,
                //     // itemSub: [
                //     //     {
                //     //         id: 1,
                //     //     }
                //     // ]
                // }
            ],
        }
    },
    components: {
        "create-task":createTask,
        "button-ellipse": buttonEllipse,
    },
    methods: {
        addItemTask(){
            date = new Date();
            let i = 0;
            let obj = {
                month:(date.getMonth() + 1),
                minutes: date.getMinutes(),
                days: date.getDate(),
                hours: date.getHours()
            }
            for(let item in obj){
                if(obj[item] < 10){
                    item = "0" + obj[item];
                } else {
                    item = obj[item];
                }
                obj[Object.keys(obj)[i]] = item;
                i++;
            }
            сlerkMouth = obj.month; clerkMinutes =obj.minutes; clerkDays = obj.days; clerkHours = obj.hours;
            this.itemsTask.push({});
        },
        testTest(x){
            this.$emit('titleArea', x)
        }
    }
}
</script>
<style lang="scss">
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
        &__items{
            background: #EFEEFF;
            box-shadow: inset 12px 0px 10px rgba(202, 201, 214, 0.5), inset -12px -16px 10px rgba(255, 255, 255, 0.5);
            border-radius: 0px 0px 20px 20px;
            height:439px;
            margin-bottom: 40px;
            padding-top: 26px;
            overflow-y: scroll;
        }
    }
</style>