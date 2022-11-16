<template>
  <div class="inner">
    <div class="list-card apply">
      <CardItem
        v-for="equipment in applyList"
        :key="equipment" 
        :equipment="equipment" 
        @click="handlePreventEvent($event)" 
        @showModal="handleShowModal(equipment)" />
    </div>
  </div>
  <CancelModal
    v-if="showModal"
    class="detail-info" 
    :equipment-info="equipmentInfo" 
    @deleteEquipment="handleDeleteEquipment"
    @closeModal="handleCloseModal" />
</template>

<script>
import CardItem from '~/components/basic/CardItem'
import CancelModal from '~/components/modal/CancelModal'

import { mapState } from 'vuex'

export default {
  components:{
    CardItem,
    CancelModal
  },
  data(){
    return {
      showModal : false,
      equipmentInfo: {}
    }
  },
  computed: {
    ...mapState('equipments', [
        'countApplyItem',
        'applyList'
      ])
  },
  props:{
    // 대여 신청할 기기목록
    applyList: {
      type: Array,
      default: () => []
    }
  },
  methods:{
    linkPrevent(e){
      e.preventDefault();
    },

        /**
     * 대여 신청할 기기목록의 CardItem 영역 중 X 버튼 외 영역 클릭 시 이벤트 방지
     *
     * @param {Event} e 이벤트 객체
     */
     handlePreventEvent(e) {
      e.preventDefault()
    },

    /**
     * <해당 기기를 신청 목록에서 삭제하시겠습니까?> 모달 열기
     *
     * @param {Object} selectedItem 대여 신청할 기기목록 중 신청 목록에서 삭제할 기기
     */
    handleShowModal(selectedItem) {
      this.equipmentInfo = selectedItem
      this.modalShow()
      console.log('ApplyCardList.vue handleShowModal', selectedItem)
    },

    handleCloseModal() {
      this.modalHide()
      console.log('ApplyCardList.vue handleCloseModal')
    },

    /**
     * <해당 기기를 신청 목록에서 삭제하시겠습니까?> 모달 내부 삭제 버튼 액션 수행
     *
     * @param {Object} selectedItem 대여 신청할 기기목록 중 신청 목록에서 삭제할 기기
     */
    handleDeleteEquipment(selectedItem) {

      console.log('ApplyCardList.vue handleDeleteEquipment', selectedItem)

      const index = this.applyList.findIndex(equipment => equipment.id === selectedItem.id)
      this.applyList.splice(index, 1)
      this.$store.commit('equipments/updateState', {
        applyList : this.applyList,
        countApplyItem : this.applyList.length
      })

      this.modalHide()

      this.$emit('deleteEquipment', selectedItem) // Collapse.vue (Parent Component)
      if (this.applyList.length == 0) {
        this.$emit('triggerCollapse') // Collapse.vue (Parent Component)
      }
    },

    // 모달 열기 플래그 값 업데이트
    modalShow() {
      this.showModal = true
    },

    // 모달 닫기 플래그 값 업데이트
    modalHide() {
      this.showModal = false
    }
  }
}
</script>

<style lang="scss" scoped>
.inner{position:relative;
  .list-card{display:flex;flex-wrap:wrap;justify-content:space-between;gap:24px;}
}
</style>