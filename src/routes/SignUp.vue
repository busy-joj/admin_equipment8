<template>
  <div class="sign-container"> 
    <div class="inner">
      <FormSignTop />
      <FormSignUp />
    </div><!-- /.inner -->
  </div><!-- /.sign-container -->
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