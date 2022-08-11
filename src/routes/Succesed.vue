<template>
  <div class="sign-container"> 
    <div class="inner">

        <div class="succesed-msg">
            <img src="~/assets/icon-b-check.png" alt="">
            <p class="txt">비밀번호 변경이 완료되었습니다.</p>
        </div>
        
        <BasicButton :class="{primary : true, lg: true, mn: true}" @click="this.$router.push('SignIn')">로그인하러가기</BasicButton>
    </div><!-- /.inner -->
  </div><!-- /.sign-container -->
</template>

<script>
import BasicButton from '~/components/basic/BasicButton'

export default {
  components:{
    BasicButton
  }  
}
</script>

<style lang="scss" scoped>
.sign-container{
  margin-top:286px;
  .inner{text-align:center;
    .succesed-msg{margin-bottom:80px;
        img{width:120px;height:120px;margin-bottom:40px;}
        .txt{font-size:24px;color:$M-gray5;}
    }
  }
}
</style>