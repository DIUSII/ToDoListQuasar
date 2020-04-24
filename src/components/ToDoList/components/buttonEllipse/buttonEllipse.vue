<template>
    <button class="todolist__btn buttonEllipse"
        :class="{backgroundLightRed: checkHoverButtonEllipse, backgroundDarkRed: checkClickButtonEllipse}"
        @mouseover="hoveButtonEllipse"
        @mouseout="hoveButtonEllipse"
        @mousedown="clickButtonEllipse"
        @mouseup="clickButtonEllipse"

    ></button>
</template>
<script>
export default {
    name: "buttonElli",
    data(){
        return {
            checkHoverButtonEllipse: false,
            checkClickButtonEllipse: false,
        }
    },
    methods: {
        hoveButtonEllipse(){
             this.checkHoverButtonEllipse = !this.checkHoverButtonEllipse;
        },
        clickButtonEllipse(){
            this.checkClickButtonEllipse = !this.checkClickButtonEllipse;
        },
    }
}
</script>
<style lang="scss">
    .backgroundLightRed{
        background: url('../../images/white-plus.png') no-repeat center center !important;
        background-color:#F88081 !important;
    }
    .backgroundDarkRed{
        background: url('../../images/white-plus.png') no-repeat center center !important;
        background-color:#D47070 !important;
    }
    .todolist{
        &__btn{
            background: url('../../images/red-plus.png') no-repeat center center;
            background-size:50%;
            width: 36px;
            height: 36px;
            border: none;
            background-color: #FFFFFF;
            border-radius: 50%;
            outline: none;
        }
    }
</style>