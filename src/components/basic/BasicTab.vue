<template>
    <a class="nav-link" aria-current="page" href="#none">
        <slot></slot>
    </a>
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
.nav{margin-bottom:40px;
    .nav-link{font-size:14px;color:#3f3f3f;padding:9px 12px;margin-right:20px;
        &.active{font-weight:bold;background-color:#f0f0f0;color:#3f3f3f;}
    }
}
</style>