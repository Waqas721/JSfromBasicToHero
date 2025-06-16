console.log("Hello world");

//var x;

function add() {
    var x=9;
    if (x<10) {
        console.log(x);
        var x=20;
        console.log(x);

        
    }
}

//hoisting

function add1() {
    var x;
    x=9;
    if (x<10) {
      //  var x; //hoisting x=9 not undefined
        console.log(x);
         x=20;
         console.log(x);
    }
}

//let
function add2() {
    let x;
    x=9
    if (x<10) {
        console.log(x);
         x=20;
         console.log(x);

        
    }
}

add();
add1();
add2();