/* 
ES6+ Features:
ES6 (ECMAScript 2015) introduced new syntax and features to JavaScript to make it more modern and developer-friendly. Later updates (ES7, ES8, etc.) added even more features.
*/

// Let and Const (vs var):

// Block-scoped variable declarations.
// Replaced var for better scope management.
let x = 10; // Can be reassigned
const y = 20; // Cannot be reassigned

//arrow functions:
// Arrow Functions:
// Concise syntax for writing functions.
// Does not have its own this.
const greet=()=>{console.log("Hello es6+")}

// Template Literals:
// Multi-line strings and string interpolation.
const name1="Waqas";
console.log(`Name : ${name1}`)


// Destructuring:
// Extract values from arrays/objects into variables.
const arr=[1,2,3]
const[first,second,third]=arr;

const sub={
    x:34,
    y:44
}
const{x:a,y:b}=sub;

// Default Parameters:
// Assign default values to function parameters.

const multiply=(a,b=5)=>a*b;

// Spread and Rest Operators:

// Spread (...): Expands arrays or objects.
// Rest (...): Collects arguments into an array.
const arr1 = [1, 2, 3];
const copy = [...arr];
const sum = (...args) => args.reduce((a, b) => a + b);

// Classes:
// Introduced in ES6 for Object-Oriented Programming.
class Person {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`Hello, ${this.name}`);
    }
}

// Promises and Async/Await: For asynchronous operations.
const fetchData = async () => {
    const data = await fetch('https://api.example.com');
    console.log(data);
};

// Modules - Use import and export for modular programming.
export const greet1 = () => console.log("Hello!");

// Symbol Data Type - 
// Unique and immutable primitive data type
// Created using Symbol() function
// Guaranteed to be unique, even with the same description
const sym1 = Symbol('waqas');
const sym2 = Symbol('waqas'); 

console.log(sym1.description,sym2.description)
console.log((sym1==sym2))  //false
console.log((sym1===sym2)) //false
//use  case
const ID =Symbol('id')
const user={
    name1:"waqas",
    [ID]:123  // Using Symbol as a unique identifier
    // Uses the value of ID (a Symbol) as the key
};

console.log(user.name1);
console.log(user['name1']);

console.log(user.ID);//undefined (no property named 'ID')
console.log(user[ID]);//123 (access the property with symbol key)

/*
Key Characteristics

Cannot be accidentally created
Used as unique object keys
Not enumerable in for...in loops
Helpful for creating non-string property keys

Practical Applications

Creating unique object keys
Defining "hidden" properties
Creating non-string property keys
Preventing property name collisions
*/


//map & set data structures 
/* 
Map
Key-value collection
Keys can be of any type
Maintains insertion order
Efficient key lookups 
*/
//creating a map
const userroles=new Map();
//adding enteries
userroles.set("Waqas","Admin");
userroles.set("Hamza","User");

//retriving
console.log(userroles.has('Waqas'));
console.log(userroles.get("Hamza"));

for(const [user,role] of userroles){
    console.log(`User: ${user} ,Role:${role}`);
}

//map size & deletion 
console.log (userroles.size);
userroles.delete("Hamza");
console.log (userroles.size);
console.log(userroles)


/*
Set

Unique value collection
No duplicate values allowed
Fast lookup and removal
 */

//creating set 
const uniquenumbers=new Set([1,2,3,3,4,4,5]);
console.log(uniquenumbers);

//adding & check 
uniquenumbers.add(6);
console.log(uniquenumbers);
console.log(uniquenumbers.has(4));

//removing 
uniquenumbers.delete(4)
console.log(uniquenumbers);
console.log(uniquenumbers.has(4));

//set operations
const  set1=new Set([1,2,3,4,5,6])
const  set2=new Set([2,4,6,7,8])


const union1=new Set([...set1,...set2])
console.log(union1)
const unionset=set1.union(set2); //launched in 2024 
console.log(unionset)


//intersection 
const intersection =new Set([...set1].filter(x=>set2.has(x)));
console.log(intersection);
const intersection1=set1.intersection(set2);
console.log(intersection1);

// Best Practices
// Use Symbols for unique, non-string property keys
// Maps for key-value storage with complex keys
// Sets for unique value collections


//special Fetures 
//exponential operator
console.log(2**3); //8

//includes()
const arr2=[1,2,3]
console.log(arr2.includes(4)); //true

//object.values() & object.entries & object keys
const obj={a:1,b:2};
console.log(Object.values(obj)) //[1,2]
console.log(Object.entries(obj)) //[ [ 'a', 1 ], [ 'b', 2 ] ]
console.log(Object.keys(obj)) //[ 'a', 'b' ]

//flat method
const nestedarray =[1,[2,3],[4,[[5],6]]]
console.log(nestedarray.flat(3)) //[ 1, 2, 3, 4, 5, 6 ]
// depth: An optional parameter specifying how deep the flat() method should go while flattening the nested array. The default value is 1.

//optional chaining
const user12={};
console.log(user12?.address?.street); //undefined (no error)

//nullish coalescing (??)
const value=null;
console.log (value ?? 45); //45  

console.log (value || 43); //43

// BigInt
const bigNumber = 1234567890123456789012345678901234567890n;

let xy=0;
xy||=5;
// Purpose: Assigns 5 to xy if xy is falsy.
// Falsy Values: In JavaScript, false, 0, '' (empty string), null, undefined, and NaN are considered falsy.
console.log(xy);


// equivalent code
if(!xy){
    xy=5;
}

xy &&= 10;
// Purpose: Assigns 10 to x if x is truthy.
// Truthy Values: Any value that is not falsy is considered truthy.
console.log(xy);
// equivalent code
if(xy){
    xy=10;
}

// Numeric Separators
const billion = 1_000_000_000; // More readable
console.log(billion);

// Finding last element
const array=[1,2,3,4,5];
console.log(array.findLast(x=>x<4));

// array-copy methods
// toSorted() - Returns a sorted copy of the array.
const arr3 = [3, 1, 2];
const sortedArr = arr3.toSorted();
const sortedArr1 = arr3.toSorted((a,b)=>b-a);
/*Now JS starts comparing values like this:

Compare 3 and 1:

b - a = 1 - 3 = -2

Result is negative → 1 comes before 3

Compare 3 and 2:

b - a = 2 - 3 = -1

Again, negative → 2 comes before 3

So it ends up as [3, 2, 1]

 */
console.log(sortedArr1);
console.log(sortedArr); // [1, 2, 3]
console.log(arr3);       // [3, 1, 2] (unchanged)

//toreversed()
const reversedarr=arr3.toReversed();
console.log(reversedarr)

// toSpliced()
// The toSpliced() method is a non-mutating version of the splice() method. It allows you to create a new array with the specified changes while leaving the original array unchanged.

// array.toSpliced(start, deleteCount, ...itemsToAdd)
const arr12=[1,2,3,4,5];
const newArr=arr12.toSpliced(2,2);//1,2,5
console.log(newArr);

const newarr1=arr12.toSpliced(1,0,'a','b');
console.log(newarr1);

//splice
arr12.splice(2,2);
console.log(arr12);
