<template>
  <div class="container">
    <h2>비밀번호</h2>
    <div class="btn-box">
        <RouterLink to="../routes/">
            <BasicButton :class="{white : true}">취소</BasicButton>
        </RouterLink>
        <BasicButton :class="{primary : true, mn: true}">변경</BasicButton>
    </div> 
    <div class="input-list-box">
        <InputItem v-for="item in myInputList" :key="item.id" :id="item.id" :type="item.type" :value="item.value"> {{ item.name }} </InputItem>
    </div>
  </div>
</template>

<script>
import BasicButton from '~/components/basic/BasicButton'
import InputItem from '~/components/basic/InputItem'

export default {
    components : {
        BasicButton,
        InputItem
    },
    data(){
      return{
        myInputList:[
          {
            id:'myName',
            name : '성명',
            type:'text',
            value: '홍길동'
          },
          {
            id:'myEmail',
            name : '회사 이메일',
            type:'text',
            value: 'kbsMedia'
          },
          {
            id:'changPw',
            name : '변경 비밀번호',
            type:'password',
            value: '000000'
          },
          {
            id:'changPwconfig',
            name : '비밀번호 확인',
            type:'password',
            value: '000000'
          },
        ]
      }
    }
}
</script>

<style lang="scss" scoped>
.btn-box{display:inlien-flex;margin-bottom:24px;position:absolute;right:0;top:0;}

</style>