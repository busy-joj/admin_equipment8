<template>
    <button type="button" class="btn">
        <slot></slot>
    </button>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
button.btn{padding:9px 29px;font-size:14px;font-weight:bold;margin-right:8px;
    &.none{background:none;color:#3f3f3f;}
    &.gray{background:#D9D9D9;color:$white;}
    &.white{background:$white;color:#3f3f3f ;border:1px solid #D9D9D9}
    &.primary{background:$primary;color:$white;}
    &.mn{margin-right:0px;}
}
</style>