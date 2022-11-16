import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import Main from './Main'
import Movie from './Movie'
import About from './About'
import Account from './Account'
import MyPage from './MyPage'
import RentApply from './RentApply'
import ChangePw from './ChangePw'
import SignIn from './SignIn'
import SignUp from './SignUp'
import SignFind from './SignFind'
import Success from './Success'
import RentRequestDone from './RentRequestDone'
// import SignUp from './SignUp'
// import SignFind from './SignFind'

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
            path: '/movie',
            component: Movie
        },
        {
            path: '/about',
            component: About,
            beforeEnter: requireAuth()
        },
        {
            path: '/account',
            component: Account,
            beforeEnter: requireAuth()
        },
        {
            path: '/mypage',
            component: MyPage,
            beforeEnter: requireAuth(),
            props: true
        },
        {
            path: '/rentApply',
            component: RentApply
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
    ]
})