<template>
  <BasicTable>
    <template #thead>
      <th width="9.5%">No.</th>
      <th width="15.5%">장비명</th>
      <th width="9.5%">상태</th>
      <th width="13%">OS</th>
      <th width="13%">대여 시작일</th>
      <th width="13.5%">반납 예정일</th>
      <th width="15%">모델(유심)번호</th>
      <th width="">시리얼 번호</th>
    </template>
    <template #tlist="{row}">
      <td>{{ row.no }}</td>
      <td>{{ row.equipment }}</td>
      <td>{{ row.rentalStatusText }}</td>
      <td>{{ row.OS }}</td>
      <td>{{ row.start }}</td>
      <td>{{ row.end }}</td>
      <td>{{ row.ModelNo }}</td>
      <td>{{ row.serialNo }}</td>
    </template>
  </BasicTable>
</template>

<script>
import  BasicTable from '~/components/basic/BasicTable'

// import { mapState, mapGetters } from 'vuex'

export default {
    components:{
        BasicTable
    },

    created() {
        console.log('MyApplyList.vue created')
    },
    // data() {
    //     return {
    //         rentalHistoryList: []
    //     }
    // },
    // computed: {
    //     ...mapGetters('equipments', [
    //         'getRentalHistoryList',
    //     ])
    // },
    methods: {
        fetchRentalHistory() {
            console.log('MyApplyList.vue methods fetchRentalHistory')

            const accessToken = localStorage.getItem('access_token')

            if (accessToken) {
                const decoded = this.$parseJwt(accessToken)
                const params = {
                    userId: Number(decoded.uid),
                }

                this.$store.dispatch('equipments/EQUIPMENT_RENTAL_HISTORY', params)
                .then(response => {
                    console.log('response', response)
                    console.log('this.getRentalHistoryList', this.getRentalHistoryList)
                }) 
            }


        }
    }
}
</script>

<style lang="scss" scoped>
th:first-child{text-align:center !important;}
</style>