//app.js(user)

import router from "./router/router.js";

const { createApp } = Vue
const template=`
<div>
    <router-link v-bind:to="{ name : 'home' }">Home</router-link>
    || <router-link v-bind:to="{ path : '/userList' }">전체조회</router-link>
    <router-view :key="$route.fullPath" />
</div>
`;

createApp({
    template
})
.use(router)
.mount('#app');