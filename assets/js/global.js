const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');
const themeToggle = document.querySelector('[data-theme-toggle]');
const root = document.documentElement;
const body = document.body;

const setThemeLabel = () => {
  if (!themeToggle) return;
  const isDark = root.getAttribute('data-theme') === 'dark';
  themeToggle.setAttribute('aria-label', isDark ? 'Attiva tema chiaro' : 'Attiva tema scuro');
};

const closeMenu = () => {
  if (!navToggle || !navList) return;
  navList.classList.remove('is-open');
  navToggle.classList.remove('is-open');
  navToggle.setAttribute('aria-expanded', 'false');
  body.classList.remove('is-menu-open');
};

const openMenu = () => {
  if (!navToggle || !navList) return;
  navList.classList.add('is-open');
  navToggle.classList.add('is-open');
  navToggle.setAttribute('aria-expanded', 'true');
  body.classList.add('is-menu-open');
};

const toggleMenu = () => {
  if (!navToggle || !navList) return;
  const isOpen = navList.classList.contains('is-open');
  isOpen ? closeMenu() : openMenu();
};

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches && !root.getAttribute('data-theme')) {
  root.setAttribute('data-theme', 'dark');
}

try {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) root.setAttribute('data-theme', savedTheme);
} catch (e) {}

setThemeLabel();

navToggle?.addEventListener('click', toggleMenu);

themeToggle?.addEventListener('click', () => {
  const current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  const next = current === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  try {
    localStorage.setItem('theme', next);
  } catch (e) {}
  setThemeLabel();
});

navList?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', closeMenu);
});

document.addEventListener('click', (event) => {
  if (!navList || !navToggle) return;
  const clickedInside = navList.contains(event.target) || navToggle.contains(event.target);
  if (!clickedInside) closeMenu();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeMenu();
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 760) closeMenu();
});