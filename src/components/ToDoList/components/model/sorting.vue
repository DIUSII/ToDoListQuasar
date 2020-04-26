<template>
    <div class="filterSorting">
        <div class="afterClick" v-if="checkModal">
            <img src="../../images/sorting.png" alt="sorting" @click='clickImg' style="margin-right: 7px">
            <img src="../../images/filter.png" alt="filter">
        </div>
        <transition name="model" v-else>
            <div class="filter">
                <div class="filter__img-text">
                    <div>
                        <img src="../../images/red-sorting.png" alt="sorting" @click='clickImg' style="margin-right: 7px">
                        <img src="../../images/filter.png" alt="filter" @click='clickImg'>
                    </div>
                    <p class="filter__item-filter">
                        <!-- <img src="../../images/triangle-blue.png" alt="triangle-blue" style="margin-left: -60px; "> -->
                        Неисполненные
                    </p>
                </div>
                <div class="filter__text">
                    <p class="filter__item-filter filter__item-filter_min">Все</p>
                    <p class="filter__item-filter">Исполненные</p>
                </div>
            </div>
        </transition>
    </div>
</template>
<script>
export default {
    name: "filterSorting",
    data(){
        return{
            checkModal: true,
        }
    },
    methods: {
        clickImg(){
            this.checkModal = !this.checkModal;
        }
    }
}
</script>
<style lang="scss">
    .afterClick{
        position: relative;

    }
    .filter{
        z-index: 1000;
        position: absolute;
        width: 240px;
        height: 80px;
        background: #343175;
        top: -70%;
        left:88%;
        border-radius: 13px;
        padding: 18px 12px;
        &__img-text{
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 14px;
        }
        &__text{
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        &__item-filter{
            max-width: 161px;
            width: 100%;
            padding: 8px 0;
            margin:0;
            background: #FFF;
            text-align: center;
            // border: 2px solid #fff;
            border-radius: 20px;
            font-family: Roboto;
            font-size: 12px;
            color: #292E4E;
            &_min{
                max-width: 62px;
            }
        }
        // &__triangle{
        //     wi
        // }
    }
</style>