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
        <MainCardList :equipmentList="equipmentList" @selectEquipment="selectEquipment"/>
      </template>
    </ContentBottom>

    <Collapse :countItem="countItem" :applyList="applyList"/>
</template>

<script>
import { mapState } from 'vuex'

import ContentTop from '~/components/layout/ContentTop'
import ContentBottom from '~/components/layout/ContentBottom'
import Collapse from '~/components/layout/Collapse'

import MainCardList from '~/components/main/MainCardList'
import MainTabs from '~/components/main/MainTabs'
import Search from '~/components/main/Search'

export default {
  components:{
    ContentTop,
    ContentBottom,
    Collapse,   
    MainCardList, 
    MainTabs,
    Search
  },
  data(){
    return{
      SortingTit:'전체',
      selectedNum : 0,
      equipmentList:[
        {id:'1', model: 'Galaxy A9 Pro', os: 'Android 11', isSelected : false,isRented: true},
        {id:'2', model: 'Galaxy A9 Pro',os: 'Android 112',isSelected : false,isRented: false},
        {id:'3', model: 'Galaxy A10 Pro',os: 'Android 112',isSelected : false,isRented: false},
        {id:'4', model: 'Galaxy A11 Pro',os: 'Android 112',isSelected : false,isRented: false},
        {id:'5', model: 'Galaxy A12 Pro',os: 'Android 112',isSelected : false,isRented: false},
        {id:'6', model: 'Galaxy A13 Pro',os: 'Android 112',isSelected : false,isRented: false},
        {id:'7', model: 'Galaxy A14 Pro',os: 'Android 112',isSelected : false,isRented: false},
        {id:'8', model: 'Galaxy A15 Pro',os: 'Android 112',isSelected : false,isRented: false},
        {id:'9', model: 'Galaxy A16 Pro',os: 'Android 112',isSelected : false,isRented: false},
        {id:'10', model: 'Galaxy A17 Pro',os: 'Android 112',isSelected : false,isRented: false},
        {id:'11', model: 'Galaxy A18 Pro',os: 'Android 112',isSelected : false,isRented: false},
        {id:'12', model: 'Galaxy A19 Pro',os: 'Android 112',isSelected : false,isRented: false},
        {id:'13', model: 'Galaxy A10 Pro',os: 'Android 112',isSelected : false,isRented: false},
        {id:'14', model: 'Galaxy A10 Pro',os: 'Android 112',isSelected : false,isRented: false},
        {id:'15', model: 'Galaxy A10 Pro',os: 'Android 112',isSelected : false,isRented: false},
        {id:'16', model: 'Galaxy A10 Pro',os: 'Android 112',isSelected : false,isRented: false},
        {id:'17', model: 'Galaxy A10 Pro',os: 'Android 112',isSelected : false,isRented: false},
        {id:'18', model: 'Galaxy A10 Pro',os: 'Android 112',isSelected : false,isRented: false},
        {id:'19', model: 'Galaxy A10 Pro',os: 'Android 112',isSelected : false,isRented: false}
      ],
      // applyList:[]
    }
  },
  computed:{
    ...mapState('equipments',[
      'applyList',
      'countItem'
    ])
  },
  methods:{
    activeTab(tab){
      this.SortingTit = tab.text
    },
    selectEquipment(selectedItem){
      if(selectedItem.isSelected){
        this.applyList.push(selectedItem)        
        this.$store.commit('equipments/updateState',{
          applyList : this.applyList,
          countItem : this.applyList.length
        })
      }else{
        const index = this.applyList.findIndex(equipment => equipment.id === selectedItem.id)
        this.applyList.splice(index, 1)
        this.$store.commit('equipments/updateState',{
          applyList : this.applyList,
          countItem : this.applyList.length
        })
      }
      console.log('main')
    }
    // selectEquipment(selectedItem){
    //   if(selectedItem.isSelected){
    //     this.applyList.push(selectedItem)
    //     this.selectedNum = this.applyList.length
    //   }else{
    //     const index = this.applyList.findIndex(equipment => equipment.id === selectedItem.id)
    //     this.applyList.splice(index, 1)
    //     this.selectedNum = this.applyList.length
    //   }
    // }
  }
}
</script>

<style lang="scss" scoped>

</style>