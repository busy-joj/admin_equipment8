<template>
  <div class="table-box">
    <table>
      <thead class="table-header">
        <tr>
          <slot name="thead"></slot>
        </tr>
      </thead>
      <tbody class="table-body">
        <template
          v-for="row in list"
          :key="row">
          <tr>
            <slot
              name="tlist"
              :row="row"></slot>
          </tr>
        </template>
        <tr v-if="list.length === 0">
          <td
            colspan="30"
            class="txt-center">
            신청 내역이 없습니다.
          </td>
        </tr>
      </tbody>
    </table>    
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
    // props: {
    //     list: {
    //         type: Array,
    //         default: () => []
    //     }
    // },
    created() {
        console.log('created', this.list)
        this.fetchRentalHistory()
    },
    data() {
        return {
          // 더미 데이터
          list: [
              // {no:1,equipment:'Galaxy A9 pro', device: '폰', OS:'Android 12', start:'2022.6.23',end:'2022.6.28',ModelNo:'SM-G997N',serialNo:'R59M107TG'},
              // {no:2,equipment:'Galaxy A10 pro', device: '폰', OS:'Android 12', start:'2022.6.23',end:'2022.6.28',ModelNo:'SM-G997N',serialNo:'R59M107TG'},
              // {no:3,equipment:'Galaxy 11 pro', device: '폰', OS:'Android 12', start:'2022.6.23',end:'2022.6.28',ModelNo:'SM-G997N',serialNo:'R59M107TG'},
              // {no:4,equipment:'Galaxy 12 pro', device: '폰', OS:'Android 12', start:'2022.6.23',end:'2022.6.28',ModelNo:'SM-G997N',serialNo:'R59M107TG'},
              // {no:5,equipment:'Galaxy 13 pro', device: '폰', OS:'Android 12', start:'2022.6.23',end:'2022.6.28',ModelNo:'SM-G997N',serialNo:'R59M107TG'},
              // {no:6,equipment:'Galaxy 14 pro', device: '폰', OS:'Android 12', start:'2022.6.23',end:'2022.6.28',ModelNo:'SM-G997N',serialNo:'R59M107TG'},
              // {no:7,equipment:'Galaxy 15 pro', device: '폰', OS:'Android 12', start:'2022.6.23',end:'2022.6.28',ModelNo:'SM-G997N',serialNo:'R59M107TG'},
              // {no:8,equipment:'Galaxy 16 pro', device: '폰', OS:'Android 12', start:'2022.6.23',end:'2022.6.28',ModelNo:'SM-G997N',serialNo:'R59M107TG'},
              // {no:9,equipment:'Galaxy A9 pro', device: '폰', OS:'Android 12', start:'2022.6.23',end:'2022.6.28',ModelNo:'SM-G997N',serialNo:'R59M107TG'},
              // {no:10,equipment:'Galaxy A9 pro', device: '폰', OS:'Android 12', start:'2022.6.23',end:'2022.6.28',ModelNo:'SM-G997N',serialNo:'R59M107TG'}
          ]
        }
    },
    computed: {
        ...mapGetters('equipments', [
            'getRentalHistoryList',
        ])
    },
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

                    var _rentals = []
                    var _rental = {
                      no:10,
                      equipment:'Galaxy A9 pro', 
                      device: '폰', 
                      OS:'Android 12', 
                      start:'2022.6.23',
                      end:'2022.6.28',
                      ModelNo:'SM-G997N',
                      serialNo:'R59M107TG',
                      rentalStatusText:''
                    }
                    // 신청완료, 대여중, 연체

                    response.forEach((row, i) => {
                      console.log(row)

                      _rental.no = i+1
                      _rental.equipment = row.deviceName
                      // _rental.device = row.deviceType
                      _rental.OS = row.osName
                      _rental.start = row.startRentalDate
                      _rental.end = row.endRentalDate
                      _rental.ModelNo = row.deviceModelNumber
                      _rental.serialNo = row.deviceSerialNumber

                      var deviceTypeText = ''
                      if (row.deviceType == 'phone') {
                        deviceTypeText = '휴대폰'
                      }
                      if (row.deviceType == 'tablet') {
                        deviceTypeText = '태블릿'
                      }
                      if (row.deviceType == 'etc') {
                        deviceTypeText = '기타'
                      }
                      _rental.device = deviceTypeText

                      var rentalStatusText = ''
                      if (row.rentalStatus == 1) {
                        rentalStatusText = '신청 완료'
                      }
                      if (row.rentalStatus == 2) {
                        rentalStatusText = '대여중'
                      }
                      if (row.rentalStatus == 3) {
                        rentalStatusText = '연체'
                      }
                      _rental.rentalStatusText = rentalStatusText

                      var _copied = Object.assign({}, _rental)
        
                      _rentals.push(_copied) 
                    })

                    this.list = _rentals
                }) 
            }


        }
    }
}
</script>

<style lang="scss" scoped>
.table-box{margin-top:24px;border:1px solid $M-gray3;border-radius:4px;padding:8px 16px;width:100%;
    table{width:100%;text-align:center;font-size:14px;color:$M-gray5;
        tr{border-bottom:1px solid $M-gray3;
            // &:last-child{border:none;}
        }
        th{padding:13px 0;}
        .table-header{
            tr{font-weight:bold;color:$M-gray5;}
        }
        .table-body{
            tr:last-child{border-bottom:none;}
            .txt-center{text-align: center;padding:21px 0 13px;}
        }
    }
}
</style>