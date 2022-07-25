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
        event.target.matches("#hamburger") ||
        event.target.matches("#nav-menu")

    ) {
        return;
    }
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
    }
);