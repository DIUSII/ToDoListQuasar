<template>
    <div class="deleteModalTask">
        <div class="delete-modal-task">
            <p class="delete-modal-task__text">
                Вы действительно хотите удалить<br> “Задача 1” из списка задач?
            </p>
            <div class="delete-modal-task__group-btn">
                <button class="delete-modal-task__btn-delete" style="margin-right: 60px;" @click="deleteTask">Удалить</button>
                <button class="delete-modal-task__btn-cancel" @click="cancelDeleteTask">Отмена</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "deleteModalTask",
    props: ['indexTask'],
    data(){
        return{

        }
    },
    methods: {
        cancelDeleteTask(){
            this.$emit('cancelDeleteTask', false);
        },
        deleteTask(){
            // console.log(this.indexTask);
            this.$emit('deleteModalIndex', this.indexTask);
            this.$emit('cancelDeleteTask', false);
        }
    }
}
</script>
<style lang="scss">
    .delete-modal-task{
        max-width: 320px;
        width: 100%;
        padding: 21px 52px;
        background: #343175;
        box-shadow: 3px 4px 8px rgba(0, 0, 0, 0.25);
        border-radius: 20px;
        &__text{
            margin-top: 0;
            font-family: Roboto;
            font-weight: 500;
            font-size: 16px;
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