//input.js
let template =`
<div>
    <input type="text" v-model="myName"><br>
    <p> 나는 {{ myName }} 입니다.</p>
    <input type="number" v-model="myNum"><br>
    <p> 계산결과 : {{ myNum + 1000 }} </p>
    <textarea v-model.lazy="myComment"/>
   	<div v-text="myComment"/>
    <select v-model="mySelect" multiple>
       <option>선택1</option>
       <option>선택2</option>
       <option>선택3</option>
   </select>
   <!-- v-model 디렉티브 : checked 속성 -->
   	<!-- checkbox 하나만 -->
   	<input type="checkbox" v-model="myCheck"><br>
   	<p> {{ myCheck }} </p>
   	<!-- checkbox 여러개 -->
   	<input type="checkbox" v-model="myHobbies">독서
   	<input type="checkbox" v-model="myHobbies">운동
   	<input type="checkbox" v-model="myHobbies">여행 
   	<p> 취미 : {{ myHobbies }} </p>
</div>
`;

export default {
    template,
    data(){
        return {
            myName : '홍길동',
            myNum : 0,
            myComment : '',
            mySelect : '',
            myCheck : ,
            myHobbies : []
        }
    }
}