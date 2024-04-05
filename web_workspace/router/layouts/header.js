//header.js

let template=`
    <header>
        <router-link v-bind:to="{ name : 'home' }">Home</router-link>
        || <router-link v-bind:to="{ path : '/postList' }">전체조회</router-link>
        || <router-link v-bind:to="{ path : '/postForm' }">등록</router-link>
    </header>
`;

export default{
    template,
    name : 'headerComponent',
    data(){
        return{
            
        }
    }
}