<template>
  <div class="sign-container"> 
    <div class="inner">

        <div class="succesed-msg">
            <img src="~/assets/icon-b-check.png" alt="">
            <p class="txt">대여신청이 완료되었습니다.<br />담당자 확인 후 신청한 기기를 찾아가주세요.</p>
        </div>
        
        <div class="succesed-btns">
          <BasicButton :class="{primary : true, lg: true, mn: true}" @click="onClickOk">확인</BasicButton>
          <BasicButton :class="{white : true, lg: true, mn: true}" @click="onClickRequestHistory">신청 내역 조회하기</BasicButton>
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
  },
  methods: {
    onClickOk() {
      this.$router.replace('/main')
    },

    onClickRequestHistory() {
      console.log('신청 내역 조회하기')
      this.$router.push({path: '/mypage', query: {tab: 'MyApplyList'}})
    }
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