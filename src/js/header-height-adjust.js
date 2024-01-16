// Refs
const header = document.querySelector('.header');
const headerNavLinks = document.querySelectorAll('.header-nav-link');

// Body height adjust to compensate for positioned header height
(() => {
  const { height } = header.getBoundingClientRect();
  const headerHeight = `${height}px`;
  document.body.style.paddingTop = headerHeight;
  document.documentElement.style.scrollPaddingTop = headerHeight;
})();

// Listen to clicks on header nav links
(() => {
  headerNavLinks.forEach((link) => {
    link.addEventListener('click', handleNavLinkClick);
  });
})();

// Set an active nav link in header
function handleNavLinkClick(event) {
  headerNavLinks.forEach((link) => {
    link.classList.remove('active');
  });

  event.target.classList.add('active');
}
