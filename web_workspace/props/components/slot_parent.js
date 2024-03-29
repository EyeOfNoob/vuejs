//slot_parent.js
import ChildComponent from './slot_child.js';

let template=`
    <ChildComponent>
        <template v-slot:title >
            <h1>팝업 타이틀</h1>
        </template>
        <template v-slot:content >
            <p>팝업 컨텐츠1</p>
            <p>팝업 컨텐츠2</p>
        </template>
        <template v-slot:default >
            <button type="button" @click="alertMsg">닫기</button>
        </template>
    </ChildComponent>
    <hr>
    <ChildComponent>
        <template v-slot:title >
            <h1>Info</h1>
        </template>
        <template v-slot:content >
            <p>service</p>
            <input type="radio" v-model="select" value="A">A유형<br>
            <input type="radio" v-model="select" value="B">B유형
        </template>
        <template v-slot:default >
            <button type="button" @click="alertMsg">완료</button>
        </template>
    </ChildComponent>
`;

export default{
    template,
    data(){
        return{
            select : ''
        }
    },
    methods : {
        alertMsg(){
            if(this.select == ''){
                alert('선택한 유형이 없음');
            }else{
                alert(this.select + '유형을 선택');
            }
        }
    },
    components : {
        ChildComponent
    }
}