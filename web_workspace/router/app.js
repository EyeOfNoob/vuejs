//app.js

import router from './router/router.js';

import HeaderComponent from './layouts/header.js';
import FooterComponent from './layouts/footer.js';

const { createApp } = Vue

const template=`
    <div>
        <HeaderComponent />
    <!-- <router-link v-bind:to="{ path : '/home' }">Home</router-link><p /> -->
    <!-- <router-link to="/home">Home</router-link><p /> -->
        <router-view :key="$route.fullPath" />
        <FooterComponent />
    </div>
`;

createApp({ //루트컴포넌트
    template,
    components : {
        HeaderComponent,
        FooterComponent
    }
})
.use(router)
.mount('#app');

