// Problem 1 - filter students by grade
const student=[
    {name:"Waqas",grade:"A"},
    { name: "Bob", grade: "B" },
    { name: "Charlie", grade: "A" },
];
const topstudent=student.filter((student)=>student.grade==="A");
console.log(topstudent);

// problem 2 - destructure personal information
const person={
    name:"Waqas",
    age:23,
    city:"Karachi"
}
 const {name,age,city}=person
 console.log(name);
 console.log(age);
 console.log(city);

// problem 3 - Use map to create a new array to double the element value of original array
const nums=[1,2,3,4,5];
const doubled=nums.map(nums=>nums*2);
console.log(doubled);


 