//localstorage CRUD

//store data in localstorage 
localStorage.setItem('username','waqas')
const userdata12={
    name:"waqas",
    country:"Pakistan" 
}
localStorage.setItem('userdata',JSON.stringify(userdata12))

//retrives data from LocalStorage
let user=localStorage.getItem('username');
console.log(user);
let userdatastring=localStorage.getItem("userdata")
console.log(userdatastring);

let userdata=JSON.parse(userdatastring);
console.log(userdata);

//remove a specific item
localStorage.removeItem('username');

// let user12=localStorage.getItem("username");
// console.log(user12);

//clear all data 
localStorage.clear()

//update item
localStorage.setItem('username',"waqas1");


