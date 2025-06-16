// Rest operators - collects remaining elements into an array or object
function sum(...numbers) {
    return numbers.reduce((total,num)=>total+num,0);
}
console.log(sum(1,2,3,4,5,6,7,8));

const fruit=["Apple","Banana","Cherry","Date"];
const [first,second,...remaining]=fruit;

console.log(first);
console.log(second);
console.log(remaining);


