import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './Home'
import Movie from './Movie'
import About from './About'
import Account from './Account'
import MyPage from './MyPage'
import RentApply from './RentApply'
import ChangePw from './ChangePw'
import Login from './Login'


export default createRouter({
    //Hash 모드
    history: createWebHashHistory(),

    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/movie',
            component: Movie
        },
        {
            path: '/about',
            component: About
        },
        {
            path: '/account',
            component: Account
        },
        {
            path: '/mypage',
            component: MyPage
        },
        {
            path: '/rentApply',
            component: RentApply
        },
        {
            path: '/changepw',
            component: ChangePw
        },
        {
            path: '/login',
            component: Login
        }
    ]
})