/*
Practice problems

1. Write a program to check if a number is positive, negative, or zero.
*/

let num = "a";

if (num === 0) {
    console.log(`Number is zero`);
} 
else if (num < 0) {
    console.log(`Number is negative`);
}
else if(isNaN(num)){
    console.log("Please enter a valid number!");
}
else {
    console.log(`Number is positive`);
}

// 2. Write a program to print numbers from 1 to 10 using a for loop.

for (let index = 1; index <11; index++) {
    console.log(index);    
}

// 3. Create a simple program that handles a division by zero error.
try {
    let num=10/0
    console.log(num);

} catch (error) {
    // console.log('error',error.message);
    console.log('error', error);
    
}