//postUpdate.js

let template=`
    <div>
        <table border = 1>
            <tr>
                <th>id</th>
                <td><input type="text" v-model="post.id" readonly></td>
            </tr>
            <tr>
                <th>title</th>
                <td><input type="text" v-model="post.title"></td>
            </tr>
            <tr>
                <th>userId</th>
                <td><input type="text" v-model="post.userId"></td>
            </tr>
            <tr>
                <th>body</th>
                <td>
                    <textarea v-model="post.body" tyle="width : 500px; height: 100px" />
                </td>
            </tr>
            <tr>
                <button type="button" @click="updatePostInfo()">수정</button>
            </tr>
        </table>
    </div>
`;

export default{
    template,
    data(){
        return{
            post : {
                id : '',
                title : '',
                body : '',
                userId : ''
            }
        }
    },
    created(){
        let id = this.$route.query.id; //postList.js에서 보낸 id
        this.getPostInfo(id); 
    },
    
    methods : {
        async getPostInfo(id){ 
            this.post = await fetch('https://jsonplaceholder.typicode.com/posts/'+id)
                            .then(res => res.json())
                            .catch(err => console.log(err));
        },

        updatePostInfo(){
            //let data = this.post;
            let data = {//date(날짜)타입은 오류가 많이나므로 서버에서 명시적으로 요구하는것이 아니면 생략하는것이 좋음.
                id : this.post.id,
                title  : this.post.title,
                body : this.post.body,
                userId : this.post.userId
            }

            fetch('https://jsonplaceholder.typicode.com/posts/'+data.id, {
                method : 'put',
                headers : {
                    'content-type' : 'application/json'
                },
                body : JSON.stringify(data) //내 데이터를 json타입으로 변환(정적메소드)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data != null){
                    alert('정상적으로 수정되었습니다.');
                }else{
                    alert('수정되지 않았습니다.\n데이터를 확인해주세요.')
                }
            })
            .catch(err => console.log(err));
            
        }
    }
}