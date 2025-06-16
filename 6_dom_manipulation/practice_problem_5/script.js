// Problem 1: Change the background color of a div when a button is clicked.
const div=document.getElementById('box')
const btn=document.getElementById('btn')

btn.addEventListener('click',()=>{
    div.style.backgroundColor="red";
})
