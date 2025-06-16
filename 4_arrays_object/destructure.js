// object destructuring - extracts properties from an object into variables
const user={
    Name:"Waqas",
    Age:23,
    Phone: 888
};
const name12 = user.Name;

// destructuring of an object
// const { age } = user;
const { Name, Age,Phone } = user;
console.log(Name, Age,Phone);

// Array destructuring - extracts values from an array into variables
const colors = ['Red', 'Green', 'Blue'];
const [first, third, second] = colors;
console.log(first, second, third);