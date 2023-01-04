<template>
  <div class="sign-container"> 
    <div class="inner">

        <div class="succesed-msg">
            <img src="~/assets/icon-b-check.png" alt="">
            <p class="txt">{{ succesedMsg }}</p>
        </div>
        
        <div class="succesed-btns">
          <BasicButton :class="{primary : true, lg: true, mn: true}" @click="this.$router.push('SignIn')">로그인하러가기</BasicButton>
          <BasicButton :class="{white : true, lg: true, mn: true}" >로그인하러가기</BasicButton>
        </div>
    </div><!-- /.inner -->
  </div><!-- /.sign-container -->
</template>

<script>
import { mapState } from 'vuex'
import BasicButton from '~/components/basic/BasicButton'

export default {
  components:{
    BasicButton
  },
  computed:{
    ...mapState('members',[
      'succesedMsg'
    ])
  }
}
</script>

<style lang="scss" scoped>
.sign-container{
  @include landscape{justify-content:center;padding-top:0px;}
  .inner{text-align:center;
    .succesed-msg{margin-bottom:80px;
        img{width:120px;height:120px;}
        .txt{font-size:24px;color:$M-gray5;margin-top:40px;
        @include portrait{font-size:16px;margin-top:24px;}
        }
    }
    .succesed-btns{
      button + button{margin-top:16px;}
      @include landscape{position:absolute;bottom:24px;left:16px;width:94%;}
    }
  }
}
</style>