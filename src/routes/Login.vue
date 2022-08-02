<template>
  <div class="login-container"> 
    <div class="inner">
      <div class="top-box">
        <h1 class="blind">KBS미디어</h1>
      </div>
      <div class="input-box">
        <div class="id" :class="{'on' : id.isFocus}">
          <input type="number" @focus="id.isFocus = true"  @blur="id.isFocus = false" class="form-control" id="myName" placeholder="사번" v-model="id.userID">
          <IconButton v-if="id.userID !== null" :class="{close : true}" @click="id.userID = null"></IconButton>
        </div>
        <div class="pw" :class="{'on' : pw.isFocus}">
          <input type="password" @focus="pw.isFocus = true"  @blur="pw.isFocus = false" class="form-control" id="myPw" placeholder="비밀번호" v-model="pw.userPW">
          <IconButton v-if="pw.userPW !== null" :class="{close : true}" @click="pw.userPW = null"></IconButton>
        </div>
        <div class="keep">
          <input type="checkbox" id="keep" name="logKeep" value="off">
          <label for="keep" class="txt">로그인 상태 유지</label>
        </div>
      </div><!-- /.input-box -->

      <div class="btn-box-login">
        <div class="btn-login">
          <BasicButton :class="{gray2 : true, lg: true}">로그인</BasicButton>
          <!-- <BasicButton :class="{gray2 : true, lg: true}" @click="loginSubmit">로그인</BasicButton> -->
        </div>
        <div class="btn-other">
          <RouterLink to="../routes/RentApply" class="btn-signup">계정 생성</RouterLink>
          <RouterLink to="../routes/RentApply" class="btn-find">비밀번호 찾기</RouterLink>
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
      id:{
          userID :null,
          isFocus :false
        },
      pw:{
          userPW :null,
          isFocus :false
        }
    }
  }
}
</script>

<style lang="scss" scoped>
.login-container{height:100vh;display: flex;flex-direction:column;flex-grow:1;align-items:center;justify-content: center;
  .inner{width:346px;
    .top-box{
      width:94%;height:48px;background: url(~/assets/logo-c-kbsmedia.png) no-repeat;background-size:100%;margin:0 auto 48px;
    }
    .input-box{margin-bottom:24px;
      div{position:relative;
        &:first-child{margin-bottom:8px;}
        &.id::before{position:absolute;content:'';width:16px;height:16px;top:14px;left:12px;background: url(~/assets/icon-user.png) no-repeat;background-size:100%;}
        &.pw::before{position:absolute;content:'';width:16px;height:16px;top:14px;left:12px;background: url(~/assets/icon-info-2.png) no-repeat;background-size:100%;}
        &.on::before{filter: brightness(0%);}
        input{padding:12px 40px;font-size:14px;color:$M-black;
          &::placeholder{color:$M-gray4}
          &:focus{
            border-color: $primary;
            box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0), 0 0 0px rgba(0, 0, 0, 0);
          }
        }
        &.keep{margin-top:12px;
          input[type="checkbox"]{display:none;
            & + label{position:relative;padding:0 0 0 32px;font-size:14px;color:$M-gray4;cursor:pointer;
              &::before{position:absolute;content:'';width:15px;height:15px;border-radius:50%;top:3px;left:0;background:url(~/assets/ico-check-set.png);background-position:0px 0px;background-size:100%;}
            }
            &:checked+label{
              &::before{background-position:0px 15px;}
            }
          }
        }
        .btn.close{width:16px;height:16px;background-color:$M-gray3;position:absolute;top:14px;right:12px;}
      }
    }
    .btn-box-login{
      .btn-login{
        .btn{font-weight:normal;}
      }
      .btn-other{text-align: center;margin-top:24px;
        a{text-decoration: none;font-size:12px;color:$M-gray4;
          + a{margin-left:19px;position:relative;
            &::before{position:absolute;content:'';width:1px;height:9px;background:$M-gray4;top:3px;left:-8px;}
          }
        }
      }
    }
  }
}

</style>