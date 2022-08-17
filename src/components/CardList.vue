<template>
  <div class="inner">
    <div class="list-card">
      <CardItem v-for="equipment in equipmentList" :key="equipment" :equipment="equipment" @showModal="showModal=true" @click="selectEquipment($event,equipment)"/>
    </div>
  </div>

  <DetailModal v-if="showModal" class="detail-info" @closeModal="showModal = false" />
</template>

<script>
import CardItem from '~/components/CardItem'
import DetailModal from '~/components/DetailModal'

export default {
  components:{
    CardItem,
    DetailModal
  },
  data(){
    return {
      showModal : false
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
    }
  }
}
</script>

<style lang="scss" scoped>
.inner{position:relative;
  .list-card{display:flex;flex-wrap:wrap;justify-content:space-between;}
}
</style>