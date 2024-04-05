//postInsert.js

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
                <button type="button" @click="createPostInfo()">저장</button>
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
    methods : {
        createPostInfo(){
            let data = {
                title  : this.post.title,
                body : this.post.body,
                userId : this.post.userId
            }

            fetch('https://jsonplaceholder.typicode.com/posts', {
                method : 'post',
                headers : {
                    'content-type' : 'application/json'
                },
                body : JSON.stringify(data) //내 데이터를 json타입으로 변환(정적메소드)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data != null){
                    alert('정상적으로 저장되었습니다.');
                    this.post.id = data.id;
                }else{
                    alert('저장되지 않았습니다.\n데이터를 확인해주세요.')
                }
            })
            .catch(err => console.log(err));
        }
    }
}