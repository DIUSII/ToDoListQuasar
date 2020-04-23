<template>
    <div class="createSubTask">
        <div 
            class="todolist__sub-item" 
            v-for="(itemSub, index) in itemsSub" 
            :key="itemSub.id" 
            @mouseleave="hoverItemSubTask"
            @mouseenter="hoverItemSubTask"
            @mousedown="clickItemSubTask"
            @mouseup="clickItemSubTask"
        >
            <div class="todolist__checkbox-sub-task">
                <div class="todolist__ellipse-sub"></div>
                <div class="todolist__title-sub" v-if="editBullion">
                    {{itemSub.title}}
                </div>
                <input 
                    type="text" 
                    v-model="itemSub.title" 
                    v-else 
                    v-focus 
                    class="todolist__title-sub todolist__editInput todolist__title-sub_bckg" 
                    :class="{darkBlueBackgroundTask: checkBackgraundTask}"
                    @blur="doneEdit()"
                    @keyup.enter="doneEdit()"
                    @keyup.esc="cancelEdit()"
                > 
                <img src="../images/pen.png" alt="pen" v-if="checkSubPen" width="16" height="16" style="margin-left: 10px" @click = "editText">
            </div>
            <div class="todolist__time-cross">
                <div class="todolist__time">
                    <div class="todolist__old-time-sub">30.05.20 12:34</div>
                    <div class="todolist__new-time-sub">05.06.20 15:12</div>
                </div>
                <div class="todolist__cross-sub"
                    :class="{
                        blueLightBackgroundCross: checkHoverCross, 
                        blueDarkBackgroundCross: checkClickCross
                    }"
                    @mouseleave="hoverItemSubTask"
                    @mouseenter="hoverItemSubTask"
                    @mousedown="clickCross"
                    @mouseup="clickCross"
                    @click="deleteItemSub(index)"
                >
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "createSubTask",
    data(){
        return {
            checkHoverCross: false,
            checkClickCross: false,
            checkSubPen:false,
            editBullion: true,
            checkBackgraundTask: false,
            itemsSub: [
                {   
                    title: "Подзадача "
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
    methods: {
        hoverCross(){
            this.checkHoverCross = !this.checkHoverCross;
        },
        clickCross(){
            this.checkClickCross = !this.checkClickCross;
        },
        deleteItemSub(index){
            this.itemsSub.splice(index, 1);
        },
        hoverItemSubTask(){
            this.checkSubPen = !this.checkSubPen;
        },
        clickItemSubTask(){
            this.checkBackgraundTask = !this.checkBackgraundTask;
        },
        doneEdit(){
            this.checkSubPen = false;
            this.editBullion = true;
        },
        cancelEdit(){
            this.checkSubPen = false;
            this.editBullion = true;
        },
        editText(){
            this.editBullion = !this.editBullion;
        },
    }
}
</script>
<style lang="scss">
    .blueLightBackgroundCross{
        background: url('../images/white-cross.png') no-repeat 60% 45% !important;
        background-color: #615AFE !important;
    }
    .darkBlueBackgroundTask{
        background-color: #E3E7FF !important;
    }
    .blueDarkBackgroundCross{
        background: url('../images/white-cross.png') no-repeat 60% 45% !important;
        background-color: #635FB5 !important;
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
            &_bckg{
                background: #E3E7FF;
            }
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
        &__old-time-sub{
            background: url('../images/old-time.png') no-repeat 0 center;
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
            background: url('../images/new-time.png') no-repeat 0 center;
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
        &__cross-sub{
            background: url('../images/cross.png') no-repeat 60% 45%;
            width: 26px;
            height: 26px;
            background-color: #FFF;
            align-self: flex-start;
            border-radius: 0px 19px 0px 26px;
            margin-left: 9px;
        }
    }
</style>