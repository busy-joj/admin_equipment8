<template>
  <div class="sign-container"> 
    <div class="inner">
      <FormSignTop />
      <FormSignFind />
    </div><!-- /.inner -->
  </div><!-- /.login-container -->
</template>

<script>
import FormSignTop from '~/components/sign/FormSignTop'
import FormSignFind from '~/components/sign/FormSignFind'

export default {
  components:{
    FormSignTop,
    FormSignFind
  }
}
</script>

<style lang="scss" scoped>

</style>