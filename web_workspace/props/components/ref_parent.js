//rev_parent.js
import ChildComponent from './ref_child.js'

let template=`
    <div>
        <ChildComponent ref="child" />
        <!-- <ChildComponent ref="second" /> -->
        <button type="button" @click="changeChildData">
            Change Child Data
        </button>
        <button type="button" @click="changeChildEvent">
            Child Click Event
        </button>
        <button type="button" @click="executeChildFun">
            Child Method Excute
        </button>
        <p> {{msg}} </p>
    </div> 
`;

export default({
    template,
    data(){
        return {
            isMounted : false
        }
    },
    mounted(){
        this.isMounted = true;
    },
    computed : {    //<=created 시점에 시행
        msg(){      //$refs에 값이 담기는 시점은 mounted이므로 딜레이를 주는 구조로 작성
            return !this.isMounted ? '' : this.$refs.child.msg;
        }
    },
    methods : {
        changeChildData(){
            // console.log(this.$refs);
            // console.log(this.$refs.child);
            this.$refs.child.msg = 'Data Update';
        },
        changeChildEvent(){
            let childCom = this.$refs.child;
            let childBtn = childCom.$refs.btn
            // console.log(this.$refs.child.$refs.btn);
            console.log(childBtn);
            childBtn.click();

            this.$refs.child.$refs.btn.click();
        },
        executeChildFun(){
            this.$refs.child.childFunc();
        }
    },
    components : {
        ChildComponent
    }
})