<template>
    <button type="button" class="tab">
        <slot></slot>
    </button>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
button.tab{font-size:14px;color:$M-gray4;padding:8px 12px;margin-right:4px;border:none;background:none;border-radius:4px;line-height:18px;
    &.active{background-color:$M-gray2;color:$M-black;}
    &:last-child{margin-right:0;}
}
</style>