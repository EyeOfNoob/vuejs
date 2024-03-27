//component.js

let component ={
    name : '',          // 컴포넌트 이름(잘안쓰임)
    template : ``,      // View : html
    data(){},           // Data : CRUD(Create,Read,Update,Delete)
    computed : {},      // Data : Read(수정불가,값이 들어오면 자동계산)
    methods : {},       // Code : 기능 정의
    watch : {},         // Data(data,computed)를 감시 -> 연속행위를 정의(Data값 변경을 확인하고 실행해야할 부분이 있으면 실행)
    components : {}     // 외부(자식) 컴포넌트들 추가
}
