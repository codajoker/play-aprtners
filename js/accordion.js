const accordionTitles = document.querySelectorAll(".accordionTitle");

accordionTitles.forEach((accordionTitle) => {
    accordionTitle.addEventListener("click", () => {
        const isOpen = accordionTitle.classList.contains("is-open");
        
        // Закрываем все открытые аккордеоны
        document.querySelectorAll(".is-open").forEach((el) => {
            el.classList.remove("is-open");
            el.querySelector(".faq__list-icon").src = "./images/icon/show_btn.svg";
        });

        // Открываем текущий аккордеон и меняем иконку
        accordionTitle.classList.toggle("is-open", !isOpen);
        accordionTitle.querySelector(".faq__list-icon").src = isOpen ? "./images/icon/show_btn.svg" : accordionTitle.dataset.openIcon;
    });
});
