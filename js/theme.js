document.addEventListener("DOMContentLoaded", function () {
    const themeToggleBtn = document.getElementById("theme-toggle-btn");
    const themeStyle = document.getElementById("theme-style");

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        themeStyle.setAttribute("href", "css/dark-style.css");
        themeToggleBtn.textContent = "Light Theme";
    } else {
        themeStyle.setAttribute("href", "css/style.css");
        themeToggleBtn.textContent = "Dark Theme";
    }

    themeToggleBtn.addEventListener("click", function () {
        const currentTheme = themeStyle.getAttribute("href");

        if (currentTheme.includes("dark-style.css")) {

            themeStyle.setAttribute("href", "css/style.css");
            localStorage.setItem("theme", "light"); // ذخیره تم لایت
            themeToggleBtn.textContent = "Dark Theme";
        } else if (currentTheme.includes("style.css")) {

            themeStyle.setAttribute("href", "css/dark-style.css");
            localStorage.setItem("theme", "dark"); // ذخیره تم دارک
            themeToggleBtn.textContent = "Light Theme";
        }
    });
});
