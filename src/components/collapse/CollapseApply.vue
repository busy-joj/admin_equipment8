<template>
  <div>
    <div class="apply-list">
      <h3>대여 신청할 기기목록</h3>
      <div class="apply-list-item">
        <ApplyCardList
          :apply-list="applyList"
          @triggerCollapse="handleCollapsed"
          @deleteEquipment="handleDeleteEquipment" />
      </div>            
    </div>
    <div class="apply-date">
      <h3>대여 기간</h3>
      <div class="datepicker-box">
        <InputDate>
            <template v-slot:tit>
                <span class="txt">시작일</span>
            </template>
            <template v-slot:date>
                <Datepicker 
                v-model="startDate"
                @update:modelValue="handleRentalEndDate" />
            </template>
        </InputDate>
        <InputDate>
            <template v-slot:tit>
                <span class="txt">대여일</span>
            </template>
            <template v-slot:date>
                <Datepicker 
                v-model="startDate"
                @update:modelValue="handleRentalEndDate" />
            </template>
        </InputDate>
        
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import Datepicker from "vue3-datepicker";
import InputDate from '~/components/basic/InputDate'
import ApplyCardList from '~/components/main/ApplyCardList'

import { isProxy, toRaw } from 'vue'
// import VueCookies from 'vue-cookies'

export default {
    components:{
        Datepicker,
        InputDate,
        ApplyCardList
    },
    data(){
        return{
            succeed:false,
            startDate: new Date(),
            endDate: new Date()
        }
    },
    computed:{
    ...mapState('equipments',[
        'countApplyItem',
        'applyList'
        ])
    },
    methods:{
        collapse(){
            this.isCollapse = !this.isCollapse
        },
        handleSubmit(){
            console.log('Collapse.vue handleSubmit')

            let deviceIds = []

            let rawData = this.applyList

            if (isProxy(rawData)) {
                rawData = toRaw(rawData)
            }

            rawData.forEach((device) => {
                deviceIds.push(device.id)
            })

            // const accessToken = VueCookies.get('accessToken')
            const accessToken = localStorage.getItem('access_token')

            if (accessToken) {
                const decoded = this.$parseJwt(accessToken)
                const params = {
                    userId: Number(decoded.uid),
                    deviceIds: deviceIds,
                    startDate: this.$formatDate(this.startDate),
                    endDate: this.$formatDate(this.endDate),
                }

                this.$store.dispatch('equipments/EQUIPMENT_RENTAL_REQUEST', params)
                .then(response => {
                    console.log('Collapse.vue handleSubmit Success then response', response)
                    this.$router.replace('/rent/request/done')
                }).catch(error => {
                    console.log('11111 catch error', error)
                    if (error.details) {
                        error.details.forEach((target, i) => {
                            console.log('error.details target: ' + target.message + ' | index: ' + i)
                        })
                    }
                })
            }

        },

        handleCollapsed() {
            console.log('Collapse.vue handleCollapsed')
            this.isCollapse = !this.isCollapse
        },

        /**
         * <해당 기기를 신청 목록에서 삭제하시겠습니까?> 모달 내부 삭제 버튼 액션 수행
         *
         * @param {Object} selectedItem 대여 신청할 기기목록 중 신청 목록에서 삭제할 기기
         */
         handleDeleteEquipment(selectedItem) {
            console.log('Collapse.vue handleDeleteEquipment')
            selectedItem.isSelected = false
            this.$emit('deleteEquipment', selectedItem)
        },

        /**
         * DatePicker 대여 기간 변경 시 액션 수행
         *
         * @param {Date} date 변경할 대여 기간 (시작일, 종료일)
         */
        onChangeDatePicker(date) {
            console.log('Collapse.vue onChangeDatePicker date', date)
            this.startDate = date.start
            this.endDate = date.end
        },

        

    }
}
</script>

<style lang="scss" scoped>
h3{margin-bottom:24px;}
.apply-date{min-height:500px;margin:80px 0 0 0;
    .datepicker-box{display:flex;gap:24px;}
}
</style> 