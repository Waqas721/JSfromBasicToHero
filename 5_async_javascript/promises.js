// Promise:
//An object representing the eventual completion or failure of an asynchronous operation.
// * Introduced to solve callback limitations
// * Provides cleaner chaining of asynchronous operations
// * Has three states: pending, fulfilled, rejected
// * Allows .then() and .catch() for handling results and errors

function fetchuserdatapromise(userid) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userid) {
                const user = {
                    userid: userid,
                    username: "Waqas",
                    email: "wa4723165@gmail.com"
                };
                //object manipulation 
                user["email"] = "wa2315@gmail.com";
                resolve(user);
            }
            else {
                reject(new Error("Invalid UserId"))
            }

        }, 1000)
    });
}

//usage
fetchuserdatapromise(123)
    .then((result) => {
        //resolve
        console.log(result);
        /*fetchuserdatapromise(12).then((result1)=>{
           console.log(result1);
           
        })
        .catch((err1)=>{
           console.log(err1);
           
        });*/
    })
    .catch((err) => {
        //reject
        console.log(err);


    })
    .finally(() => {
        console.log("Task finished");

    })


//promise.all()

Promise.all([
    fetchuserdatapromise(1),
    fetchuserdatapromise(2),
    fetchuserdatapromise(3)
])
    .then((results) => {
        console.log(results);

    })
    .catch((error) => {
        console.log(error);

    });

// fetchuserdatapromise(4)
//     .then((res) => {
//         fetchuserdatapromise(5)
//             .then((re) => {
//                 fetchuserdatapromise(6)
//                     .then((re1) => {

//                     })
//                     .catch((err) => { })
//             })
//             .catch((err) => { })
//     })
//     .catch((err1) => {

//     })

