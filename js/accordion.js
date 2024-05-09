const accordions = document.querySelectorAll(".accordion");

function toggleAccordion(accordion) {
  accordions.forEach(el => {
    if (el !== accordion && el.classList.contains('active')) {
      el.classList.remove('active');
      el.nextElementSibling.style.maxHeight = null;
      el.querySelector('.faq__list-icon').src = "./images/icon/show_btn.svg";
    }
  });

  const isOpen = accordion.classList.toggle("active");
  accordion.querySelector(".faq__list-icon").src = isOpen ? accordion.dataset.openIcon : "./images/icon/show_btn.svg";
  const panel = accordion.nextElementSibling;
  panel.style.maxHeight = isOpen ? panel.scrollHeight + "px" : null;
}

accordions.forEach((accordion, index) => {
  accordion.addEventListener("click", () => {
    toggleAccordion(accordion);
  });

  // Open the first accordion by default
  if (index === 0) {
    accordion.classList.add("active");
    accordion.querySelector(".faq__list-icon").src = accordion.dataset.openIcon;
    const panel = accordion.nextElementSibling;
    panel.style.maxHeight = panel.scrollHeight + "px";
  }
});
// ===========
// const accordionTitles = document.querySelectorAll(".accordionTitle");

// accordionTitles.forEach((accordionTitle) => {
//     accordionTitle.addEventListener("click", () => {
//         const isOpen = accordionTitle.classList.contains("is-open");
        
//         // Закрываем все открытые аккордеоны
//         document.querySelectorAll(".is-open").forEach((el) => {
//             el.classList.remove("is-open");
//             el.querySelector(".faq__list-icon").src = "./images/icon/show_btn.svg";
//         });

//         // Открываем текущий аккордеон и меняем иконку
//         accordionTitle.classList.toggle("is-open", !isOpen);
//         accordionTitle.querySelector(".faq__list-icon").src = isOpen ? "./images/icon/show_btn.svg" : accordionTitle.dataset.openIcon;
//     });
// });
