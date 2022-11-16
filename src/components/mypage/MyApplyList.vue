<template>
  <BasicTable>
    <template #thead>
      <th>No.</th>
      <th>장비명</th>
      <th>상태</th>
      <th>종류</th>
      <th>OS</th>
      <th>대여 시작일</th>
      <th>반납 예정일</th>
      <th>모델(유심)번호</th>
      <th>시리얼 번호</th>
    </template>
    <template #tlist="tlist">
      <th>{{ tlist.row.no }}</th>
      <th>{{ tlist.row.equipment }}</th>
      <th>{{ tlist.row.rentalStatusText }}</th>
      <th>{{ tlist.row.device }}</th>
      <th>{{ tlist.row.OS }}</th>
      <th>{{ tlist.row.start }}</th>
      <th>{{ tlist.row.end }}</th>
      <th>{{ tlist.row.ModelNo }}</th>
      <th>{{ tlist.row.serialNo }}</th>
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
th{padding:13px 0;}
</style>