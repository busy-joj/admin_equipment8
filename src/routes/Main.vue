<template>
    <ContentTop>
      <template v-slot:h2>
        <h2>테스트장비</h2>
      </template>
      <template v-slot:content>
        <MainTabs @activeTab="activeTab"/>
        <Search />
      </template>
    </ContentTop>
    
    <ContentBottom>
      <template v-slot:h3>
        <h3>{{ SortingTit }}</h3>
      </template>
      <template v-slot:content>
        <CardList />
      </template>
    </ContentBottom>

    <RouterLink to="../routes/RentApply" class="btn-go-rent">
        <BasicButton :class="{primary : true, mn: true}">대여신청<span class="selected-num">1</span></BasicButton>
    </RouterLink>
</template>

<script>
import ContentTop from '~/components/layout/ContentTop'
import ContentBottom from '~/components/layout/ContentBottom'
import Search from '~/components/Search'
import MainTabs from '~/components/MainTabs'
import CardList from '~/components/CardList'


export default {
  components:{
    ContentTop,
    ContentBottom,
    Search,
    MainTabs,
    CardList
  },
  data(){
    return{
      SortingTit:'전체'
    }
  },
  methods:{
    activeTab(tab){
      this.SortingTit = tab.text
    }
  }
}
</script>

<style lang="scss" scoped>
.btn-go-rent{
    position:absolute;bottom:40px;right:40px;
    .selected-num{margin-left:5px;}
}
</style>