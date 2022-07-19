<template>
  <!-- 버튼 테스트중!! -->
  <div class="container">
    <h2>대여신청</h2>
    <BasicButton :class="{none : true , mn : true}">신청</BasicButton>
    <BasicButton :class="{gray : true}">대여</BasicButton>
    <BasicButton :class="{white : true}">대여</BasicButton>
    <BasicButton :class="{primary : true}">대여</BasicButton>
    
  </div>

</template>

<script>
import BasicButton from '~/components/basic/BasicButton'
export default {
  components:{
    BasicButton
  }
}
</script>