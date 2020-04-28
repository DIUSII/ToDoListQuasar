<template>
    <div class="out-log">
        <p class="out-log__text">
            Вы действительно хотите выйти из ToDoList?
        </p>
        <div class="out-log__group-btn">
            <button class="out-log__yes" @click="YesLogOut">Да</button>
            <button class="out-log__no" @click="cancelLogOut">Нет</button>
        </div>
    </div>
</template>
<script>
export default {
    name:"out-log",
    data(){
        return {

        }
    },
    methods: {
        YesLogOut(){
            this.$emit('YesLogOut', true);
        },
        cancelLogOut(){
            this.$emit ('cancelLogOut', false);
        }
    }
}
</script>
<style lang="scss">
    .out-log{
        max-width: 223px;
        width: 100%;
        background: #343175;
        box-shadow: 2px 3px 12px rgba(0, 0, 0, 0.15);
        border-radius: 20px;
        padding: 20px 18px;
        &__text{
            margin-top: 0;
            font-family: Roboto;
            font-size: 18px;
            text-align: center;
            color: #FFFFFF;
        }
        &__group-btn{
            text-align: center;
        }
        &__yes, &__no{
            background: #FFFFFF;
            border-radius: 16px;
            font-family: Roboto;
            font-size: 12px;
            border: none;
            outline: none;
        }
        &__no{
            color: #0B00FF;
            padding: 10px 32px;
            
        }
        &__yes{
            margin-right: 25px;
            color: #DB2322;
            padding: 10px 35px;
        }
    }
</style>