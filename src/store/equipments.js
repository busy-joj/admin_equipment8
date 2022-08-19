import axios from 'axios'

const _successdMsg = '완료되었습니다.'

export default{
    namespaced:true,
    state:()=>({
        applyList : [],
        successdMsg : _successdMsg,
        loading : false,
        keyword : '',
        countItem : 0

    }),
    getters:{},
    mutations:{
        updateState(state, payload){
            state.keyword = payload.keyword
            state.applyList = payload.applyList
            state.countItem = payload.countItem
            console.log(state.applyList,'셀렉트')
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
        selectEquipment({ state, commit }, payload){
            const res = {...payload}
            commit('updateState',{
                applyList : res.applyList,
                countItem : res.countItem,
            })
            console.log(state.applyList,'셀렉트')
        },
        rejectEquipment({ state, commit }, payload){}
    }
}