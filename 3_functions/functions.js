// function declaration 

// function - reusable blocks of code

function functionName(parameters) { // parameters/arguements
    // block of code
}

function greet(){
    console.log("Hello World");
    
}
//parameter function
 function greetings(message){
    console.log(`${message}`);
    
}

greet()
greetings("Hi");

//function expression
const greet1=function(){
    console.log(`Hello !`);
}
const greet2=function(message){
    console.log(`Hello ! ${message}`);
}
// console.log(greet1);
greet1();
greet2("Waqas");
greet2("Hamza");

// arrow functions - Simplified syntax for functions
const sub=(a,b)=>{
    return a-b
}
const add=(a,b)=>a+b;

console.log(sub(7,3));
console.log(add(7,3));

//default parameters in function
const greet3=function(message="Ahmed"){
    console.log(`Hello ! ${message}`);
}
greet3();
greet3('Aslam');

// higher-order functions & callbacks
// a function that accepts another function as an arguement - higher-order function
//let array1 = [1, 2];

function processarry(arr,callback){
  for (let i = 0;i < arr.length;i++) {
    callback(arr[i]);
    
  }
}

let array1 = [1, 2];
processarry(array1,function(num){
    console.log(num*2); // 2, 4
});

function multiplyNumber(num){
    console.log(10*num);
    
}
processarry(array1,multiplyNumber) ;// 2, 4;

//scope,closure
// scope - Accessibility of variables (global, local & block)
// closure - Function that remembers its outer variables

// let a=5; //gloabal variable
function outer() {
    let count=0; //local and block
   // a=10;
    return function inner(params) {
        count++;
        console.log(`count : ${count}`);
        // let x=3; //block
        
    };
}

let counter = outer(); // `counter` is assigned the inner() function with a closure over `count`
counter(); // Logs "Count: 1"
counter(); // Logs "Count: 2"
counter(); // Logs "Count: 3"

// IIFE (Immediately Invoked Function Expression):
(function(){
    console.log('IIFE');
    
})();

// Currying
// Currying is the process of transforming a function with multiple arguments into a sequence of functions, each taking one argument.

const addNums = a => b =>c=> a + b+c;
console.log(addNums(5)(3)(2));
