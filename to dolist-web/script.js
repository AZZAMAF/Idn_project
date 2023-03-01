//getting all required elements
const inputbox = document.querySelector(".inputField input");
const addBtn= document.querySelector(".inputField button")
const todolist= document.querySelector(".todolist");
const deleteAllBtn= document.querySelector(".footer button");

inputbox.onkeyup = () => {
    let userdata= inputbox.value;//get user entered value
    if(userdata.trim()!=0){//if user values are't only spaces
     addBtn.classList.add("active")//activate the add   button

    }else{
        addBtn.classList.remove("active") //unactivate the add   button
        
    }
}

showTaks();//calling showTaks Function


// if user click on the button
addBtn.onclick  = () => {
    let userdata= inputbox.value;//get user entered value
    let getLocalStorage = localStorage.getItem("new todo");//geting local storage
    if(getLocalStorage == null){//if localStorage is null
      listArr = []; //creaTING blank array
    }else{//if localStorage is
        listArr =JSON.parse(getLocalStorage);//transforming JSON String object into a Js object
    }
    listArr.push(userdata);//pushing or adding user data 
    localStorage.setItem("new todo", JSON.stringify(listArr));//transforming Js object into a Js String
    showTaks();//calling showTaks Function
}
// function to  add task list inside ul
function showTaks(){
    let getLocalStorage = localStorage.getItem("new todo");//getting localsstorage
    if(getLocalStorage == null){//if localStorage is null
        listArr= [];//creaTING blank array
     }else{
        listArr = JSON.parse(getLocalStorage);//transforming JSON String object into
     }
     const pendingNumb = document.querySelector(".pendingNumb");
     pendingNumb.textContent = listArr.length;//passing the length value  in  pendingNumb
     if (listArr.length > 0){// if array lergth is greater than 0
        deleteAllBtn.classList.add("active");// active the clearall button
     }else{
        deleteAllBtn.classList.remove("active");// unactive the clearall button
     }
     let newLiTag = '';
     listArr.forEach((element, index) => {
        newLiTag += `<li>${element}<span onclick = "deleteTask(${index})";><i class="fas fa-trash"></i></span></li>`;
     });
     todolist.innerHTML = newLiTag;//adding new li tag inside ul tag
     inputbox.value = " ";//once task added leave the inpu field blank
}
// deletes task fungtion
function deleteTask(index){
    let getLocalStorage = localStorage.getItem("new todo");//getting localsstorage
    listArr =JSON.parse(getLocalStorage);//transforming JSON String object into
    listArr.splice(index, 1); //deleting or removing the particular indexed li
    // after remove the li again update the local Storage
    localStorage.setItem("new todo", JSON.stringify(listArr));//transforming Js object into a Js String
    showTaks();//calling showTaks Function

}
// delete All task function
deleteAllBtn.onclick =()=>{
    listArr = [];//empty  an array
    // after delete all task again update the local Storage
    localStorage.setItem("new todo", JSON.stringify(listArr));//transforming Js object into a Js String
    showTaks();//calling showTaks Function
}