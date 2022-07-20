<template>
    <button type="button" class="btn icon">
        <slot></slot>
    </button>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
button.btn.icon{padding:0;border:none;width:24px;height:24px;
    &.big{width:32px;height:32px;}          
    &.search{background:url(~/assets/icon-search.png) center/100% no-repeat;}
    &.close{width:26px;height:26px;background:url(~/assets/icon-close.png);background-color:#a4a4a4;border-radius:50%;background-size:90%;background-position:center;}
    &.check{background:url(~/assets/icon-check.png) no-repeat;background-size:100%;}
    &.arrow{background:url(~/assets/icon-arrow-r.png) no-repeat;background-size:100%;}
}
</style>