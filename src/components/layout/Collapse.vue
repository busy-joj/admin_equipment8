<template>
  <div
    id="collapseApply"
    :class="{'collapse':true,'apply':true,'show':isCollapse}">
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
        <DatePicker 
          :start-date="startDate" 
          :end-date="endDate" 
          @onChangeDatePicker="onChangeDatePicker" />
      </div>
    </div>
    <div class="apply-btns">
      <BasicButton
        @click="handleSubmit"
        :class="{primary : true, lg:true , 'btn-cart-submit':true}"
        type="submit">
        <span class="icon"></span>신청하기<span class="selected-num">{{ countApplyItem }}</span>
      </BasicButton>
      <BasicButton
        @click="handleCollapsed"
        :class="{white : true, lg:true , 'btn-cart-close':true}"
        data-bs-toggle="collapse"
        data-bs-target="#collapseApply"
        :aria-expanded="!accessibility"
        aria-controls="collapseApply">
        닫기
      </BasicButton>
    </div>
  </div>

  <BasicButton
    @click="handleCollapsed"
    :class="{primary : true, mn: true, 'btn-cart':true}"
    v-show="0 < countApplyItem"
    data-bs-toggle="collapse"
    data-bs-target="#collapseApply"
    :aria-expanded="accessibility"
    aria-controls="collapseApply">
    <span class="icon"></span>신청하기<span class="selected-num">{{ countApplyItem }}</span>
  </BasicButton>
</template>

<script>
import { mapState } from 'vuex'

import BasicButton from '~/components/basic/BasicButton'
import DatePicker from '~/components/basic/DatePicker'
import ApplyCardList from '~/components/apply/ApplyCardList'

import { isProxy, toRaw } from 'vue'
// import VueCookies from 'vue-cookies'

export default {
    components:{
        BasicButton,
        DatePicker,
        ApplyCardList
    },
    data(){
        return{
            isCollapse : false,
            accessibility : false,
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
#collapseApply.apply{position:fixed;top:64px;right:0;width:668px;height:100%;background:#fff;box-shadow:0px 4px 8px rgba(0,0,0,.24);z-index: 50;padding:40px;overflow-y:auto;
    &::-webkit-scrollbar{display:none;}
    .apply-list{}
    .apply-date{min-height:500px;margin:80px 0 0 0;
        .datepicker-box{display:flex;gap:24px;}
    }
    h3{margin-bottom:24px;}
    .apply-btns{position:fixed;bottom:0;width:588px;padding-bottom:40px;background:#fff;
        .btn-cart-submit{display:flex;align-items:center;justify-content:center;margin-bottom:16px;font-weight:600;
            span{display:inline-block;
                &.icon{width:24px;height:24px;background:url(~/assets/icon-cart.png) center/100% no-repeat;margin-right:8px;}
                &.selected-num{margin-left:8px;background: #fff;color:$M-primary;border:1px solid $M-primary;line-height:18px;padding:0px 8px;border-radius: 16px;}
            }  
        }
        .btn-cart-close{font-weight:600;}
    }
}
.btn-cart{position:fixed;bottom:40px;right:40px;display:flex;align-items:center;border-radius:40px;font-weight:600;padding:15px 16px !important;z-index:10;
    span{display:inline-block;
        &.icon{width:24px;height:24px;background:url(~/assets/icon-cart.png) center/100% no-repeat;margin-right:8px;}
        &.selected-num{min-width:28px;margin-left:8px;background: #fff;color:$M-primary;border:1px solid $M-primary;line-height:18px;padding:0px 8px;border-radius: 16px;}
    }    
}
</style> 