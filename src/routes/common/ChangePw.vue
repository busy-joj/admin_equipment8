<template>
  <div class="sign-container"> 
    <div class="inner">
      <FormSignTop />
      <FormChangePw />
    </div><!-- /.inner -->
  </div><!-- /.sign-container -->
</template>

<script>
import FormSignTop from '~/components/sign/FormSignTop'
import FormChangePw from '~/components/sign/FormChangePw'

export default {
  components:{
    FormSignTop,
    FormChangePw
  }
}
</script>

<style lang="scss" scoped>
.sign-container{
  margin-top:120px;
}
</style>