//app.js

import router from './router/router.js';

const { createApp } = Vue

const template=`
    <div>
    <!-- <router-link v-bind:to="{ path : '/home' }">Home</router-link><p /> -->
    <!-- <router-link to="/home">Home</router-link><p /> -->
        <router-link v-bind:to="{ name : 'home' }">Home</router-link>
        || <router-link v-bind:to="{ path : '/postList' }">전체조회</router-link>
        || <router-link v-bind:to="{ path : '/postInfo' }">단건조회</router-link>
        <router-view :key="$route.fullPath" />
    </div>
`;

createApp({ //루트컴포넌트
    template
})
.use(router)
.mount('#app');

