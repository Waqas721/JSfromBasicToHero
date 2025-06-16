// <!-- DOM (Document Object Model): Structure representing the HTML of a webpage, allowing JavaScript to manipulate page elements. -->



// getElementById() 
// Selects an element by its id.
// Returns a single DOM element 


const greet=document.getElementById('greeting');
console.log(greet.textContent);

//getelementsbyclasname()
// Select elements by their class.
// Returns a live HTMLCollection (array-like object)

const items=document.getElementsByClassName('item')
console.log(items[0].textContent)
console.log(items[1].textContent)

// getElementsByTagName()
// Select elements by their tag name
// Returns a live HTMLCollection

const para=document.getElementsByTagName('p');
console.log(para[0].textContent);
console.log(para[1].textContent);

// querySelector()
// Selects the first matching element using a CSS selector
const special=document.querySelector('.container #special')
//const special=document.querySelector('#special')
console.log(special.textContent);

// querySelectorAll()
// Selects all matching elements using a CSS selector
// Returns a NodeList (not live, unlike HTMLCollection)

const menuitems=document.querySelectorAll('.menuitems');
menuitems.forEach((items)=>{
    console.log(items.textContent)
})
