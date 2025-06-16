// Callbacks
// A callback is a function passed into another function as an argument.
// Oldest method of handling asynchronous operations
// Can lead to "callback hell" with nested operations
// Limited error handling

// Example shows a simple user data fetch with a callback
function fetchuserdata(userid,callback) {
    setTimeout(() => {
        if (userid) {
            const user={
                id:userid,
                name:"Waqas",
                email:"wa4723165@gmail.com"
            };
            callback(null,user);

        }
        else{
            callback(new Error('Invalid User ID'));
            //callback(new Error('Invalid User ID'),null);
        }
    }, 1000);
}
//callback usage
// fetchuserdata(null,(error,user)=>{   //will give error
// fetchuserdata(0,(error,user)=>{      //will give error

fetchuserdata(123,(error,user)=>{
  if(error){
      console.log("Error fetching User Id",error);
      
  }
  else{
      console.log("user:" ,user);
      
  }
});