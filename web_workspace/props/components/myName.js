//myName.js
let ChildComponent = {
    template : `
        <div>
            <p> 내이름은 {{ myname }} 입니다.</p>
            <p> 변경될 이름 </p>
            <input type="text" v-model.lazy="updateName" @keyup.enter="updateMyName()">
        </div>
    `,
    props : ['myname'],
    data(){
        return{
            updateName : ''
        }
    },
    methods:{
        updateMyName(){
            this.$emit('update-name', this.updateName, '업데이트 진행')
        }
    }
};

//parent
export default{
    template : `
        <div>
            <ChildComponent v-bind:myname="first" v-on:update-name="getName"/>
            <ChildComponent myname="second"/>
        </div>
    `,
    data(){
        return{
            first : 'Hong',
            second : 'Kang'
        }
    },
    components : {
        ChildComponent
    },
    methods : {
        getName(data, msg){
            console.log(data, msg);
            this.first = data;
        }
    }
}