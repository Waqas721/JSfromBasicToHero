//number 
let num=3;
 
//string
let stringtext='waqas';

//boolean
let isstudent =true;

//null
let text = null;

//undefined
let a; 

//objet
let person ={
    name :"Hamza", //key : value
    age : 22,
    status: true
};


//same no difference
let isstatus=true
let person1 ={
    name :"waqas", //key : value
    age : 22,
    status: isstatus
};

let person2 ={
    name :"ahmed", //key : value
    age : 22,
    isstatus
};

person2.age=34;
person2.isstatus=false;
person2.name='taha'; 

// can be change in this way also 
let person2 ={
    name :"bila", //key : value
    age : 21,
    isstatus:true
};

//array

let arr=[10,20];

let friend1='Sham';
let friend2='fam';
let friend3='gam';
let friend4='dam';

let friends = ["Sham",'fam','gam','dam'];
console.log(friends.length);
friends[friends.length-1];

friends.pop() //last element now length will be 3
friends.push("Waqas");
friends.push("Waqas 2");
friends[3]='waqas 3';

let nums=[1,2,3,4,5,6];
let bol =[true,false,true]
let persons=[
    {name:'a',age:20},
    {name:'b',age:22},
];


let mixed =[42 ,'hello',true,{name:'x'}];

//comments ,semi colon & best practices
/*
This is 
    a 
     multiline comment

*/


