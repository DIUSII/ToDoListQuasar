<template>
    <div class="sub-task todolist__sub-task">
        <div class="todolist__name-task">
            <div class="todolist__text-ellipse">
                <div class="todolist__ellipse"></div>
                <div class="todolist__text">
                    Подзадача{{sadfs}}
                </div>
            </div>
            <img src="../images/pen.png" alt="pen" class="todolist__pen">
        </div>
        <div class="todolist__dropdown" v-if="checkDropDown">
            <p class ="todolist__dropdown-description" v-if="checkTextArea" @click="clickTextArea">
                {{textArea}}
            </p>
            <textarea 
                v-else
                class="todolist__dropdown-description todolist__dropdown-description_textarea" 
                maxlength="100" 
                v-model="textArea"
                @blur="cancelEdit()"
                @keyup.enter="cancelEdit()"
                @keyup.esc="cancelEdit()"
                v-focus
            >
            </textarea>
        </div>
        <div class="todolist__description">
            <div class="todolist__title-sub-task">Подзадачи</div>
            <div 
                class="todolist__description-task" 
                :class="{borderDarkDescription: checkDesTask, backgroundDarkDescription: checkDesBckg }"
                @mouseover="hoverDescription"
                @mouseleave="hoverDescription"
                @mousedown="clickDescription"
                @mouseup="clickDescription"
                @click="clickDropDown"
            >
                <span class="todolist__description-text" >Описание</span>
                <span class="todolist__arrow" :class="{arrowRotate: checkArrowRotate}"></span>
            </div>
            <button-ellipse class="todolist__padding" @click.native="addItemSubTask" @titleArea="testTest($event)"></button-ellipse>
        </div>
        <div class="todolist__sub-items">
            <create-sub-task v-for="itemSub in itemsSubTask" :key="itemSub.id"></create-sub-task>
            <!-- <p class="todolist__opacity-text" v-if="itemsSubTask.length === 0">В задаче пока нет подзадач.</p> -->
        </div>
    </div>
</template>
<script>
import createSubtask from './createSubTask/createSubtask'
import buttonEllipse from './buttonEllipse/buttonEllipse'
let date = new Date();
let shortYear = String(date.getFullYear());
let сlerkMouth = "", clerkMinutes ="", clerkDays = "", clerkHours = "";
export default {
    name: "subTask",
    data(){
        return {
            checkDropDown: false,
            textArea: 'Risus, augue arcu dolor tristique velit, fermentum viverra. Pellentesque pulvinar risus aliquam blandit.',
            checkTextArea: true,
            checkDesTask: false,
            sadfs: '',
            checkDesBckg: false,
            checkArrowRotate: false,
            fullDate:   clerkDays + "." + сlerkMouth + "." + shortYear.slice(2),
            fullTime:   " " + clerkHours + ":" + clerkMinutes,
            itemsSubTask: [
                
            ],
        }
    }, 
    components: {
        'create-sub-task': createSubtask,
        'button-ellipse': buttonEllipse
    },
    directives:{
        focus:{
            inserted: function(el){
                el.focus()
            }
        }
    },
    methods: {
        clickTextArea(){
            this.checkTextArea = !this.checkTextArea;
        },
        cancelEdit(){
            this.checkTextArea = true;
        },
        hoverDescription(){
            this.checkDesTask = !this.checkDesTask;
        },
        clickDescription(){
            this.checkDesBckg = !this.checkDesBckg;
        },
        clickDropDown(){
            this.checkDropDown = !this.checkDropDown;
            this.checkArrowRotate = !this.checkArrowRotate;
        },
        addItemSubTask(){
            date = new Date();
            if ( (date.getMonth() + 1) < 10){
                сlerkMouth = "0" + (date.getMonth() + 1);
            } else {
                сlerkMouth = (date.getMonth() + 1)
            }
            if (date.getMinutes() < 10){
                clerkMinutes = "0" + date.getMinutes();
            } else {
                clerkMinutes = date.getMinutes();
            }
            if( date.getDate() < 10){
                clerkDays = "0" + date.getDate(); 
            } else {
                clerkDays = date.getDate(); 
            }
            if(date.getHours()< 10){
                clerkHours =  "0" + date.getHours();
            } else {
                 clerkHours =  date.getHours();
            }
            this.itemsSubTask.push({});
        },
        testTest(x){
            this.sadfs = x;
        }
    }
}
</script>
<style lang="scss">
    .backgroundDarkDescription{
        background: #F7F7F7 !important;
    }
    .borderDarkDescription{
        border: 1px solid #8E8E8E !important; 
    }
    .arrowRotate{
        transform: rotate(180deg) !important;
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

        &__dropdown{
            background: #FFFFFF;
            padding: 0 36px;
            display: flex;
            align-items: flex-end;
        }
        &__dropdown-description{
            background: #FFFFFF;
            box-shadow: 0px -3px 8px rgba(0, 0, 0, 0.1);
            border-radius: 20px 20px 0px 0px;
            margin: 0;
            padding: 20px 20px 16px;
            font-family: Roboto;
            font-size: 11px;
            line-height: 16px;
            color: #292E4E;
            max-width: 363px;
            width: 100%;
            word-wrap: break-word;
            &_textarea{
            border:none;
            outline: none;
            resize: none;
            overflow: auto;
            }

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
            overflow-y:scroll;
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
            background: url('../images/arrow.png') no-repeat 100% center;
            width: 12px;
            height: 10px;
            display: inline-block;
            margin-right: -30px;
        }
    }
</style>