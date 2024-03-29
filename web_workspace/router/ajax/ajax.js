//ajax.js
/*
 * 라우팅(Routing)
    : 특정 엔드 포인트에 대한 클라이언트 요청에 애플리케이션이 응답하는 방법을 결정하는 것
    엔드 포인트 = 메소드(method) + 경로(Path) 
                    └> POST는 못씀.

    REST    Restful Server
    =URI(자원) + METHOD(기능)   /   JSON(기본적으로)
                    └> GET(조회), POST(등록), PUT(수정), DELETE(삭제)

                    기존방식                            REST방식
    단건조회 : GET + empInfo?employeeId=100         GET    + emps/100  
    전체조회 : GET + empList                        GET    + emps
    등록    : POST + empInsert                      POST   + emps
    수정    : POST + empUpdate                      PUT    + emps
    삭제    : GET  + empDelete?employeeId=100       DELETE + emps/100
 */

// https://jsonplaceholder.typicode.com/posts
// 전체조회
fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => {
    console.log(response);
    return response.json();
})
.then(data => {
    console.log(data);
})
.catch(err => console.log(err));

//단건조회
fetch('https://jsonplaceholder.typicode.com/posts/'+1)
.then(response => response.json())
.then(data => {
    console.log(data);
})
.catch(err => console.log(err));

//등록 JSON : {}, []
let post = {
    id : 100,
    title : 'Hello!!',
    userId : 10,
    body : 'Today is Friday!!!'
}
fetch('https://jsonplaceholder.typicode.com/posts',{
    method : 'post',
    headers : {
        'Content-type' : 'application/json'
    },
    body : JSON.stringify(post)
})
.then(res => res.json())
.then(data => {
    console.log(data);
})
.catch(err => console.log(err));

//수정
fetch('https://jsonplaceholder.typicode.com/posts/'+ 1,{
    method : 'put',
    headers : {
        'Content-type' : 'application/json'
    },
    body : JSON.stringify({
        title : 'Welcome!',
        userId : 20,
        body : 'Test!'
    })
})
.then(res => res.json())
.then(data => {
    console.log(data);
})
.catch(err => console.log(err));

//삭제
fetch('https://jsonplaceholder.typicode.com/posts/'+ 1,{
    method : 'delete'
})
.then(res => res.json())
//.then(res => {console.log(res.status)})
.then(data => {
    console.log(data);
})
.catch(err => console.log(err));


//jQuery
$.ajax('https://jsonplaceholder.typicode.com/posts')
.done(data => {
    console.log(data);
})
.catch(err => console.log(err));