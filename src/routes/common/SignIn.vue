<template>
  <div class="sign-container"> 
    <div class="inner">
      <FormSignTop />
      <FormSignIn />
    </div><!-- /.inner -->
  </div><!-- /.sign-container -->
</template>

<script>
import FormSignTop from '~/components/sign/FormSignTop'
import FormSignIn from '~/components/sign/FormSignIn'

export default {
  components:{
    FormSignTop,
    FormSignIn
  }
}
</script>

<style lang="scss" scoped>

</style>