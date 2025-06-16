/*
 Structure of try...catch...finally

 try Block: Code that may throw an error is written here.
 catch Block: Code to handle the error if it occurs.
 finally Block: Code that will execute regardless of whether an error occurred or not. (Optional)
*/
try {
    //code 
    let num = 10 / 0;
    //    num;
    console.log(num);

    let a = Number("Hello");
    console.log(a);
    
    if(isNaN(a)){
        // throw new Error("Not a number");
        // throw ("Not a Number")
         throw "Not a Number"
    }

    console.log(a);


} catch (error) {
    console.log("Error got : " + error);

} finally {
    console.log('execution finished');

}
