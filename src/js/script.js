// nav fix
window.onscroll = () => {
  const header = document.querySelector("header");
  const backtop = document.getElementById("backtop");
  const fixnav = header.offsetTop;
  if (window.pageYOffset > fixnav) {
    header.classList.add("navbar-fix");

    backtop.classList.remove("hidden");
  } else {
    header.classList.remove("navbar-fix");
    backtop.classList.add("hidden");
  } 
};
//Hamburger Menu
const hamburger = document.getElementById("hamburger");
// navmenu
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// klik di luar nav menu
window.addEventListener("click", (event) => {
    if (
        event.target != hamburger &&
        event.target != navMenu

    ) {
        hamburger.classList.remove("hamburger-active");
        navMenu.classList.add("hidden");
    }
    
    });

    // darkMode
const darkModeToggle = document.getElementById("darkmode-toggle");
const html = document.querySelector("html");

darkModeToggle.addEventListener("click", () => {
    darkModeToggle.checked ? [html.classList.add('dark') , localStorage.theme = 'dark']: [html.classList.remove('dark') , localStorage.theme = 'light'];
});

// local storage dark mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
    darkModeToggle.checked = true
  } else {
    document.documentElement.classList.remove('dark')
    darkModeToggle.checked = false
  }
