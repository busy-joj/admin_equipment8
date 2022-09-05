import axios from 'axios'

const _successdMsg = '완료되었습니다.'

export default{
    namespaced:true,
    state:()=>({
        equipmentList: [],
        applyList : [],
        successdMsg : _successdMsg,
        loading : false,
        keyword : '',
        countSearchItem:0,
        countApplyItem : 0

    }),
    getters:{},
    mutations:{
        updateState(state, payload){
            Object.keys(payload).forEach(key => {
                state[key] = payload[key]
            })
        }
    },
    actions:{
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