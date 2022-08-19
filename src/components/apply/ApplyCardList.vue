<template>
  <div class="inner">
    <div class="list-card apply">
      <CardItem v-for="equipment in applyList" :key="equipment" :equipment="equipment" @click="linkPrevent($event)" @showModal="showModal=true"/>
    </div>
  </div>

  <CancelModal v-if="showModal" class="detail-info" @closeModal="showModal = false" />
</template>

<script>
import CardItem from '~/components/basic/CardItem'
import CancelModal from '~/components/modal/CancelModal'

export default {
  components:{
    CardItem,
    CancelModal
  },
  data(){
    return {
      showModal : false
    }
  },
  props:{
    applyList:Array
  },
  methods:{
    linkPrevent(e){
      e.preventDefault();
    }
  }
}
</script>

<style lang="scss" scoped>
.inner{position:relative;
  .list-card{display:flex;flex-wrap:wrap;justify-content:space-between;}
}
</style>