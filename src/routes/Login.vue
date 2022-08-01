<template>
  <div class="login-container">
    <div class="inner">
      
      <div class="input-box">
        <div class="id" :class="{'on' : isFocus}">
          <input type="number" @focus="isFocus = true"  @blur="isFocus = false" class="form-control" id="myName" placeholder="사번" v-model="userID">
          <IconButton :class="{close : true}" @click="userID = ''"></IconButton>
        </div>
        <div class="pw">
          <input type="password" class="form-control" id="myPw" placeholder="비밀번호" v-model="userPW">
          <IconButton :class="{close : true}" @click="userPW = ''"></IconButton>
        </div>
      </div><!-- /.input-box -->

      <div class="btn-box-login">
        <div class="btn-login">
          <BasicButton :class="{gray2 : true, lg: true}">로그인</BasicButton>
          <!-- <BasicButton :class="{gray2 : true, lg: true}" @click="loginSubmit">로그인</BasicButton> -->
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
import IconButton from '~/components/basic/IconButton'

export default {
  components:{
    BasicButton,
    IconButton
  },
  data(){
    return{
      userID : null,
      userPW : null,
      isFocus : false
    }
  }
}
</script>

<style lang="scss" scoped>
.login-container{height:100vh;display: flex;flex-direction:column;flex-grow:1;align-items:center;justify-content: center;
  .inner{width:346px;
    .input-box{
      div{position:relative;
        &::before{position:absolute;content:'';width:16px;height:16px;top:13px;left:12px;}
        &.id::before{background: url(~/assets/icon-user.png) no-repeat;background-size:100%;}
        &.pw::before{background: url(~/assets/icon-info-2.png) no-repeat;background-size:100%;}
        input{padding:12px 40px;font-size:14px;
          &::placeholder{color:$M-gray4}
          &:focus{
            border-color: $primary;
            box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0), 0 0 0px rgba(0, 0, 0, 0);
          }
        }
        .btn.close{width:16px;height:16px;background-color:$M-gray3;position:absolute;top:13px;right:12px;}
      }
      
    }
  }
}

</style>