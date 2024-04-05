//router.js

import HomeComponent from '../views/home.js';
import UserListComponent from '../views/userList.js';
import UserInfoComponent from '../views/userInfo.js';
import UserInsertComponent from '../views/userInsert.js';
import UserUpdateComponent from '../views/userUpdate.js';

const { createRouter, createWebHistory } = VueRouter

let routes = [
    {
        path : '/index.html',
        redirect : '/'
    },
    {
        path : '/',
        name : 'home',
        component : HomeComponent
    },
    {
        path : '/userList',
        name : 'userlist',
        component : UserListComponent
    },
    {
        path : '/userInfo',
        name : 'userInfo',
        component : UserInfoComponent
    },
    {
        path : '/userUpdate',
        name : 'userUpdate',
        component : UserUpdateComponent
    },
    {
        path : '/userInsert',
        name : 'userInsert',
        component : UserInsertComponent
    }
]

const router = createRouter({
    history : createWebHistory(),
    routes
})

export default router;