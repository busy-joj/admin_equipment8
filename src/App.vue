<template>
  <Header />
  <Content>
    <RouterView />
  </Content>
</template>

<script>
import Header from '~/components/layout/Header'
import Content from '~/components/layout/Content'

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