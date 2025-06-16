//changing content
const message =document.getElementById("message");
message.textContent="New Message"; //change text

message.innerHTML="<b> Hello inner HTML </b>"; //changes html 

const image=document.getElementById("image")
image.setAttribute("alt","Hello boss");
image.setAttribute("src","waqas.png");

console.log(image.getAttribute('src'));


// Manipulating styles
// use the style property to change inline styles 
const styled=document.getElementById("style")
styled.style.color="blue";
styled.style.fontSize='20px'


// Adding / Removing classes
// use classList to add, remove or toggle classes.
const box=document.getElementById('box');
box.classList.add('shadow'); // adds 'shadow' class

box.classList.remove('red-box'); // removes 'red-box' class

box.classList.toggle('highlight'); // toggles 'highlight' class

// Adding & Removing Elements
// use appendChild, removeChild, innerHTML, etc...

const list=document.getElementById("list")
const newitem=document.createElement('li'); // creates a new element
newitem.textContent="Item 2"
list.appendChild(newitem) 

list.removeChild(list.firstElementChild) // removes 'Item 1'

// list.innerHTML="<li>Item 3</li> <li>Item 4</li>";
const newitem2=document.createElement("li")
newitem2.textContent="Item 1.5"
list.insertBefore(newitem2,list.firstChild); //insert item1.5 before item 2

//remove()
// removes an element directly
list.remove(); // removes the ul