import { api } from '~/api/api'
import VueCookies from 'vue-cookies'

const _successdMsg = '완료되었습니다.'

export default{
    namespaced:true,
    state:()=>({
        equipmentList: [],
        applyList : [],
        successdMsg : _successdMsg,
        loading : false,
        tab : '',
        keyword : '',
        countSearchItem : 0,
        countApplyItem : 0
    }),
    getters:{

        getEquipmentList(state) {
            return state.equipmentList
        }

    },
    mutations:{
        updateState(state, payload){
            // Object.keys(payload).forEach(key => {
            //     state[key] = payload[key]
            // })

            state.applyList = payload.applyList
            state.countItem = payload.countItem
        },

        updateEquipmentList(state, payload) {
            console.log('equipments.js mutations updateEquipmentList')
            console.log('    > equipments.js mutations updateEquipmentList state', state)
            console.log('    > equipments.js mutations updateEquipmentList payload', payload)
            state.equipmentList = payload
            state.countSearchItem = payload.length
        },
    },
    actions:{

        // API - 장비목록 조회
        async EQUIPMENT_SEARCH({ state, commit }, payload) {

            console.log('equipments.js actions async searchEquipment state', state)
            console.log('equipments.js actions async searchEquipment commit', commit)
            console.log('    > equipments.js actions async searchEquipment payload', payload)

            const accessToken = VueCookies.get('accessToken')

            const response = await api.getDevices(payload, accessToken)

            var _equipmentList = []
            var _equipment = { 
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

            for (var key in response.data) {
                var _row = []
                _row = response.data[key]

                // console.log('_row', _row)

                _equipment.id = _row.deviceId // 기기 ID
                _equipment.model = _row.deviceName // 기기명
                _equipment.os = _row.deviceOsName // OS
                _equipment.type = _row.deviceType
                _equipment.manufacturer = _row.deviceManufacturer
                _equipment.serialNumber = _row.deviceSerialNumber
                _equipment.modelNumber = _row.deviceModelNumber

                _equipment.purchaseDate = _row.devicePurchaseDate

                _equipment.description = _row.deviceDescription

                _equipment.endRentalDate = _row.endRentalDate
                _equipment.rentalUser = _row.rentalUser

                // _equipment.description = _row.deviceDescription // 비고
                _equipment.user = _row.rentalUser // 대여자 이름
                _equipment.date = _row.endRentalDate // 반납예정일
                _equipment.status = _row.rentalStatus // 대여상태 [신청 완료(0) / 대여중(1) / 연체(2) / 반납완료(3) ]
                _equipment.isRented = _row.rentalId && _row.rentalId > 0 ? true : false // 대여여부

                var _copied = Object.assign({}, _equipment)

                _equipmentList.push(_copied) 
            }

            commit("updateEquipmentList", _equipmentList)
        },

        async searchEquipment({ state, commit }, payload){
            const res = payload.keyword
            commit('updateState',{
                keyword : res
            })
            console.log(state.keyword,'스토어')
        },
        rejectEquipment({ state, commit }, payload){}
    }
}