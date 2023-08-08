function setTheme(mode) {
    var root = document.documentElement;

    if (mode === "dark") {
        root.classList.add('dark')
    } else if (mode === "light") {
        root.classList.remove('dark')
    }

    localStorage.setItem("theme-storage", mode);
}

theme = localStorage.getItem("theme-storage");
if (!theme) {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        theme = "dark";
    } else {
        theme = "light";
    }
}

setTheme(theme);

if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
        setTheme(event.matches ? "dark" : "light");
    });
}

toggle = document.getElementById("theme-toggle");
if (toggle) {
    toggle.addEventListener("click", () => {
        theme = localStorage.getItem("theme-storage");
        if (theme === "light") {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    });
}
