// nav fix 
window.onscroll = ()=>{
    const header = document.querySelector('header')
    const fixnav= header.offsetTop;
    if(window.pageYOffset>fixnav){
        header.classList.add('navbar-fix')
    }else{
        header.classList.remove('navbar-fix')
    }
}
//Hamburger Menu
const hamburger = document.getElementById('hamburger')
// navmenu
const navMenu = document.getElementById('nav-menu')

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('hamburger-active')
    navMenu.classList.toggle('hidden')
});