// Скрипт для скрытия прелоадера с плавным эффектом
document.addEventListener("DOMContentLoaded", () => {
    const preloader = document.getElementById("preloader");
    const content = document.getElementById("content");

    // Эмулируем загрузку контента
    setTimeout(() => {
        preloader.classList.add("hidden"); // Добавляем класс, чтобы запустить анимацию
        content.style.display = "block";
        setTimeout(() => {
            preloader.style.display = "none"; // Убираем элемент полностью после анимации
        }, 1000); // Ждём 1 секунду (длительность анимации в CSS)
    }, 2000); // 2 секунды задержки для демонстрации
});