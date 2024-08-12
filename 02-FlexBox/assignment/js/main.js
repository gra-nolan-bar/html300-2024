document.addEventListener('DOMContentLoaded', function() {
  const toggleButton = document.querySelector('.layout__nav-toggle');
  const navItems = document.querySelector('.layout__nav-items');

  toggleButton.addEventListener('click', function() {
      const isOpen = navItems.classList.toggle('open');
      toggleButton.setAttribute('aria-expanded', isOpen);
  });
});
