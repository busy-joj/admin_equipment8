<template>
  <div class="container">
    <h2>대여신청</h2> 
    <div class="btn-box">
      <BasicButton :class="{white : true}">신청</BasicButton>
      <BasicButton :class="{gray : true, mn : true}">대여</BasicButton>
    </div>
    <div class="input-list-box">
        <InputItem v-for="item in myInputList" :key="item.id" :id="item.id" :type="item.type" :value="item.value"> {{ item.name }} </InputItem>
    </div>
  </div>
</template>

<script>
import BasicButton from '~/components/basic/BasicButton'
import IconButton from '~/components/basic/IconButton'
import InputItem from '~/components/basic/InputItem'


export default {
  components:{
    BasicButton,
    IconButton,
    InputItem
  },
  data(){
    return{
           myInputList:[
          {
            id:'myName',
            name : '성명',
            type:'text',
            value: '홍길동',
            readonly: true
          },
          {
            id:'myEmail',
            name : '회사 이메일',
            type:'text',
            value: 'kbsMedia',
            readonly: true
            
          },
          {
            id:'myPhone',
            name : '연락처',
            type:'password',
            value: '0102345678',
            readonly: true
          },
          {
            id:'changPwconfig',
            name : '비밀번호 확인',
            type:'password',
            value: '000000'
          },
          {
            id:'date',
            name : '대여기간 설정',
          },
        ]            
        }
  },
  methods:{
    activeTab(e,i){
      e.preventDefault();
      console.log(this.isActive)
      this.category[i].isActive = !this.category[i].isActive
      console.log(this.isActive)
    }
  }
}
</script>