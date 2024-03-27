//exam02.js => ForComponent
//별찍기(기본형)
//구구단(2~9단)출력
let template=`
    <div>
        <p>테스트</p>
        <p v-for="num in 5" :key="num">
            <span v-for="nums in num" :key="nums">
                {{'*'}}
            </span>
        </p>

        <p>테스트2</p>
        <p v-for="(star, i) in stars" :key="star">
            {{star}}
        </p>

        <p>테스트3</p>
        <p v-for="dans in 9" :key="dans">
            <p v-for="dan in 9" :key="dan">
                {{dans}}*{{dan}}={{dan * dans}}
            </p><br>
        </p>
    </div>
`;

export default{
    template,
    data(){
        return{
            stars : ['*','**','***','****','*****']
        }
    }
}
