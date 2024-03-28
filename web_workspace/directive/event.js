//event.js
let template=`
    <div>
        <button type="button" v-on:click="upCounter(), printMsg($event)">Add 1</button>
        <p> The Counter is : {{ counter }}</p>
        <hr>
        <input type="number" v-model="num">
        <button type="button" v-on:click="increaseCounter(num)">Add {{num}}</button>
        <p> The Counter is : {{ sum }}</p>
        <hr>
        <form style="border : 2px solid black;" v-on:click="showAlert('from')">
            <div style="border : 1px solid black;" v-on:click.self="showAlert('div')">
                <p style="border : 1px solid black;" v-on:click.once="showAlert('p')">
                    <a v-on:click.prevent href="http://www.naver.com">
                        네이버
                    </a>
                </p>
                click div tag
            </div>
        </form>
        <hr>
        <input type="text" v-model="keyword" v-on:keyup.enter="showAlert(keyword)">
        <!--                                    @keyup.enter                    -->
    </div>
`;

export default{
    template,
    data(){
        return{
            counter : 0,
            num : 0,
            sum : 0,
            keyword : ''
        }
    },
    methods : {
        // upCounter : function(){
        upCounter(data){
            //this.data.counter += 1;
            this.counter += 1;
            console.log(data);
        },
        printMsg(data){ //복수의 핸들러 등록시 이벤트값을 넣어야한다면 $event처럼 넣어줘야함
            console.log(data);
        },
        increaseCounter(data){
            this.sum += data;
        },
        showAlert(data){
            alert('click '+data);
        },
    }
}