let title = document.getElementById("title");
let price = document.getElementById("price");
let teces = document.getElementById("teces");
let ads = document.getElementById("ads");
let descound = document.getElementById("descound");
let total = document.getElementById("total");
let cont = document.getElementById("cont");
let catogry = document.getElementById("catogry");
let btn = document.getElementById("btn");
let search = document.getElementById("search");
let btnr = document.getElementById("btnr");
let btnf = document.getElementById("btnf");
let mood='create'
let tmp;


function gettotal()
{
    if(price.value != ""){
    let result = (+ price.value+ +teces.value+ +ads.value) -+descound.value;
    total.innerHTML = result;
    total.style.background = "#040";
    }else {
        total.innerHTML = " ";
        total.style.background = "#000"
        
        
    }
};


let datapro;
if(localStorage.product != null){
    datapro=JSON.parse(localStorage.product)
}else{
    let datapro=[''];
}
btn.onclick = function(){
    let nuepro = {
        title:title.value.toLowerCase(),
        price:price.value,
        teces:teces.value,
        ads:ads.value,
        descound:descound.value,
        total:total.innerHTML,
        cont:cont.value,
        catogry:catogry.value.toLowerCase(),
    }
    if(mood === 'create'){
            if(nuepro.cont > 1){
        for(let i = 0; i < nuepro.cont;i++){
            datapro.push(nuepro)
        }
    }else{
            datapro.push(nuepro)
        }
    }else{
        datapro[ tmp] = nuepro;
        mood = 'create'
        btn.innerHTML="create"
        btn.style.background = '#000';
        cont .style.display = 'block';
    }
    console.log(datapro)
    localStorage.setItem("product", JSON.stringify(datapro))
    clearData()
    showData()
}
function clearData(){
    title.value="";
    price.value="";
    teces.value="";
    ads.value="";
    descound.value="";
    total.innerHTML="";
    cont.value="";
    catogry.value="";
}

function showData()
{
    gettotal()
    let table = '';
    for(let i = 0; i < datapro.length;i++){
        table += `<tr>
        <td>${i}</td>
        <td>${datapro[i].title}</td>
        <td>${datapro[i].price}</td>
        <td>${datapro[i].teces}</td>
        <td>${datapro[i].ads}</td>
        <td>${datapro[i].descound}</td>
        <td>${datapro[i].total}</td>
        <td>${datapro[i].catogry}</td>
        <td><button onclick="updateData(${i})" id="update">update</button></td>
        <td><button onclick="deleteData(${i})" id="Delete">Delete</button></td>
    </tr>
    `
    }
    document.getElementById('tbody').innerHTML = table;
let btnDelete = document.getElementById('deleteall');
if(datapro.length > 0){
    btnDelete.innerHTML =`
    <button onclick='deleteall()'> Delete All (${datapro.length})</button>
    `
    
}else{
    btnDelete.innerHTML = "" ;
}
}
showData()
function deleteData(i)
{
    datapro.splice(i,1);
    localStorage.product = JSON.stringify(datapro);
    showData()
}

function deleteall()
{
    localStorage.clear
    datapro.splice(0);
    showData()
}

function updateData(i){
    title.value = datapro[i].title;
    price.value = datapro[i].price;
    teces.value = datapro[i].teces;
    ads.value = datapro[i].ads;
    descound.value = datapro[i].descound;
    total.value = datapro[i].total;
    catogry.value = datapro[i].catogry;
    gettotal()
    cont .style.display = 'none';
    btn.innerHTML="update"
    btn.style.background = '#0000ff';
    mood='update'
    tmp = i;
    scroll({
    top:0,
    behavior:'smooth'
    })
} 

let searchmood ='title';

function getsearchmood(id){
    let search=document.getElementById('search')
if(id == "searchTitle"){
    searchmood ='title';
    search.placeholder="search By Title"
}else{
    searchmood ='catogry';
    search.placeholder="search By catogry"
}
search.focus()
search.value= ''

}
function searchData(value){
    let table="";
    if(searchmood == 'title'){
        for(let i = 0; i < datapro.length;i++){
            if(datapro[i].title.includes(value.toLowerCase())){
                table += `<tr>
                <td>${i}</td>
                <td>${datapro[i].title}</td>
                <td>${datapro[i].price}</td>
                <td>${datapro[i].teces}</td>
                <td>${datapro[i].ads}</td>
                <td>${datapro[i].descound}</td>
                <td>${datapro[i].total}</td>
                <td>${datapro[i].catogry}</td>
                <td><button onclick="updateData(${i})" id="update">update</button></td>
                <td><button onclick="deleteData(${i})" id="Delete">Delete</button></td>
            </tr>
            `
            }
        }
    }
    else{
        for(let i = 0; i < datapro.length;i++){
            if(datapro[i].catogry.includes(value.toLowerCase())){
                table += `<tr>
                <td>${i}</td>
                <td>${datapro[i].title}</td>
                <td>${datapro[i].price}</td>
                <td>${datapro[i].teces}</td>
                <td>${datapro[i].ads}</td>
                <td>${datapro[i].descound}</td>
                <td>${datapro[i].total}</td>
                <td>${datapro[i].catogry}</td>
                <td><button onclick="updateData(${i})" id="update">update</button></td>

                
                <td><button onclick="deleteData(${i})" id="Delete">Delete</button></td>
            </tr>
            `
            }
        }
    }
        document.getElementById('tbody').innerHTML = table;
}
let name =['ibrahem','medo','ibrahem','medo']
for(let o = 0 ; o < 10 ; o ++){
    console.log(name[o])
}




