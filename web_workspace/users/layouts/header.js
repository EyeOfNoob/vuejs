//header.js

let template=`
    <header>
        <router-link v-bind:to="{ name : 'home' }">Home</router-link>
        || <router-link v-bind:to="{ path : '/userList' }">전체조회</router-link>
        || <router-link v-bind:to="{ path : '/userInsert' }">회원등록</router-link>
    </header>
`;

export default{
    template,
    data(){
        return{
            
        }
    }
}