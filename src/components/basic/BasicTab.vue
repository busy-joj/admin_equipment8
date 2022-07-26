<template>
    <button type="button" class="tab">
        <slot></slot>
    </button>
</template>

<script>
export default {
    props:{
        isActive :{
            type:Boolean,
            default:false
        }
    }
}
</script>

<style lang="scss" scoped>
button.tab{font-size:14px;color:#3f3f3f;padding:9px 12px;margin-right:20px;border:none;background:none;border-radius:4px;
    &.active{font-weight:bold;background-color:#f0f0f0;color:#3f3f3f;}
}
</style>