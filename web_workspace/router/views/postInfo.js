//postInfo.js

let template=`
    <div>
        <table border = 1>
            <tr>
                <th>id</th>
                <td>{{postInfo.id}}</td>
            </tr>
            <tr>
                <th>title</th>
                <td>{{postInfo.title}}</td>
            </tr>
            <tr>
                <th>userId</th>
                <td>{{postInfo.userId}}</td>
            </tr>
            <tr>
                <th>body</th>
                <td>
                    <!-- <textarea readonly>{{postInfo.body}}</textarea> -->
                    <textarea style="width : 500px; height: 100px" readonly v-text="postInfo.body"></textarea>
                </td>
            </tr>
            <tr>
                <button type="button" @click="goToUpdateForm()">수정</button>
                <button type="button" @click="delPostInfo()">삭제</button>
            </tr>
        </table>
    </div>
`;

export default{
    template,
    data(){
        return{
            postInfo : {}
        }
    },
    created(){
        let id = this.$route.query.id; //postList.js에서 보낸 id
        this.getPostInfo(id); 
    },
    methods : {
        async getPostInfo(id){ 
            this.postInfo = await fetch('https://jsonplaceholder.typicode.com/posts/'+id)
                                .then(res => res.json())
                                .catch(err => console.log(err));
        },

        goToUpdateForm(){
            this.$router.push({
                name : 'postForm',
                query : { id : this.postInfo.id }
            })
        },

        delPostInfo(){
            fetch('https://jsonplaceholder.typicode.com/posts/'+this.postInfo.id, {
                method : 'delete'
            })
            .then(res => res.json())
            .then(data => { //서버로부터 받은 데이터로 실행부분
                let result = Object.keys(data).length; //객체길이 확인(빈객체 확인용) keys==[]
                if(result ==0){
                    console.log('정상적으로 삭제되었습니다.');
                }else{
                    console.log('삭제되지 않았습니다.');
                }
            })
            .catch(err => console.log(err));

        }
    }
}