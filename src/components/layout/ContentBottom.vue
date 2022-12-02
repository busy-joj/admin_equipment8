<template>
    <div class="content-bottom">
      <div class="container">
        <slot name="h3"></slot>
        
        <slot name="content"></slot>
      </div>
    </div>
</template>

<style lang="scss" scoped>
.content-bottom{position:relative;padding:16px 0 54px 0;background:$body-bg;flex:1;
  h3{margin:0 0 16px 0;}
}
</style>