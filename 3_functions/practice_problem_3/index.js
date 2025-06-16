/* Practice Problems:

* Problem 1: 
Write a function that takes two numbers 
and returns their sum
*/

function sum(a,b){
    console.log(a+b);
    
}
sum(10,13);

//Problem 2: Write a function that accepts an array and a function as arguments, and applies the function to each element in the array.
function sumarr(arr,callback){
    for (let index = 0; index < arr.length; index++) {
        callback(arr[index]);
        
    }
}

sumarr([1,2,3],function mul(num){
    console.log(num *num);
    
});