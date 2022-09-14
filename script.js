//Creation of container and row
let container=document.createElement("div");
container.setAttribute("class","container");

let row=document.createElement("div");
row.setAttribute("class","row");


container.append(row);
document.body.append(container);

//async, await, Try&catch function for getting Random Datas
async function emoji(){
    try {
        let res=await fetch("https://emojihub.herokuapp.com/api/random");
    let data=await res.json();
    console.log(data);
    
    row.innerHTML=`    
    <div class="card" style="width: 18rem;">
    <h4>Get Random Emojis</h4>
    <ul class="list-group list-group-flush">
      <li class="list-group-item"><b>Name: </b>${data.name}</li>
      <li class="list-group-item"><b>Category: </b>${data.category}</li>
      <li class="list-group-item"><b>Group: </b>${data.group}</li>
    </ul>`;
          
    } catch (error) {
        console.log("Data Not Found!!!");//to catch error
    }
    
}
emoji();