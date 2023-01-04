<template>
    <div>
        <slot name="content"></slot>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import { isProxy, toRaw } from 'vue'
// import VueCookies from 'vue-cookies'

export default {
    components:{},
    data(){
        return{}
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
.collapse{position:fixed;top:64px;right:0;width:668px;height:100%;background:#fff;box-shadow:0px 4px 8px rgba(0,0,0,.24);z-index: 50;padding:40px;overflow-y:auto;
    &::-webkit-scrollbar{display:none !important;}
}
</style> 