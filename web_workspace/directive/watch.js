/*
* watch.js
**/
let template=`
    <div>
        공급가액 : <input type="number" v-model="price"> 원
        <p> 최종 소비자가 : {{ taxIncluded }} </p>
        <p> 최종 소비자가 : {{ getFinalPrice() }} </p>
        <p> 공급가액 50% 할인 : {{ taxIncluded * 0.5 }}</p>
        <p> 공급가액 50% 할인 : {{ getFinalPrice() * 0.5 }}</p>
        구입갯수 : <input type="number" v-model.lazy="count"> 개
        <p> 결제금액 : {{ total }} 원 </p>
        <p> 부가세 : {{ tax }} 원 </p>
        <p> 매출액 : {{ revenue }} 원 </p>
    </div>
    <div>
        <hr>
        <p>금지문자는 [ {{ forbiddenText }} ]</p>
        <textarea v-model="inputText"></textarea>
    </div>
`;

export default{
    template,
    data(){
        return{
            price : 1000,
            count : 5,
            forbiddenText : '오늘',
            inputText : ''
        }
    },
    computed : { //프로퍼티 => 매개변수X, return 필수
                 //        => 내부에 프로퍼티가 반드시 포함
        taxIncluded(){ //값이 바뀔때만 1회 시행, readonly
            return this.price * 1.1;
        },
        total(){
            return this.taxIncluded * this.count;
        },
        tax(){
            return Math.round(this.total* 0.1);
        },
        revenue(){
            return this.total - this.tax;
        }
    },
    methods : {
        getFinalPrice(){ //호출시마다 시행
            return this.price * 1.1;
        }
    },
    watch : {   //프로퍼티가 변경될 경우 무슨 작업을 하겠다, 정의
                // => return X
                //새로운 값을 사용하지않음. 이미 선언된 프로퍼티만 사용/감시.
                //감시중인 프로퍼티가 변경될때마다 시행되므로 최종값만 받으려면 lazy와 같이 사용
        count(){
            alert('구입 갯수를 입력했습니다.');
        },
        inputText(){
            let pos = this.inputText.indexOf(this.forbiddenText);
            console.log(pos);
            if(pos > -1){
                alert('"' + this.forbiddenText + '"은 입력할 수 없습니다.');
                this.inputText = this.inputText.substr(0, pos);
            }
        }
    }
}