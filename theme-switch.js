const themeSwitch = document.getElementById("theme-switch");
const lightIcon = document.getElementById("light-icon");
const darkIcon = document.getElementById("dark-icon");

const theme = localStorage.getItem("theme");
document.body.setAttribute("data-theme", theme);


themeSwitch.addEventListener("click", () => {
    
    const body = document.body;

    if (body.getAttribute("data-theme") == "dark") {
        document.body.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
        lightIcon.style.display = "none";
        darkIcon.style.display = "block";
    } else {
        document.body.setAttribute("data-theme", "dark")
        localStorage.setItem("theme", "dark")
        lightIcon.style.display = "block";
        darkIcon.style.display = "none";
    }
})