<template>
  <Header />
  <Content>
    <RouterView />
  </Content>
</template>

<script>
import Header from '~/components/Header'
import Content from '~/components/Content'
export default{
  components:{
    Header,
    Content
  }
}
</script>

<style lang="scss">
@import "~/scss/main";
</style>