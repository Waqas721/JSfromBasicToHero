// addEventListener() - Binds an event to an element
const button=document.getElementById('mybutton')

//event types 
//click event
button.addEventListener("click",()=>{
    alert("button clicked")
})
//mouse events
button.addEventListener("mouseover",()=>{
 console.log("mouser hover over the button");
 
})

//keyboard events
const text=document.getElementById('name');
text.addEventListener('keydown',(event)=>{
 console.log(`key pressed :${event.key}`);
 
})

//forms events html 
const forms=document.getElementById('myform');
forms.addEventListener('submit',(event)=>{
  event.preventDefault(); //reloading of tab
  console.log("form submitted",event);

  const formData =new FormData(forms);
  console.log(formData.get("username"))

  for(const [key,value] of formData.entries()){
    console.log(`${key}:${value}`);
  }
  
});