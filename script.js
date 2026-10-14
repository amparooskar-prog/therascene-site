const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.site-nav');
const programDropdown = document.querySelector('.nav-dropdown');
const programToggle = document.querySelector('.submenu-toggle');

function closeProgramMenu() {
  if (!programDropdown || !programToggle) return;
  programDropdown.classList.remove('open');
  programToggle.setAttribute('aria-expanded', 'false');
}

programToggle?.addEventListener('click', () => {
  const isOpen = programToggle.getAttribute('aria-expanded') === 'true';
  programToggle.setAttribute('aria-expanded', String(!isOpen));
  programDropdown.classList.toggle('open', !isOpen);
});

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Open menu' : 'Close menu');
  navigation.classList.toggle('open', !isOpen);
  if (isOpen) closeProgramMenu();
});

navigation.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open menu');
    navigation.classList.remove('open');
    closeProgramMenu();
  });
});

document.addEventListener('click', (event) => {
  if (programDropdown && !programDropdown.contains(event.target)) closeProgramMenu();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    const wasOpen = programToggle?.getAttribute('aria-expanded') === 'true';
    closeProgramMenu();
    if (wasOpen) programToggle.focus();
  }
});
