<template>
  <ContentTop>
    <template #h2>
      <h2>내 정보</h2>
    </template>   
    <template #content>   
      <div class="tab-nav">
        <BasicTab
          v-for="(tab, i) in tabs"
          :key="i"
          @click="activeTab(tab,i)"
          :class="{active : tab.isActive}">
          {{ tab.text }}
        </BasicTab>
      </div>
    </template>
  </ContentTop>
  <ContentBottom>
    <template #content>
      <MyApplyList />
      <MyAccountInfo />
    </template>
  </ContentBottom>
</template>

<script>
import ContentTop from '~/components/layout/ContentTop'
import ContentBottom from '~/components/layout/ContentBottom'
import MyAccountInfo from '~/components/mypage/MyAccountInfo'
import MyApplyList from '~/components/mypage/MyApplyList'
import BasicTab from '~/components/basic/BasicTab'

export default {
    components : {
    ContentTop,
    ContentBottom,
    MyAccountInfo,
    MyApplyList,
    BasicTab
},
    data(){
      return{
        tabs:[
          { 
              text : '계정 정보',
              isActive : true
          }, 
          { 
              text : '신청내역조회',
              isActive : false
          }
        ]
      }
    }
}
</script>

<style lang="scss" scoped>
h2{margin-bottom:0 !important;}
.tab-nav{position:absolute;top:5px;right:0;}
.content-bottom{
  .table-box{position:absolute;}
}
</style>