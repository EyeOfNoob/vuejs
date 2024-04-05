//userInsert.js

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
                <button type="button" @click="createUserInfo()">저장</button>
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
    methods : {
        createUserInfo(){
            let data ={
                name : this.user.name,
                username : this.user.username,
                email : this.user.email
            }

            fetch('https://jsonplaceholder.typicode.com/users', {
                method : 'post',
                headers : {
                    'content-type' : 'application/json' //콘텐트 타입지정
                },
                body : JSON.stringify(data) //데이터를 json타입으로 변환
            })
            .then(res => res.json())
            .then(data => { //서버로부터 받은 데이터로 실행부분
                console.log(data);
                if(data != null){
                    alert('정상적으로 등록되었습니다.');
                    this.user.id = data.id;
                }else{
                    alert('등록되지 않았습니다.\n데이터를 확인해주세요.');
                }
            })
            .catch(err => console.log(err));
        }
    }
}