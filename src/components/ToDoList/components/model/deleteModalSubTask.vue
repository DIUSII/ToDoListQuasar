<template>
    <div class="deleteModalTask">
        <div class="delete-modal-sub-task">
            <p class="delete-modal-sub-task__text">
               Вы действительно хотите удалить “Подзадача 1”<br> из списка подзадач задачи “Задача 1”?
            </p>
            <div class="delete-modal-sub-task__group-btn">
                <button class="delete-modal-sub-task__btn-delete" style="margin-right: 60px;" @click="deleteSubTask">Удалить</button>
                <button class="delete-modal-sub-task__btn-cancel" @click="cancelDeleteSubTask">Отмена</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "deleteModalTask",
    props: ['indexSubTask'],
    data(){
        return{

        }
    },
    methods: {
        cancelDeleteSubTask(){
            this.$emit('cancelDeleteSubTask', false);
        },
        deleteSubTask(){
            // console.log(this.indexTask);
            this.$emit('deleteModalIndex', this.indexSubTask);
            this.$emit('cancelDeleteSubTask', false);
        }
    }
}
</script>
<style lang="scss">
    .delete-modal-sub-task{
        max-width: 326px;
        width: 100%;
        padding: 21px 22px;
        background: #343175;
        box-shadow: 3px 4px 8px rgba(0, 0, 0, 0.25);
        border-radius: 20px;
        &__text{
            margin-top: 0;
            font-family: Roboto;
            font-weight: 500;
            font-size: 14px;
            text-align: center;
            color: #FFFFFF;
        }
        &__btn-delete, &__btn-cancel{
            border: none;
            background: #FFFFFF;
            border-radius: 12px;
            font-family: Roboto;
            font-size: 12px;
            text-align: center;
            max-width: 130px;
            width: 100%;
            padding: 9px 0;
            outline: none;
        }
        &__btn-delete{
            color: #DB2322;
        }
        &__btn-cancel{
            color: #0B00FF;
        }
    }
</style>