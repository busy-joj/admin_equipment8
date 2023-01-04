<template>
    <div class="collapse-bottom">
        <slot name="contentBtn"></slot>
    </div>
</template>

<script>

export default {
    
}
</script>

<style lang="scss" scoped>

.collapse-bottom{position:fixed;bottom:0;width:588px;padding-bottom:40px;background:#fff;display:flex;gap:16px;flex-direction:column;}

</style> 