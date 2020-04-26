<template>
    <div class="filterSorting">
        <div class="afterClick" v-if="checkModal">
            <img src="../../images/sorting.png" alt="sorting" @click='clickSorting' style="margin-right: 7px">
            <img src="../../images/filter.png" alt="filter" @click='clickFilter'>
        </div>
        <transition name="model" v-else-if="checkFilter">
            <div class="filter">
                <div class="filter__img-text">
                    <div>
                        <img src="../../images/sorting.png" alt="sorting" style="margin-right: 7px" @click='clickSorting'>
                        <img src="../../images/red-filter.png" alt="filter" @click='clickImg'>
                    </div>
                    <p class="filter__item-filter" @mouseenter="checkImg = true" @mouseleave="checkImg = false">
                        <span class="sorting__img" v-if="checkImg"></span>
                        <span class="sorting__figcaption-filter">Неисполненные</span>
                    </p>
                </div>
                <div class="filter__text">
                    <p class="filter__item-filter filter__item-filter_min">
                        <span class="sorting__img" v-if="checkImg"></span>
                        <span class="sorting__figcaption-filter">Все</span>
                    </p>
                    <p class="filter__item-filter">
                        <span class="sorting__img" v-if="checkImg"></span>
                        <span class="sorting__figcaption-filter">Исполненные</span>
                    </p>
                </div>
            </div>
        </transition>
        <transition name="model" v-else-if="checkSorting">
            <div class="sorting">
                <div class="sorting__img-text">
                    <div>
                        <img src="../../images/red-sorting.png" alt="sorting" @click='clickImg' style="margin-right: 7px">
                        <img src="../../images/filter.png" alt="filter" @click='clickFilter'>
                    </div>
                    <p class="sorting__item-sorting sorting__item-sorting_min">
                        <span class="sorting__img " v-if="checkImg"></span>
                        <span class="sorting__figcaption ">Название</span>
                    </p>
                </div>
                <p class="sorting__item-sorting" style="margin-bottom: 14px;">
                    <span class="sorting__img" v-if="checkImg"></span>
                    <span class="sorting__figcaption">Дата создания</span>
                </p>
                <p class="sorting__item-sorting">
                    <span class="sorting__img" v-if="checkImg"></span>
                    <span class="sorting__figcaption">Дата изменения</span>
                </p>

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
            checkFilter: false,
            checkSorting: false,
            checkImg: false
        }
    },
    methods: {
        clickSorting(){
            this.checkFilter = false;
            this.checkModal = false;
            this.checkSorting = true;
        },
        clickFilter(){
            this.checkSorting = false;
            this.checkModal = false;
            this.checkFilter = true;
        },
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
    .filter, .sorting{
        z-index: 1000;
        position: absolute;
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
        &__img{
            background: url('../../images/triangle-blue.png') no-repeat 0% 50%;
            background-size: contain;
            width: 9px;
            height: 10px;
            position: absolute;
            top: 33%;
            left: 0;
        }
        &__text{
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        &__item-filter, &__item-sorting{
            position: relative;
            padding: 8px 0;
            margin:0;
            background: #FFF;
            text-align: center;
            border-radius: 20px;
            font-family: Roboto;
            font-size: 12px;
            color: #292E4E;
        }
         &__item-filter{
            max-width: 161px;
            width: 100%;
            &_min{
                max-width: 62px;
            }
         }
        &__item-sorting{
            max-width: 183px;
            width: 100%;
            &_min{
                max-width: 114px;
            }
        }
    }
    .filter{
        width: 240px;
        height: 80px;
    }
    .sorting{
        width: 183px;
        height: 118px;
    }
</style>