<template>
  <div class="container">
    <h2>내 정보</h2>
    <SubTabs />
    <div class="btn-box">
      <BasicButton :class="{white : true}">뒤로</BasicButton>
      <BasicButton :class="{primary : true, mn: true}">수정</BasicButton>
    </div>
    <!-- <div class="input-list-box">
        <InputItem v-for="item in myInputList" :key="item.id" :id="item.id" :type="item.type" :value="item.value"> {{ item.name }} </InputItem>
    </div> -->
  </div>
</template>

<script>
import SubTabs from '~/components/SubTabs'
import BasicButton from '~/components/basic/BasicButton'
import InputItem from '~/components/basic/InputItem'

export default {
    components : {
        SubTabs,
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
            id:'myPhone',
            name : '연락처',
            type:'number',
            value: '01012345678'
          },
          {
            id:'myIdentification',
            name : '사번',
            type:'number',
            value: '12345'
          },
          {
            id:'myPw',
            name : '비밀번호',
            type:'password',
            value: '000000'
          },
          {
            id:'myPwConfirm',
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
.btn-box{top:69px;}
</style>