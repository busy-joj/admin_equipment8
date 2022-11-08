import { api } from '~/api/api'
import VueCookies from 'vue-cookies'

const _defaultMsg = "완료되었습니다."

export default{
    namespaced:true,
    state:()=>({
        succesedMsg:_defaultMsg
    }),
    getters:{},
    mutations:{

        LOGIN_SUCCESS (state, payload) {
            console.log('members.js > mutations > LOGIN_SUCCESS', 'state', state, 'payload', payload)
    
            VueCookies.set('accessToken', payload.access_token, '1d')
            // VueCookies.set('refreshToken', payload.refreshToken, '1h')
    
            // 스토어에 액세스 토큰 저장
            state.accessToken = payload.access_token
            // state.refreshToken = payload.refreshToken
    
            // 모든 HTTP 요청 헤더에 Authorization 을 추가한다.
            // service.defaults.headers.common['Authorization'] = `Bearer ${payload.accessToken}`;
          },
          refreshToken(state, payload) { //accessToken 재셋팅
            console.log('mutations.js refreshToken', 'state', state, 'payload', payload)
            VueCookies.set('accessToken', payload.accessToken, '60s')
            VueCookies.set('refreshToken', payload.refreshToken, '1h')
            state.accessToken = payload;
          },
          removeToken () {
            console.log('mutations.js removeToken')
            VueCookies.remove('accessToken')
            VueCookies.remove('refreshToken')
          },

    },
    actions:{

        LOGIN: ({commit}, params) => {
            console.log('members.js > actions > LOGIN', params)
    
            return new Promise((resolve, reject) => {
              api.signIn(params).then(response => {
                console.log('actions login response', response)
                if (response && response.status == 200) {
                    if (response.data) {
                        if (response.data.access_token) {
                          // LOGIN 변이 실행
                          commit('LOGIN_SUCCESS', response.data)
                          resolve(response.data)
                        } 
                    }
                }
            }).catch(error => {
                    console.log('actions login catch error', error)
                    alert('TODO 예외 발생')
                    reject(error.message)
                })
            })
        },

        LOGOUT: ({commit}) => { // 로그아웃
            console.log('members.js > actions > LOGOUT', commit)
            commit('logout')
            location.reload()
        }

    }
}