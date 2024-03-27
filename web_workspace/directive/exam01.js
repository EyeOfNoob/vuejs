//exam01.js => modelComponent
//간단한 자기소개
//이름 : input창
//좋아하는 색은 : 빨강,녹색,파란색,노란색,회색 (중 택1)
//  =>내이름은 ''이고
//    좋아하는 색은 ''입니다.
//응용: 이름이 입력되었을 때만 색선택

let template =`
<div>
    이름 :
    <input type="text" v-model.lazy="myName"><br><br>
    좋아하는 색 : 
    <!-- <select v-model="myColor" v-bind:disabled="!myName"> -->
    <!-- <select v-model="myColor" v-bind:disabled="myName == ''"> -->
    <select v-model="myColor" v-bind:disabled="myName.length == 0">
       <option>빨강</option>
       <option>녹색</option>
       <option>파란색</option>
       <option>노란색</option>
       <option>회색</option>
    </select><br>

    좋아하는 색2 : 
    <input type="radio" v-model="myColor2" value="red" v-bind:disabled="!myName">빨강
    <input type="radio" v-model="myColor2" value="green" v-bind:disabled="!myName">녹색
    <input type="radio" v-model="myColor2" value="blue" v-bind:disabled="!myName">파란색
    <input type="radio" v-model="myColor2" value="yellow" v-bind:disabled="!myName">노란색
    <input type="radio" v-model="myColor2" value="gray" v-bind:disabled="!myName">회색

    <p>내이름은 {{myName}}이고</p>
    <p>좋아하는 색은 {{myColor}}입니다</p>
    <p>좋아하는 색2는 {{myColor2}}입니다</p>
</div>
`;

export default{
    template,
    data(){
        return{
            myName : '',
            myColor : '',
            myColor2 : ''
        }
    }
}