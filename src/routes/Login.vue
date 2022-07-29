<template>
  <div class="login-container">
    <div class="inner">
      <div class="input-box">
        <div class="login">
          <input type="text" class="form-control" id="myName" placeholder="사번" value="email@example.com">
        </div>
        <div class="pw">
          <input type="password" class="form-control" id="myPw" placeholder="비밀번호">
        </div>
      </div><!-- /.input-box -->

      <div class="btn-box-login">
        <div class="btn-login">
          <BasicButton :class="{gray2 : true, lg: true}">로그인</BasicButton>
        </div>
        <div class="btn-other">
          <BasicButton :class="{gray2 : true, lg: true}">계정등록</BasicButton>
        </div>
      </div><!-- /.inner -->
    </div><!-- /.inner -->
  </div><!-- /.login-container -->
  
    
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
.login-container{height:100vh;display: flex;flex-direction:column;flex-grow:1;align-items:center;justify-content: center;
  .inner{width:346px;
    .input-box{
      div{position:relative;
        &::before{position:absolute;content:'';width:16px;height:16px;top:13px;left:12px;}
        &.login::before{background: url(~/assets/icon-user.png) no-repeat;background-size:100%;}
        &.pw::before{background: url(~/assets/icon-info-2.png) no-repeat;background-size:100%;}
        input{padding:12px 40px;font-size:14px;}
      }
    }
  }
}
</style>