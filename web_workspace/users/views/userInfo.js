//userInfo.js

let template=`
    <div  v-if="userInfo.company && userInfo.address">
        <table border = 1>
            <tr>
                <th colspan="2">id</th>
                <td>{{userInfo.id}}</td>
            </tr>
            <tr>
                <th colspan="2">name</th>
                <td>{{userInfo.name}}</td>
            </tr>
            <tr>
                <th colspan="2">username</th>
                <td>{{userInfo.username}}</td>
            </tr>
            <tr>
                <th colspan="2">email</th>
                <td>{{userInfo.email}}</td>
            </tr>
            <tr>
                <th rowspan="6">address</th>
                <th>street</th>
                <td>
                    {{userInfo.address.street}}
                </td>
            </tr>
            <tr>
                <th>suite</th>
                <td>
                    {{userInfo.address.suite}}
                </td>
            </tr>
            <tr>
                <th>city</th>
                <td>
                    {{userInfo.address.city}}
                </td>
            </tr>
            <tr>
                <th>zipcode</th>
                <td>
                    {{userInfo.address.zipcode}}
                </td>
            </tr>
            <tr>
                <th rowspan="2">
                    geo
                </th>
                <td>
                    lat : {{userInfo.address.geo.lat}}
                </td>
            </tr>
            <tr>
                <td>
                    lng : {{userInfo.address.geo.lng}}
                </td>
            </tr>
            <tr>
                <th colspan="2">phone</th>
                <td>{{userInfo.phone}}</td>
            </tr>
            <tr>
                <th colspan="2">website</th>
                <td>{{userInfo.website}}</td>
            </tr>
            <tr>
                <th rowspan="3">company</th>
                <th>name</th>
                <td>
                    {{userInfo.company.name}}<br>
                </td>
            </tr>
            <tr>
                <th>catchPhrase</th>
                <td>
                    {{userInfo.company.catchPhrase}}
                </td>
            </tr>
            <tr>
                <th>bs</th>
                <td>
                    {{userInfo.company.bs}}
                </td>
            </tr>
            <tr>
                <button type="button" @click="goToUpdateForm()">수정</button>
                <button type="button" @click="delUserInfo()">삭제</button>
            </tr>
        </table>
    </div>
`;

export default{
    template,
    data(){
        return{
            userInfo : {}
        }
    },
    created(){
        let id = this.$route.query.id;
        this.getUserInfo(id); 
    },
    methods : {
        async getUserInfo(id){ 
            this.userInfo = await fetch('https://jsonplaceholder.typicode.com/users/'+id)
                                .then(res => res.json())
                                .catch(err => console.log(err));
        },

        goToUpdateForm(){
            this.$router.push({
                name : 'userUpdate',
                query : { id : this.userInfo.id }
            })
        },

        delUserInfo(){
            fetch('https://jsonplaceholder.typicode.com/users/'+this.userInfo.id, {
                method : 'delete'
            })
            .then(res => res.json())
            .then(data => { //서버로부터 받은 데이터로 실행부분
                let result = Object.keys(data).length; //객체길이 확인(빈객체 확인용) keys==[]
                if(result ==0){
                    alert('정상적으로 삭제되었습니다.');
                }else{
                    alert('삭제되지 않았습니다.');
                }
            })
            .catch(err => console.log(err));
        }
    }
}