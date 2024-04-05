//postList.js

let template=`
    <div>
        <table border = 1>
            <thead>
                <tr>
                    <th>id</th>
                    <th>title</th>
                    <th>userId</th>
                </tr>
            </thead>
            <tbody>
                <template v-for="(post in postList" :key="post.id">
                    <tr v-if="post.id <= 10" @click="goToDetail(post.id)">
                        <td>{{post.id}}</td>
                        <td>{{post.title}}</td>
                        <td>{{post.userId}}</td>
                    </tr>
                </template>
            </tbody>
        </table>
    </div>
`;

export default{
    template,
    data(){
        return{
            postList : []
        }
    },
    created(){
        this.getPostList(); //비동기 호출(밖에서는 비동기로 작동)
    },
    methods : { //fetch내에 fetch가 들어가는 이중구조일경우 async await를 이용하는것이 가독성/유지보수에 유리
        async getPostList(){ //비동기 통신의 순서를 동기식으로 진행(내부의 순서만 보장)
            this.postList = await fetch('https://jsonplaceholder.typicode.com/posts') 
                                .then(res => res.json())    
                                .catch(err => console.log(err));
        },
        goToDetail (postId) { //라우터요청
                this.$router.push({
                    name : 'postInfo',
                    query : { id : postId }   //postInfo로 보내는 데이터
            });
        }
        // getPostList(){ //VUE에서 데이터를 받아오는 fetch메소드 기본형
        //     fetch('')
        //     .then(res => res.json())
        //     .then(data =>{
        //         this.postList = data;
        //     })
        //     .catch(err => console.log(err));
        // }
    }
}