//typicode.js


fetch('https://jsonplaceholder.typicode.com/posts')
.then(resolve => resolve.json())
.then(result => {
    // console.log(result);
    let list = document.querySelector("#list");
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');
    let tr = document.createElement('tr');
    let th = document.createElement('th')
    th.innerText = 'id';
    let th2 = document.createElement('th')
    th2.innerText = 'title';
    let th3 = document.createElement('th')
    th3.innerText = 'userId';
    tr.append(th);
    tr.append(th2);
    tr.append(th3);
    thead.append(tr);
    table.append(thead);
    for(let i = 0; i<10; i++){
        console.log(result[i].id);
        console.log(result[i].title);
        console.log(result[i].userId);
        let tr = document.createElement('tr');
        let td = document.createElement('td')
        td.innerText = result[i].id;
        let td2 = document.createElement('td')
        td2.innerText = result[i].title;
        let td3 = document.createElement('td')
        td3.innerText = result[i].userId;
        tr.append(td);
        tr.append(td2);
        tr.append(td3);
        tbody.append(tr);
    }
    table.append(tbody);
    list.append(table);
})
.catch(err => console.log(err));


function makeTr(list = []){
    let tr = document.createElement('tr');

    return tr;
}