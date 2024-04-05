//app.js(user)

import router from "./router/router.js";

import HeadComponent from './layouts/header.js';
import FootComponent from './layouts/footer.js';

const { createApp } = Vue
const template=`
<div>
    <HeadComponent />
    <router-view :key="$route.fullPath" />
    <FootComponent />
</div>
`;

createApp({
    template,
    components : {
        HeadComponent,
        FootComponent
    }
})
.use(router)
.mount('#app');