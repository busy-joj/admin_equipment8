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
button.btn{padding:9px 29px;font-size:16px;margin-right:8px;
    &.none{background:none;color:#3f3f3f;}
    &.gray2{background:$M-gray2;color:$M-gray4 ;}
    &.white{background:$white;color:#3f3f3f ;border:1px solid #D9D9D9}
    &.primary{background:$primary;color:$white;}
    &.lg{width:100%;height:56px;padding-top:18px;padding-bottom:18px;}
    &.mn{margin-right:0px;}
    &:disabled{background: $M-gray2;color:$M-gray4;border:none;}
}
</style>