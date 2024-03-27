let template = `
<div>
    <!-- text 속성 -->
    <p v-text="'Hello, ' + title"/>
    <p> Hello, {{ title }} </p>
    <!-- bind 디렉티브 -->
    <p v-bind:id="postId" 
       name="temp" 
       text="Testing"/>
    <img v-bind:src="fileName">
    <a v-bind:href="url">링크</a>
    <!-- bind 디렉티브 - style -->
     <p style="color : blue;">문자색 직접 지정</p>
     <p v-bind:style="{ color : myColor }">vue 방식</p>
     <p style="color : blue; font-size : 200%;"> 두가지 속성을 직접 지정</p>
     <p v-bind:style="{ color : myColor, fontSize : myFont }">vue 방식</p>
     <p v-bind:style="myStyle">vue 방식</p>
     <!-- bind 디렉티브 - class -->
     <p class="emphasis" >직접 강조</p>
     <p v-bind:class="myClass">Vue 활용 강조 </p>
     <p class="bg emphasis">직접 복수 클래스 적용</p>
     <p v-bind:class="[bgClass, myClass]">Vue 활용 복수 적용</p>
     <p v-bind:class="{'text' : isSelected}">class 적용여부 제어</p>
</div>
`;

export default {
    template,
    data(){
        return {
            title : 'Vue.js',
            postId : 'raw',
            fileName : 'dog.jpg',
            url : 'http://www.google.com',
            myColor : 'blue',
            myFont : '100px',
            myStyle : {
                color : 'green',
                fontSize : '200%'
            },
            myClass : 'emphasis',
            bgClass : 'bg',
            isSelected : false
        }
    }
}