//raw.js
let test = `teeest`;
let template = `
    <div>
        <!-- text 속성 -->
        <p> Hello, {{title+' Today is '+ ((new Date()).getDate()) + '일'}} </p>
        <p v-text="'bye, ' + title +' '+ ((new Date()).getFullYear())"/>

        <!-- {{}},v-text를 같이쓰면 v-text가 덮어써버림. {{}}이든 아니든. -->
        <!-- <p v-text="'bye'">{{test}}</p> -->

        <!-- bind 디렉티브 -->
        <p v-bind:id="postId" 
            name="temp"
            text="Testing"/>
        <img v-bind:src=fileName />
        
        <a v-bind:href="url">링크</a>

        <!-- bind 디렉티브 -style -->
        <p style="color : blue;">문자색 직접 지정</p>
        <p v-bind:style="{ color : myColor, fontSize : myFont }">vue 방식</p>
        <p style="color : blue; font-size : 200%;">두가지 속성을 직접 지정</p>
        <p v-bind:style="myStyle">vue 방식</p>
    </div>
`;

export default{
    template,
    data(){ // => data :function(){
        return {
            title : 'Vue.js',
            test,
            postId : 'raw',
            fileName : 'dog1.jpg',
            url : document.querySelector('#test').value,
            //url : 'http://www.naver.com',
            myColor : 'red',
            myFont : '300%',
            myStyle : {
                color : 'green', 
                fontSize : '400%' 
            }
        }
    }
}