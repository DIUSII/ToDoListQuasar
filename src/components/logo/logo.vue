<template>
    <div class = "log">
        <img 
        src="./images/logo-icon.png" 
        alt="logo-icon" 
        class="log__img">
        <h1 class="log__title">
            <span class="log__span log__span_blue-line">ToDo</span>
            <span class="log__span log__span_red-line">List</span>
        </h1>
    </div>
</template>
<script>
export default {
    name : "log",
    data(){
        return{
        }
    },
    methods: {

    },
    components: { 
    }
}
</script>
<style lang="scss">
    @import url("../fonts/fonts.css");
    .log{
        display: flex;
        align-items: center;
        &__img{
            margin-right: 23px;
        }
        &__title{
            display: inline-block;
            font-weight: 400;
            font-size: 56px;
            margin: 0;
        }
        &__span{
            font-family: 'Comfortaa', sans-serif;
            &_blue-line{
                border-bottom: 1px solid #615AFE;
                opacity: 0.9;
                margin-right: 2px;
            }
            &_red-line{
                border-bottom: 1px solid #F88081;
                opacity: 0.9;
            }
        }
    }
</style>
