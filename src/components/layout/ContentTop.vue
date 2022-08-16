<template>
    <div class="content-top">
      <div class="container">
        <slot name="h2"></slot>

        <slot name="content"></slot>
      </div>
    </div>
</template>

<style lang="scss" scoped>
.content-top{position:relative;padding:60px 0 35px;background:$M-gray1;border-bottom:1px solid $M-gray3;}
</style>