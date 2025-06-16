// async/await
// async and await make handling promises easier and provide a synchronous-looking syntax.
// * Syntactic sugar over Promises
// * Makes asynchronous code look and behave more like synchronous code
// * Uses try/catch for error handling
// * Allows sequential async operations with clean syntax

function fetchuserdata(UserId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (UserId) {
                const user = {
                    UserId: UserId,
                    Name: "Waqas",
                    Email: "wa4723165@gmail.com"
                }
                resolve(user);
            }
            else {
                reject(new Error("Invalid user ID"))
            }
        }, 1000)
    });
}
async function asynsctaskoperation() {
    try {
        const result1 = await fetchuserdata(1);
        console.log(result1);
        const result2 = await fetchuserdata(2);
        console.log(result2);
        const result3 = await fetchuserdata(3);
        console.log(result3);

        // const result4 = await Promise.all()

        return true;
    }
    catch (error) {
        console.log(error);
        throw new Error("Error fetching Error");
        
    }
}

asynsctaskoperation().then((res) => {
    console.log(`result:${res}`);

})
    .catch((err) => {
        console.log(err);

    });

    //asyn await promise 
    async function getdata(){
        let promise=new Promise((resolve)=>{
            setTimeout(()=>{
                resolve("Data Recived");
            },10000)
        });
        let result = await promise;
        console.log(result);
        
    }
    getdata();

    // function testfun(opt1,opt2?){}   //type script
    // function testfun(opt1,opt2){}
    // testfun(1,2); op1=1,opt=2
    // testfun(2); op1=2
    // testfun(null,2); op1=null,opt2=2

    function test(option1, option2) {
        console.log(option1);
        console.log(option2);
      }
      test(2);
      test(null, 2);

