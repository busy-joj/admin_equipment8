<template>
  <div class="sign-container"> 
    <div class="inner">
      dd
      <FormSignTop />
      <FormSignUp />
    </div><!-- /.inner -->
  </div><!-- /.login-container -->
</template>

<script>
import FormSignTop from '~/components/sign/FormSignTop'
import FormSignUp from '~/components/sign/FormSignUp'

export default {
  components:{
    FormSignTop,
    FormSignUp
  }
}
</script>

<style lang="scss" scoped>

</style>