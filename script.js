const menuToggle = document.getElementById('mobile-menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('open');
  menuToggle.classList.toggle('active');
  menuToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
});
