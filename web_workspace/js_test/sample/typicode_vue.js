//typicode_vue.js
const { createApp } = Vue

let template =`
<div>
    <table>
        <thead>
            <tr>
                <th>id</th>
                <th>title</th>
                <th>userId</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(post, idx) in postList" :key="idx"
                v-on:click="getPostInfo(post.id)">
                <td>{{post.id}}</td>
                <td>{{post.title}}</td>
                <td>{{post.userId}}</td>
            </tr>
        </tbody>
    </table>
</div>
`;

createApp({
  template,
  data() {
    return {
      postList : []
    }
  },
  created(){
    this.getPostList();
  },
  methods : {
    async getPostList(){
        this.postList = await fetch('https://jsonplaceholder.typicode.com/posts')
                              .then(res => res.json());
    },
    getPostInfo(id){
        fetch('https://jsonplaceholder.typicode.com/posts/'+id)
        .then(res => res.json())
        .then(data =>{
            console.log(data);
        });
    }
  }
}).mount('#list')