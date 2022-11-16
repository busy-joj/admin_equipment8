import { api } from '~/api/api'

const _successdMsg = '완료되었습니다.'

export default{
    namespaced:true,
    state:()=>({
        equipmentList: [],
        applyList : [],
        rentalHistoryList: [],
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
        },

        getRentalHistoryList(state) {
            return state.rentalHistoryList
        }

    },
    mutations:{

        EQUIPMENT_RENTAL_REQUEST_SUCCESS() {
            console.log('equipments.js mutations EQUIPMENT_RENTAL_REQUEST_SUCCESS')
        },

        EQUIPMENT_RENTAL_REQUEST_FAIL() {
            console.log('equipments.js mutations EQUIPMENT_RENTAL_REQUEST_FAIL')
        },

        EQUIPMENT_RENTAL_HISTORY_SUCCESS(state, payload) {
            console.log('equipments.js mutations EQUIPMENT_RENTAL_HISTORY_SUCCESS', payload)
            state.rentalHistoryList = payload
        },

        EQUIPMENT_RENTAL_HISTORY_FAIL() {
            console.log('equipments.js mutations EQUIPMENT_RENTAL_HISTORY_FAIL')
        },

        updateState(state, payload){
            // Object.keys(payload).forEach(key => {
            //     state[key] = payload[key]
            // })

            state.applyList = payload.applyList
            state.countApplyItem = payload.countApplyItem
        },

        updateEquipmentList(state, payload) {
            console.log('equipments.js mutations updateEquipmentList')
            console.log('    > equipments.js mutations updateEquipmentList state', state)
            console.log('    > equipments.js mutations updateEquipmentList payload', payload)
            state.equipmentList = payload
            state.countSearchItem = payload.length
            state.applyList = []
            state.countApplyItem = 0
        },
    },
    actions:{

        // API - 장비목록 조회
        async EQUIPMENT_SEARCH({ state, commit }, payload) {
            console.log('equipments.js actions EQUIPMENT_SEARCH')
            return new Promise((resolve, reject) => {

                console.log('equipments.js actions async EQUIPMENT_SEARCH state', state)
                console.log('equipments.js actions async EQUIPMENT_SEARCH commit', commit)
                console.log('    > equipments.js actions async EQUIPMENT_SEARCH payload', payload)
    
                api.getDevices(payload)
                // .then(response => response.data)
                .then(response => {
        
                    console.log('111 response', response)

                    var list = response && response.data ? response.data : []

                    console.log('list', list)

                    var _equipmentList = []
                    var _equipment = { 
                        id: '', 
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

                    for (var key in list) {
                        var _row = []
                        _row = list[key]
        
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
                    resolve(_equipmentList)

                })
                .catch(error => {
                    console.log('error', error)

                    if (error.response) {
                        // 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답했습니다.
                        console.log(error.response.data);
                        console.log(error.response.status);
                        console.log(error.response.headers);
                    }
                    else if (error.request) {
                        // 요청이 이루어 졌으나 응답을 받지 못했습니다.
                        // `error.request`는 브라우저의 XMLHttpRequest 인스턴스 또는
                        // Node.js의 http.ClientRequest 인스턴스입니다.
                        console.log(error.request);
                    }
                    else {
                        // 오류를 발생시킨 요청을 설정하는 중에 문제가 발생했습니다.
                        console.log('Error', error.message);
                    }

                    reject(error.message)
                })

            })
            
        },

        // API - 대여신청
        async EQUIPMENT_RENTAL_REQUEST({ commit }, payload) {
            console.log('equipments.js actions EQUIPMENT_RENTAL_REQUEST')
            return new Promise((resolve, reject) => {
                api.requestEquipmentRental(payload)
                .then(response => {
                    console.log('actions EQUIPMENT_RENTAL_REQUEST response', response)
                    if (response.isSuccessful) {
                        console.log('actions EQUIPMENT_RENTAL_REQUEST true')
                        commit('EQUIPMENT_RENTAL_REQUEST_SUCCESS')
                        resolve(response.data)
                    } else {
                        console.log('actions EQUIPMENT_RENTAL_REQUEST false')
                        commit('EQUIPMENT_RENTAL_REQUEST_FAIL')
                        reject(response.error)
                    }
                }).catch(error => {

                    console.log('catch error', error);

                    if (error.response) {
                        // 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답했습니다.
                        console.log(error.response.data);
                        console.log(error.response.status);
                        console.log(error.response.headers);
                    }
                    else if (error.request) {
                        // 요청이 이루어 졌으나 응답을 받지 못했습니다.
                        // `error.request`는 브라우저의 XMLHttpRequest 인스턴스 또는
                        // Node.js의 http.ClientRequest 인스턴스입니다.
                        console.log(error.request);
                    }
                    else {
                        // 오류를 발생시킨 요청을 설정하는 중에 문제가 발생했습니다.
                        console.log('Error', error.message);
                    }

                    // console.log(error.config);

                    console.log('actions EQUIPMENT_RENTAL_REQUEST catch error', error.response)

                    // alert('TODO 예외 발생')
                    reject(error.message)
                })
            })
        },

        // 일반사용자 > 대시보드 > 앱바 > 내 정보 : 신청 내역 조회
        async EQUIPMENT_RENTAL_HISTORY({ commit }, payload) {
            console.log('EQUIPMENT_RENTAL_HISTORY')
            return new Promise((resolve, reject) => {
                api.getRentalHistory(payload)
                .then(response => {
                    console.log('actions EQUIPMENT_RENTAL_HISTORY response', response)
                    if (response.isSuccessful) {
                        console.log('actions EQUIPMENT_RENTAL_HISTORY true')

                        var list = response && response.data ? response.data : []

                        var _rentalHistoryList = []
                        var _rentalHistory = { 
                            id: '', 
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

                        // for (var key in list) {
                        //     var _row = []
                        //     _row = list[key]
            
                        //     _equipment.id = _row.deviceId // 기기 ID
                        //     _equipment.model = _row.deviceName // 기기명
                        //     _equipment.os = _row.deviceOsName // OS
                        //     _equipment.type = _row.deviceType
                        //     _equipment.manufacturer = _row.deviceManufacturer
                        //     _equipment.serialNumber = _row.deviceSerialNumber
                        //     _equipment.modelNumber = _row.deviceModelNumber
            
                        //     _equipment.purchaseDate = _row.devicePurchaseDate
            
                        //     _equipment.description = _row.deviceDescription
            
                        //     _equipment.endRentalDate = _row.endRentalDate
                        //     _equipment.rentalUser = _row.rentalUser
            
                        //     // _equipment.description = _row.deviceDescription // 비고
                        //     _equipment.user = _row.rentalUser // 대여자 이름
                        //     _equipment.date = _row.endRentalDate // 반납예정일
                        //     _equipment.status = _row.rentalStatus // 대여상태 [신청 완료(0) / 대여중(1) / 연체(2) / 반납완료(3) ]
                        //     _equipment.isRented = _row.rentalId && _row.rentalId > 0 ? true : false // 대여여부
            
                        //     var _copied = Object.assign({}, _equipment)
            
                        //     _equipmentList.push(_copied) 
                        // }

                        commit('EQUIPMENT_RENTAL_HISTORY_SUCCESS', response.data)
                        resolve(response.data)
                    } else {
                        console.log('actions EQUIPMENT_RENTAL_HISTORY false')
                        commit('EQUIPMENT_RENTAL_HISTORY_FAIL')
                        reject(response.error)
                    }
                }).catch(error => {

                    console.log('catch error', error);

                    if (error.response) {
                        // 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답했습니다.
                        console.log(error.response.data);
                        console.log(error.response.status);
                        console.log(error.response.headers);
                    }
                    else if (error.request) {
                        // 요청이 이루어 졌으나 응답을 받지 못했습니다.
                        // `error.request`는 브라우저의 XMLHttpRequest 인스턴스 또는
                        // Node.js의 http.ClientRequest 인스턴스입니다.
                        console.log(error.request);
                    }
                    else {
                        // 오류를 발생시킨 요청을 설정하는 중에 문제가 발생했습니다.
                        console.log('Error', error.message);
                    }

                    // console.log(error.config);

                    console.log('actions EQUIPMENT_RENTAL_HISTORY catch error', error.response)

                    // alert('TODO 예외 발생')
                    reject(error.message)
                })
            })
        },

        rejectEquipment({ state, commit }, payload){}
    }
}