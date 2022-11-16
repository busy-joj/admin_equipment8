import { api } from '~/api/api'
// import VueCookies from 'vue-cookies'

const _defaultMsg = "완료되었습니다."

export default{
    namespaced:true,
    state:()=>({
        succesedMsg:_defaultMsg,
        loggedIn: false,
        administrator: false,
        user: {
            name: ''
        }
    }),
    getters:{
        // parseJwt: function(token) {
        //     console.log('[common.js][parseJwt]', token)
        //     var base64Url = token.split('.')[1]
        //     var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
        //     var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        //         return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
        //     }).join(''))
    
        //     return JSON.parse(jsonPayload)
        // }
    },
    mutations:{

        LOGIN_SUCCESS(state, payload) {
            console.log('members.js > mutations > LOGIN_SUCCESS', 'state', state, 'payload', payload)

            localStorage.setItem('access_token', payload.access_token)

            // VueCookies.set('accessToken', payload.access_token, '1d')
            // VueCookies.set('refreshToken', payload.refreshToken, '1h')

            // 스토어에 액세스 토큰 저장
            // state.accessToken = payload.access_token
            // state.refreshToken = payload.refreshToken

            // 모든 HTTP 요청 헤더에 Authorization 을 추가한다.
            // service.defaults.headers.common['Authorization'] = `Bearer ${payload.accessToken}`;

            var base64Url = payload.access_token.split('.')[1]
            var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
            var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
            }).join(''))
            var result = JSON.parse(jsonPayload)

            state.loggedIn = true

            if (result) {
                console.log('LOGIN_SUCCESS result', result)
                if (result.authorities) {
                    result.authorities.forEach((authentication) => {
                        console.log('authentication', authentication)
                        console.log('authentication.authority', authentication.authority)
                        if (authentication.authority == 'ROLE_MASTER') {
                            console.log('ROLE_MASTER')
                            state.administrator = true
                        }
                    })
                }
            }

            state.loggedIn = true
            state.user.name = result.name

            console.log('LOGIN_SUCCESS state.user.name', state.user.name)
        },

        LOGIN_FAIL(state, payload) {
            console.log('members.js > mutations > LOGIN_FAIL', 'state', state, 'payload', payload)
            state.loggedIn = false
            state.administrator = false
            state.user.name = ''
        },

        TOKEN_REFRESH(state, payload) { //accessToken 재셋팅
            console.log('mutations.js TOKEN_REFRESH', 'state', state, 'payload', payload)
            // VueCookies.set('accessToken', payload.accessToken, '60s')
            // VueCookies.set('refreshToken', payload.refreshToken, '1h')

            localStorage.setItem('access_token', payload.access_token)
            state.accessToken = payload
        },

        TOKEN_REMOVE(state) {
            console.log('mutations.js TOKEN_REMOVE')
            // VueCookies.remove('accessToken')
            // VueCookies.remove('refreshToken')

            localStorage.removeItem('access_token')

            state.loggedIn = false
            state.administrator = false
            state.user.name = ''
        },

    },
    actions:{

        LOGIN: ({commit}, params) => {
            console.log('members.js > actions > LOGIN', params)
    
            return new Promise((resolve, reject) => {
              api.signIn(params).then(response => {
                console.log('actions login response', response)
                if (response) {
                    if (response.isSuccessful) { // LOGIN 변이 실행
                        console.log('actions login if')
                        commit('LOGIN_SUCCESS', response.data)
                        resolve(response.data)
                    } else {
                        console.log('actions login else')
                        commit('LOGIN_FAIL')
                        reject(response.error)
                    }
                } else {
                    console.log('Internal Server Error')
                    commit('LOGIN_FAIL')
                    reject()
                }
            }).catch(error => {
                    console.log('actions login catch error', error)
                    commit('LOGIN_FAIL')
                    reject(error)
                })
            })
        },

        LOGOUT: ({commit}) => { // 로그아웃
            console.log('members.js > actions > LOGOUT', commit)
            commit('TOKEN_REMOVE')
        }

    }
}