//router.js
import HomeComponent from '../views/home.js';
import PostListComponent from '../views/postList.js';
import PostInfoComponent from '../views/postInfo.js';
import PostInsertComponent from '../views/postInsert.js';
import PostUpdateComponent from '../views/postUpdate.js';
import NotFoundComponent from '../views/404page.js';
import PostFormComponent from '../views/postForm.js';

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
        path : "/:pathMatch(.*)*",
        redirect: "/NotFound"
    },
    {
        path : '/NotFound',
        name : 'NotFound',
        component : NotFoundComponent
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
    {
        path : '/postInsert',
        name : 'postInsert',
        component : PostInsertComponent
    },
    {
        path : '/postUpdate',
        name : 'postUpdate',
        component : PostUpdateComponent
    },
    {
        path : '/postForm',
        name : 'postForm',
        component : PostFormComponent
    }
]

const router = createRouter({
    history : createWebHistory(),
    routes
})

export default router;