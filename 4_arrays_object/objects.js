const student={
    Name:"Waqas",
    Age:22,
    Grade:"A"
};

console.log(student.Name);

//object methods and this keywords
// object methods - Functions defined inside objects.They can operate on the object’s properties.
const person={
    Name:"Waqas",
    LastName:"Ansari",
    FullName(){
        return (`${this.Name} ${this.LastName}`);
        
    }
};
console.log(person.FullName());
// this keyword - refers to the object that is calling the method. in above example this.firstName refers to person.firstName

console.log(this);

/* 
What is this?

It’s a reference to the object that the function 
is currently attached to or being called from.
Its value depends on how a function is called, not where it's written.

Why is this Important?

It allows functions to be flexible and reusable across different objects.
It helps in accessing properties or methods of the object 
that is calling the function.
*/

// Arrow functions don’t have their own this. Instead, they inherit this from the surrounding (lexical) scope.

const person1={
    Name:"Waqas",
    LastName:"Ansari",
    FullNam:() =>{
        return (`${this.Name} ${this.LastName}`);
        
    }
};
console.log(person1.FullNam());


// Lexical scope refers to the fact that the value of this (or any variable) in a function is determined by where the function is defined, not where it is called

