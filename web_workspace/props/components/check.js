//check.js
let ChildComponent = {
    template : `
        <div>
            <p> 숫자 : {{ num }} </p>
            <p> 문자열 : {{ str }} </p>
            <p> 짝수? : {{ even }} </p>
            <p> 객체 : {{ obj }} </p>
        </div>
    `,
    props : {
        num : {
            type : [Number, String],    //복수허용시 배열
            required : true             //필수입력 요구
        },
        str : {
            type : String,              
            default : 'Hello!'          //값이 안들어오면 쓸 기본값
        },
        even : {
            validator(value){           //유효성검사 =>return boolean
                return (value%2==0);
            }
        },
        //obj : Object                    //타입만 체크
        obj : {                         //객체,배열은 기본값 지정하려면 함수를 써야함
            type : Object,
            default : ()=>{
                    return{
                        name : 'Hong',
                        age : 20
                    }
            }
        }
    }
};

//parent
export default{
    template : `
        <div>
            <ChildComponent v-bind:num = "myNumber" 
                            v-bind:str = "sendMsg" 
                            :even = "myNumber" 
                            :obj = null
            />
        </div>
    `,
    data(){
        return{
            myNumber : 55,
            sendMsg : 'Hellom World!',
            newObj : null

        }
    },
    components : {
        ChildComponent
    }
}