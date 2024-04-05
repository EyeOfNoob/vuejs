//404page.js

let template=`
    <div>
        <h1>404 Page Error</h1>
        <router-link v-bind:to="{ name : 'home' }">메인으로</router-link>
        <router-view :key="$route.fullPath" />
    </div>
`;

export default{
    template,
    name : 'NotFound'
}
