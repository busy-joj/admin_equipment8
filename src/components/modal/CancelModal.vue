<template>
  <div>
    <div class="modal-content">
      <div class="modal-body">
        <p>해당 기기를 신청 목록에서<br />삭제하시겠습니까?</p>
      </div>
      <div class="modal-footer">
        <BasicButton
          :class="{primary : true, lg: true}"
          @click="deleteEquipment">
          삭제
        </BasicButton>
        <BasicButton
          :class="{white : true, lg: true}"
          @click="closeModal">
          취소
        </BasicButton>
      </div>
    </div>
  </div> 
</template>

<script>
import BasicButton from '~/components/basic/BasicButton'
export default {
    components:{
        BasicButton
    },
    props: {
        equipmentInfo: {
            type: Object,
            default() {
                return {
                    id: '0', 
                    name: '', // 기기명
                    manufacturer: '', // 제조사
                    os: '', // OS
                    type: '', // 장비종류
                    modelNumber: '', // 모델 번호
                    serialNumber: '', // 시리얼 번호
                    purchaseDate: '', // 구입일(인수일)
                    description: '', // 비고 : 구입일 모름(인수일 기재) 본사에서 구입(라디오)
                    user: '',
                    date: '',
                    isSelected: false, 
                    isRented: false,
                    endRentalDate: '',
                    rentalUser: ''
                }
            }
        },
    },
    methods: {
        deleteEquipment() {
            console.log('CancelModal.vue deleteEquipment', this.equipmentInfo)
            this.$emit('deleteEquipment', this.equipmentInfo)
        },
        closeModal() {
            console.log('CancelModal.vue closeModal')
            this.$emit('closeModal')
        }
    }
}
</script>

<style lang="scss" scoped>
.detail-info{
    position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.32);display:flex;align-items:center;justify-content:center;z-index:80;
    .modal-content{width:328px;padding:40px 16px 24px 16px;border:1px solid $M-gray3;background:#fff;border-radius:4px;
        .modal-body{text-align: center;
            p{font-size:16px;font-weight:bold;margin-bottom:40px;}
        }
        .modal-footer{border-top:none;
            button{margin:0;
                &:first-child{margin-bottom:16px;}
            }
        }
    }
}
</style>