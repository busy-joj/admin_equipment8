import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

// common 페이지
import Main from './common/Main'
import MyPage from './common/MyPage'

import SignIn from './common/SignIn'
import SignUp from './common/SignUp'
import SignFind from './common/SignFind'
import ChangePw from './common/ChangePw'
import Success from './common/Success'
import RentRequestDone from './common/RentRequestDone'

// 관리자 nav 페이지
import AdminEquip from './admin/AdminEquip'
import AdminRent from './admin/AdminRent'
import AdminTake from './admin/AdminTake'
import AdminAccount from './admin/AdminAccount'

function parseJwt (token) {
    console.log('index.js token', token)
    var base64Url = token.split('.')[1]
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
    }).join(''))

    return JSON.parse(jsonPayload)
}

// NavigationGuard
const requireAuth = () => (from, to, next) => {
    // const token = localStorage.getItem('user_token')
    const accessToken = localStorage.getItem('access_token')

    if (accessToken) {
        const payload = parseJwt(accessToken)
        if (payload.exp < Date.now() / 1000) { // 액세스토큰 만료
            localStorage.removeItem('access_token')
            next('/')
        } else {  // 페이지 이동
            return next()
        }
    } else {
        next('/') // 로그인 화면으로 이동
    }

    // const isAuthenticated = false
    // if (isAuthenticated) return next()
    // next('/?returnPath=main')
}

export default createRouter({
    //Hash 모드
    history: createWebHashHistory(),

    // history: createWebHistory(),

    routes: [
        {
            path: '/',
            component: SignIn
        },
        {
            path: '/signup',
            component : SignUp
        },
        {
            path: '/signFind',
            component : SignFind
        },
        {
            path: '/main',
            component: Main,
            beforeEnter: requireAuth()
        },
        {
            path: '/mypage',
            component: MyPage,
            beforeEnter: requireAuth(),
            props: true
        },
        {
            path: '/success',
            component : Success,
            beforeEnter: requireAuth()
        },
        {
            path: '/rent/request/done',
            component : RentRequestDone,
            beforeEnter: requireAuth()
        },
        {
            path: '/changepw',
            component: ChangePw
        },
        // 관리자 nav 페이지
        {
            path: '/adminEquip',
            component: AdminEquip
        },
        {
            path: '/adminRent',
            component: AdminRent
        },
        {
            path: '/adminTake',
            component: AdminTake
        },
        {
            path: '/adminAccount',
            component: AdminAccount
        }
    ]
})