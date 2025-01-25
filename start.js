// Скрипт для скрытия прелоадера с плавным эффектом
document.addEventListener("DOMContentLoaded", () => {
    const preloader = document.getElementById("preloader");
    const content = document.getElementById("content");

    // Эмулируем загрузку контента
    setTimeout(() => {
        preloader.classList.add("hidden"); // Добавляем класс, чтобы запустить анимацию
        setTimeout(() => {
            preloader.style.display = "none"; // Убираем элемент полностью после анимации
            content.style.display = "block"; // Показываем контент
        }, 1000); // Ждём 1 секунду (длительность анимации в CSS)
    }, 4000); // 2 секунды задержки для демонстрации
});