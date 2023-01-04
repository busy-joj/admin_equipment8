<template>
  <div>
    <div class="equip-list input-box">
      <h3>신규 장비 등록</h3>
      <div class="equip-list-item">
        <form action="">
            <div class="item md">
                <label for="">장비명</label>
                <input type="text" id=""  class="form-control" placeholder="제품명을 입력하세요" required>
            </div>
            <div class="item md">
                <label for="">OS</label>
                <input type="text" id=""  class="form-control" placeholder="OS버전을 입력하세요" required>
            </div>
            <div class="item md">
                <label for="">장비종류</label>
                <select class="form-select" aria-label="example" required>
                    <option value="" disabled selected>종류를 선택해주세요.</option> <!-- placeholder  -->
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
            <div class="item md">
                <label for="">모델번호</label>
                <input type="text" id=""  class="form-control"  required>
            </div>
            <div class="item md">
                <label for="">시리얼번호</label>
                <input type="text" id=""  class="form-control"  required>
            </div>
            <div class="item md">
                <label for="">사용 여부</label>
                <select class="form-select" aria-label="example" required>
                    <option value="" disabled selected>사용여부를 선택해주세요.</option> <!-- placeholder  -->
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
            <div class="item md">
                <label for="">제조사</label>
                <input type="text" id=""  class="form-control" placeholder="OS버전을 입력하세요" required>
            </div>
            <div class="item md">
                <InputDate>
                    <template v-slot:tit>
                        <span class="txt">구입일&#40;인수일&#41;</span>
                    </template>
                    <template v-slot:date>
                        <Datepicker v-model="date"/>
                    </template>
                </InputDate>
            </div>
            <div class="item">
                <label for="">wifi MAC 주소</label>
                <input type="text" id=""  class="form-control" placeholder="" required>
            </div>
            <div class="item">
                <label for="">비고</label>
                <textarea cols="50" rows="5" class="form-control"></textarea>
            </div>
        </form>
      </div>            
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Datepicker from "vue3-datepicker";
import InputDate from '~/components/basic/InputDate'

import { isProxy, toRaw } from 'vue'
// import VueCookies from 'vue-cookies'

export default {
    components:{
        Datepicker,
        InputDate
    },
    data(){
        return{
            succeed:false,
            date: new Date()
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

.equip-list-item{
    form{display:flex;flex-direction:row;gap:24px;flex-wrap:wrap;justify-content:space-between;
        .item{width:100%;margin:0;
            &.md{width:280px;}
            .form-select{
                option:disabled{display:none;}
            }
        }
    }
}
</style> 