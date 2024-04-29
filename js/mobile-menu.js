const refs = {
  burgerBtn: document.getElementById('js-open-menu'),
  menuBtn: document.getElementById('js-open-menu-text'),
  mobileMenu: document.querySelector('.js-menu-container'),
  modalLink: document.querySelectorAll('.mobile-menu__link'),
};

refs.burgerBtn.addEventListener('click', openMenu);
refs.menuBtn.addEventListener('click', openMenu);

refs.modalLink.forEach(link => link.addEventListener('click', closeMenu));

function openMenu(e) {
  document.body.classList.toggle('bg-scrolling-element-when-mobile-open');
  refs.mobileMenu.classList.toggle('mobile-open');
  window.addEventListener('keydown', closeMenu);
  window.document.body.addEventListener('click', closeMenu);
  if (document.body.childNodes[0].className === "backdrop") {
    return
  }
  document.body.insertAdjacentHTML("afterbegin", `<div class="backdrop"></div>`);
  
}

function closeMenu(e) { 
  if (e.code === 'Escape' || e.target === e.currentTarget || e.target.className === "backdrop") {
    refs.mobileMenu.classList.remove('mobile-open');
    document.body.classList.remove('bg-scrolling-element-when-mobile-open');
    window.removeEventListener('keydown', closeMenu);
    window.document.body.removeEventListener('click', closeMenu);
    const backdrop = document.querySelector('.backdrop');
    backdrop.remove();
  }
}

// ====================================================================
// (() => {
//   const mobileMenu = document.querySelector('.js-menu-container');
//   const openMenuBtn = document.querySelector('.js-open-menu');
//   const closeMenuBtn = document.querySelector('.js-close-menu');

//   const toggleMenu = () => {
//     const isMenuOpen = openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
//     openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
//     mobileMenu.classList.toggle('is-open');

//     const scrollLockMethod = !isMenuOpen ? 'disableBodyScroll' : 'enableBodyScroll';
//     bodyScrollLock[scrollLockMethod](document.body);
//   };

//   openMenuBtn.addEventListener('click', toggleMenu);
//   closeMenuBtn.addEventListener('click', toggleMenu);

//   // Закрываем мобильное меню на более широких экранах
//   // в случае изменения ориентации устройства.
//   window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
//     if (!e.matches) return;
//     mobileMenu.classList.remove('is-open');
//     openMenuBtn.setAttribute('aria-expanded', false);
//     bodyScrollLock.enableBodyScroll(document.body);
//   });
// })();