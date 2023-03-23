const navBar = document.getElementById("nav-bar");


//Event listner that listens for a click event and set the display of the navbar to flex or none,
// depending on whether it is the menu or close/Exit button that is clicked
window.addEventListener("click",(e) => {
    if(e.target.id === "menu") {

        navBar.classList.add("slide-in");

        if (navBar.classList.contains("slide-out")) {

            navBar.classList.remove("slide-out");

        }

    } else if (e.target.id === "close-btn") {
        navBar.classList.add("slide-out");
        navBar.classList.remove("slide-in");
    }
});

//Event lister that listens to changes in screen size and displays the nav bar when it is greater 
// than 900px
window.addEventListener("resize", () => {
    if (screen.width >= 900) {
        navBar.style.transform = "translateX(0)";
    } else {
        navBar.style.transform = "translateX(100vw)";
    }
});