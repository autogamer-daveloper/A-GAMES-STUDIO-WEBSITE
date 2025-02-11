document.addEventListener("DOMContentLoaded", () => {
    const preloader = document.getElementById("preloader");
    const content = document.getElementById("content");

    setTimeout(() => {
        preloader.classList.add("hidden");
        setTimeout(() => {
            preloader.style.display = "none";
            content.style.display = "block";
        }, 1000);
    }, 2000);
});