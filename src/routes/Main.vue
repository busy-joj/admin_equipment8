<template>
    <ContentTop>
      <template v-slot:h2>
        <h2>테스트장비</h2>
      </template>
      <template v-slot:content>
        <MainTabs 
          @clickTab="clickTab" 
          ref="mainTab" />
        <Search @clickSearch="clickSearch" />
      </template>
    </ContentTop>
    <ContentBottom>
      <template v-slot:h3>
        <h3>{{ criteria.tabText }}<span class="num">{{ countSearchItem }}</span></h3>
      </template>
      <template v-slot:content>
        <MainCardList 
          :equipment-list="getEquipmentList" 
          @selectEquipment="selectEquipment" />
      </template>
    </ContentBottom>
    <Collapse />
</template>

<script>
import { mapState, mapGetters } from 'vuex'

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
      criteria : { // 검색조건
        tabText: '',
        tabCode: '',
        inputSearchKeyword: '',
        page: 0,
        size: 100,
        direction: 'desc'
      },
      selectedNum : 0,
      equipment: { 
                id: '0', 
                name: 'name', // 기기명
                manufacturer: 'manufacturer', // 제조사
                os: '', // OS
                type: '', // 장비종류
                modelNumber: '', // 모델 번호
                serialNumber: '', // 시리얼 번호
                purchaseDate: '', // 구입일(인수일)
                description: '', // 비고 : 구입일 모름(인수일 기재) 본사에서 구입(라디오)
                user: 'user',
                date: 'date',
                isSelected: false, 
                isRented: false,
                endRentalDate: '',
                rentalUser: ''
      },
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
    }
  },
  computed:{
    ...mapState('equipments',[
      'applyList',
      'countSearchItem',
      'countApplyItem'
    ]),
    ...mapGetters('equipments', [
      'getEquipmentList',
    ])
  },
  created() {
    console.log("Main.vue created")
  },
  mounted() {
    console.log("Main.vue mounted")
    this.$refs.mainTab.clickTab(this, 0)
  },
  methods:{
    // activeTab(tab){
    //   this.SortingTit = tab.text
    // },
    selectEquipment(selectedItem){
      if (selectedItem.isSelected) {
        this.applyList.push(selectedItem)        
        this.$store.commit('equipments/updateState',{
          applyList : this.applyList,
          countApplyItem : this.applyList.length
        })
      } else {
        const index = this.applyList.findIndex(equipment => equipment.id === selectedItem.id)
        this.applyList.splice(index, 1)
        this.$store.commit('equipments/updateState',{
          applyList : this.applyList,
          countApplyItem : this.applyList.length
        })
      }
    },

    clickSearch(keyword) {
      console.log('Main.vue clickSearch keyword', keyword)
      this.criteria.inputSearchKeyword = keyword
      this.fetchEquipmentList()
    },

    clickTab(tab) {
      console.log('Main.vue clickTab tab', tab)
      this.criteria.tabText = tab.text != null ? tab.text : '전체'
      this.criteria.tabCode = tab.code != null ? tab.code : 'all'
      this.fetchEquipmentList()
    },

    fetchEquipmentList() {
      console.log('Main.vue fetchEquipmentList this.criteria', this.criteria)
      this.$store.dispatch('equipments/EQUIPMENT_SEARCH', this.criteria)
    },

  }
}
</script>

<style lang="scss" scoped>
h3 .num{font-size:13px;margin-left:8px;padding:2px 8px;background:$M-primary;border-radius:4px;vertical-align:bottom;color:$white;font-weight:600;}
</style>