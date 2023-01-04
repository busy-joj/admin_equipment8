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
    &.white{background:$white;color:$primary;border:1px solid $primary}
    &.primary{background:$primary;color:$white;}
    &.lg{width:100%;height:56px;padding-top:18px;padding-bottom:18px;line-height:16px;}
    &.md{width:50%;height:56px;padding-top:18px;padding-bottom:18px;line-height:16px;}
    &.mn{margin-right:0px;}
    &.fixed{position:fixed;bottom:40px;right:40px;width:150px;height:50px;display:flex;gap:8px;padding:0;align-items:center;justify-content:center;border-radius:40px;font-weight:600;z-index:10;}
    &:disabled{background: $M-gray2;color:$M-gray4;border:none;}
}
</style>