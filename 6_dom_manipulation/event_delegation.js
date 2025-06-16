// Event delegation
//* Attaching a single event listener to a parent element to handle events for its children.
// * Useful for elements added dynamically.

const menulist=document.getElementById('menulist')
menulist.addEventListener("click",(event)=>{
    console.log(event.target);
    if(event.target.tagName==='LI'){
        console.log(`${event.target.textContent} clicked`)
    }
})