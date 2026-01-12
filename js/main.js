// Load reusable components
function loadComponent(id, file) {
    fetch(file)
        .then(res => res.text())
        .then(data => document.getElementById(id).innerHTML = data);
}

loadComponent("header", "header.html");
loadComponent("footer", "footer.html");

// Dark mode toggle
function toggleDarkMode() {
    document.body.classList.toggle("dark");
    localStorage.setItem("darkMode",
        document.body.classList.contains("dark"));
}

// Load saved mode
if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark");
}
