//userUpdate.js

let template=`
    <div>
        <table border = 1>
            <tr>
                <th>id</th>
                <td><input type="text" v-model="user.id" readonly></td>
            </tr>
            <tr>
                <th>name</th>
                <td><input type="text" v-model="user.name" ></td>
            </tr>
            <tr>
                <th>username</th>
                <td><input type="text" v-model="user.username" ></td>
            </tr>
            <tr>
                <th>email</th>
                <td><input type="text" v-model="user.email" ></td>
            </tr>
            <tr>
                <button type="button" @click="updateUserInfo()">수정</button>
            </tr>
        </table>
    </div>
`;

export default{
    template,
    data(){
        return{
            user : {
                id : '',
                name : '',
                username : '',
                email : ''
            }    
        }
    },
    created(){
        let id = this.$route.query.id;
        this.getUserInfo(id); 
    },
    methods : {
        async getUserInfo(id){ 
            this.user = await fetch('https://jsonplaceholder.typicode.com/users/'+id)
                                .then(res => res.json())
                                .catch(err => console.log(err));
        },
        
        updateUserInfo(){
            let data ={
                id : this.user.id,
                name : this.user.name,
                username : this.user.username,
                email : this.user.email
            }

            fetch('https://jsonplaceholder.typicode.com/users/'+data.id, {
                method : 'put',
                headers : {
                    'content-type' : 'application/json' //콘텐트 타입지정
                },
                body : JSON.stringify(data) //데이터를 json타입으로 변환
            })
            .then(res => res.json())
            .then(data => { //서버로부터 받은 데이터로 실행부분
                console.log(data);
                if(data != null){
                    alert('정상적으로 수정되었습니다.');
                }else{
                    alert('수정되지 않았습니다.\n데이터를 확인해주세요.');
                }
            })
            .catch(err => console.log(err));
        }
    }
}