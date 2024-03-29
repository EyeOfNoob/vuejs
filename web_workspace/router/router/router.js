//router.js
import HomeComponent from '../views/home.js';
import PostListComponent from '../views/postList.js';
import PostInfoComponent from '../views/postInfo.js';

const { createRouter, createWebHistory } = VueRouter

let routes = [
    {
        path : '/index.html', //정규식
        redirect : '/'
    },
    {
        path : '/',
        name : 'home',
        component : HomeComponent
    },
    {
        path : '/postList',
        name : 'postlist',
        component : PostListComponent
    },
    {
        path : '/postInfo',
        // path : '/postInfo/:id', <=패스배리어블용
        name : 'postInfo',
        component : PostInfoComponent
    },
]

const router = createRouter({
    history : createWebHistory(),
    routes
})

export default router;