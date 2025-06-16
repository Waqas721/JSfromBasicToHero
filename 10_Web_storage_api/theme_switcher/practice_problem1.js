// Practice Problem 1: User Preferences (Theme Switcher)
// Problem: Implement a light/dark mode theme switcher for a webpage. The user's theme preference should be saved in localStorage so that it persists even after the user refreshes the page or reopens the browser.
// Steps:
// * Create a simple webpage with a button that toggles between light and dark modes.
// * Save the user's theme choice (light or dark) in localStorage.
// * On page load, check localStorage for the saved theme and apply it.
const body = document.getElementById('body');
const togglebtn=document.getElementById('togglebtn')
function applytheme(theme) {
    if(theme==='dark'){
          body.classList.add('dark-mode');
          body.classList.remove('light-mode')
    }
    else{
        body.classList.remove('dark-mode');
        body.classList.add('light-mode')
    }
}


const Savedtheme=localStorage.getItem('theme');

if(Savedtheme){
    applytheme(Savedtheme);
}
else{
    //default to lightmode if no theme is stored
    applytheme('light');
}

//toggle theme on button click 
togglebtn.addEventListener('click',()=>{
    const currenttheme =body.classList.contains('dark-mode')?'dark':'light';
    const newtheme = currenttheme==='dark'?'light':'dark'
    localStorage.setItem('theme',newtheme)
    applytheme(newtheme);
});