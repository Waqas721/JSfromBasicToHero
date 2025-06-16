//sessions storage
//store data in sessionStorage 

sessionStorage.setItem("cart","3 items ");

const userdata123={
    name:"waqas ansari",
    country:"Pakistan" 
}
sessionStorage.setItem('userdata',JSON.stringify(userdata123))

//retrives data from LocalStorage
let user1=sessionStorage.getItem('cart');
console.log(user1);
let userdatastring1=sessionStorage.getItem("userdata")
console.log(userdatastring1);

let userdata1=JSON.parse(userdatastring1);
console.log(userdata1);

//remove a specific item
sessionStorage.removeItem('cart');

// let user12=sessionStorage.getItem("username");
// console.log(user12);

//clear all data 
sessionStorage.clear()

//update item
sessionStorage.setItem('cart',"0 items in cart");