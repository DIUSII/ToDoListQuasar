<template>
    <div clas="itemFilterSorting">
        <p class="sorting__item-sorting" style="margin-bottom: 14px;">
            <span class="sorting__img" v-if="checkImg"></span>
            <span class="sorting__figcaption"><slot></slot></span>
        </p>
    </div>
</template>
<script>
export default {
    name: "itemFilterSorting",
    data(){

    }
}
</script>
<style lang="scss">

</style>