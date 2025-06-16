//classes & object
class Car{
    // brand='Tesla';
    // color='red';

    constructor(brand,color){
         this.brand=brand;  //property
         this.color=color;  //property

    }

    drive(){ //method
        console.log(`The ${this.color} color ${this.brand} is driving`)
    }

  
}

// const mycar=new Car();
const mycar1=new Car("Tesla","Red"); //object
console.log(mycar1);
mycar1.drive();

const newcar=new Car("Honda Civic","Red");
newcar.drive();

 //Encapsulation --Hide implementation details and expose only necessary parts.
 class BankAccount {
    #balance=0; //private property 

    deposit(amount){
        this.#balance+=amount
    }

    getBalance(){
        return this.#balance;
    }
 }

 const myaccount= new BankAccount();
 myaccount.deposit(100);
 console.log(myaccount.getBalance());
 
// Inheritance - One class can inherit properties and methods from another.
class Animal{
   eat(){
    console.log("Eating...");
   }
}

class Dog extends Animal{
    bark(){
        console.log("Barking...");
        
    }
}

const dog=new Dog();
dog.eat();
dog.bark();

// Polymorphism - Methods can behave differently based on the object.
class Animal1{
    speak(){
        console.log("Animal speaking")
    }
}

class Dog1 extends Animal1{
    bark(){
        console.log("Barking...")
    }
    speak(){
        console.log("Dog barks...")

    }
}

const dog1 =new Dog1();
dog1.speak();


const mw= new Animal1();
mw.speak();

// Abstraction - Hide complex logic and expose only essentials
class Shape{ //parent class
    constructor(){
        if(this.constructor===Shape){
            throw new Error ('Abstract class cannot be intantiated')
        }
    }
    //abstruct method
    area(){
        throw new Error('Method "Area" must be implement');
    }
}

class Circle extends Shape{  //child class
    constructor(radius){
        super();
        this.radius=radius;
    }
    area(){
         return Math.PI *this.radius**2;
    }
}

class Rectangle extends Shape{
    constructor(width,height){
        super();
        this.width=width;
        this.height=height;
    }

    area(){
        return this.width* this.height;
    }
}

const circle =new Circle(5);
console.log(circle.area()); //78.53981633974483

const rectangle =new Rectangle(10,5);
console.log(rectangle.area()); //50