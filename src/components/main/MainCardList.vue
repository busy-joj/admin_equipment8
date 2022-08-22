<template>
<div>
  <div class="inner">
    <div class="list-card">
      <CardItem v-for="equipment in equipmentList" :key="equipment" :equipment="equipment" @showModal="showModal=true" @click="selectEquipment($event,equipment)" @getEquipmentInfo="getEquipmentInfo"/>
    </div>
  </div>

  <DetailModal v-if="showModal" @closeModal="showModal = false" :equipmentInfo="equipmentInfo"/>
</div>

</template>

<script>
import CardItem from '~/components/basic/CardItem'
import DetailModal from '~/components/modal/DetailModal'

export default {
  components:{
    CardItem,
    DetailModal
  },
  data(){
    return {
      showModal : false,
      equipmentInfo:[]
    }
  },
  props:{
    equipmentList:Array
  },
  methods:{
    selectEquipment(e, equipment){
      e.preventDefault();
      equipment.isSelected = !equipment.isSelected
      this.$emit("selectEquipment",equipment)
    },
    getEquipmentInfo(equipment){
      console.log(equipment)
      
      this.equipmentInfo = equipment
      console.log(this.equipmentInfo)
    }
  }
}
</script>

<style lang="scss" scoped>
.inner{position:relative;
  .list-card{display:flex;flex-wrap:wrap;justify-content:flex-start;gap:24px;}
}
</style>