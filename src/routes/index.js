import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './Home'
import Movie from './Movie'
import About from './About'
import Account from './Account'
import MyPage from './MyPage'


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
        }
    ]
})