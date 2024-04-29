const modalContainerRef = document.getElementById('js-modal-container');
const eventLinkRef = document.getElementById('js-event-btn');
const headerRef = document.getElementById('js-header');

eventLinkRef.addEventListener('click', openModal);

function openModal() {
    modalContainerRef.classList.add('is-show');
    document.body.style.overflow = "hidden";
    headerRef.style.position = 'relative';
    headerRef.style.zIndex = 99999;
    window.addEventListener('keydown', closeModal);
  window.document.body.addEventListener('click', closeModal);
}

function closeModal(e) { 
    if (e.code === 'Escape' || e.target === modalContainerRef) {
    document.body.style.overflow = "auto";
    headerRef.style.position = 'static';
    modalContainerRef.classList.remove('is-show');
    window.removeEventListener('keydown', closeModal);
    window.document.body.removeEventListener('click', closeModal);
  }
}