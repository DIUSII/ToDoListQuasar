<template>
    <div class="sub-task-modal">
        <div class="sub-task-modal__title">Добавление подзадачи</div>
        <label class="sub-task-modal__label">
            Название
            <input type="text" class="sub-task-modal__input" v-model="titleInputSubTask">
        </label>
        <form class="sub-task-modal__form">
            <button class="sub-task-modal__btn sub-task-modal__btn_margin" @click="createItemSubTask">Создать</button>
        </form>
    </div>
</template>
<script>
export default {
    name: "sub-task-modal",
    data(){
        return{
            titleInputSubTask: '',
        }
    },
    methods: {
        createItemSubTask(){
            this.$emit('inputTitleSubTask', this.titleInputSubTask);
            this.$emit('cancelMobelSubTask', false);
            this.titleInputSubTask = "";
        }
    }
}
</script>
<style lang="scss">
    .sub-task-modal{
        background: #343175;
        border-radius: 20px;    
        max-width: 530px;
        width: 100%;
        padding: 40px 24px 30px;
        z-index: 100;
        &__title{
            font-family: Roboto;
            font-weight: 500;
            font-size: 24px;
            text-align: center;
            color: #FFFFFF;
            margin-bottom: 43px;
        }
        &__label{
            font-family: Roboto;
            font-size: 18px;
            color: #FFFFFF;
        }
        &__input{
            margin-top: 10px;
            background: #FFFFFF;
            border-radius: 8px; 
            outline: none;
            border: none;
            font-family: Roboto;
            font-size: 16px;
            color: #292E4E;
            max-width: 491px;
            width: 100%;
            padding: 14px 19px;
        }
        &__form{
            text-align: center;
        }
        &__btn{
            border: none;
            outline: none;
            font-family: Roboto;
            font-size: 18px;
            color: #0B00FF;
            padding: 12px 57px;
            background: #FFFFFF;
            border-radius: 20px;
            &_margin{
                margin-top: 42px;
            }
        }
    }
</style>