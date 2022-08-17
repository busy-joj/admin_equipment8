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
        <CardList :equipmentList="equipmentList" @selectEquipment="selectEquipment"/>
      </template>
    </ContentBottom>

    <Collapse :selectedNum="selectedNum"/>
</template>

<script>
import ContentTop from '~/components/layout/ContentTop'
import ContentBottom from '~/components/layout/ContentBottom'

import Search from '~/components/Search'
import MainTabs from '~/components/MainTabs'
import CardList from '~/components/CardList'
import Collapse from '~/components/Collapse'


export default {
  components:{
    ContentTop,
    ContentBottom,
    Search,
    MainTabs,
    CardList,
    Collapse
  },
  data(){
    return{
      SortingTit:'전체',
      selectedNum : 0,
      equipmentList:[
        {id:'1', model: 'Galaxy A9 Pro', os: 'Android 11', isSelected : false,isRented: true},
        {id:'2', model: 'Galaxy A10 Pro',os: 'Android 112',isSelected : false,isRented: false},
        {id:'3', model: 'Galaxy A10 Pro',os: 'Android 112',isSelected : false,isRented: false},
        {id:'4', model: 'Galaxy A10 Pro',os: 'Android 112',isSelected : false,isRented: false},
        {id:'5', model: 'Galaxy A10 Pro',os: 'Android 112',isSelected : false,isRented: false},
        {id:'6', model: 'Galaxy A10 Pro',os: 'Android 112',isSelected : false,isRented: false},
        {id:'7', model: 'Galaxy A10 Pro',os: 'Android 112',isSelected : false,isRented: false},
        {id:'8', model: 'Galaxy A10 Pro',os: 'Android 112',isSelected : false,isRented: false},
        {id:'9', model: 'Galaxy A10 Pro',os: 'Android 112',isSelected : false,isRented: false},
        {id:'10', model: 'Galaxy A10 Pro',os: 'Android 112',isSelected : false,isRented: false},
        {id:'11', model: 'Galaxy A10 Pro',os: 'Android 112',isSelected : false,isRented: false},
        {id:'12', model: 'Galaxy A10 Pro',os: 'Android 112',isSelected : false,isRented: false},
        {id:'13', model: 'Galaxy A10 Pro',os: 'Android 112',isSelected : false,isRented: false},
        {id:'14', model: 'Galaxy A10 Pro',os: 'Android 112',isSelected : false,isRented: false},
        {id:'15', model: 'Galaxy A10 Pro',os: 'Android 112',isSelected : false,isRented: false},
        {id:'16', model: 'Galaxy A10 Pro',os: 'Android 112',isSelected : false,isRented: false},
        {id:'17', model: 'Galaxy A10 Pro',os: 'Android 112',isSelected : false,isRented: false},
        {id:'18', model: 'Galaxy A10 Pro',os: 'Android 112',isSelected : false,isRented: false},
        {id:'19', model: 'Galaxy A10 Pro',os: 'Android 112',isSelected : false,isRented: false}
      ],
      applyList:[]
    }
  },
  methods:{
    activeTab(tab){
      this.SortingTit = tab.text
    },
    selectEquipment(selectedItem){
      
      // console.log(selectedItem)
      if(selectedItem.isSelected){
        this.applyList.push(selectedItem)
        // const num = this.applyList.length
        
        this.selectedNum = this.applyList.length
        console.log(this.applyList.length)
      }else{
        const index = this.applyList.findIndex(equipment => equipment.id === selectedItem.id)
        this.applyList.splice(index, 1)
        this.selectedNum = this.applyList.length
        console.log(this.applyList.length)

      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>