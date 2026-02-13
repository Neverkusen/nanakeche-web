  let lastScrollY = window.scrollY;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY && currentScrollY > 100) {
    // Si el usuario baja, ocultamos el Nav
    navbar.classList.add('navbar--hidden');
  } else {
    // Si el usuario sube (aunque sea un poco), mostramos el Nav
    navbar.classList.remove('navbar--hidden');
  }

  lastScrollY = currentScrollY;
});
