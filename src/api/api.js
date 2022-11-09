import service from "./service"
import { API } from "./config"

export const api = {
    signIn(loginData) {
        console.log('api signIn')
        return service.post(`${API.signIn}`, loginData)
    },

    signUp(params) {
      console.log('api signUp')
      return service.post(`${API.signUp}`, params)
    },

    getDevices(params, accessToken) {
      console.log('api getDevices accessToken', accessToken)
      return service.get(`${API.getDevices}`, { 
        // headers: {
        //   Authorization: 'Bearer ' + accessToken //the token is a variable which holds the token
        // },
        params: params
      })
    },

    // TODO 2022-11-03
    requestEquipmentRental(params, accessToken) {
      console.log('api requestEquipmentRental params', params)
      console.log('api requestEquipmentRental accessToken', accessToken)
      console.log('api requestEquipmentRental params.userId', params.userId)
      return service.post(`${API.requestEquipmentRental(params.userId)}`, params, { 
        // headers: {
        //   Authorization: 'Bearer ' + accessToken //the token is a variable which holds the token
        // }
      })
    }
}