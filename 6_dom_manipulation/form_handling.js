//form validation
const form = document.getElementById('loginform');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Fix 1
  const username=document.getElementById('username').value;
  const password=document.getElementById('password').value;

  console.log(username,password);
  

  if(!username || !password){
    alert("all fields are required")
  }

});

//input processing
const inputfield=document.getElementById('username')
inputfield.addEventListener('input',(event)=>{
    console.log(inputfield.value);
    

})
//real time validation
const emaildata=document.getElementById('email')
const message =document.getElementById('validationmessage')  
emaildata.addEventListener('input',(event)=>{
    const email=emaildata.value;
    if(email.includes('@')&& email.includes('.')){
        message.textContent="Valid email"
        message.style.color="green";
    }
    else{
        message.textContent="Invalid email"
        message.style.color="red";
    }
})