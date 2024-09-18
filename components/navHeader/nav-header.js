const navHeader = {
  em: document.querySelector('.js-nav-header-nav'),
};
navHeader.linksEm = navHeader.em.querySelector('.js-nav-header-nav-links');
navHeader.toggleButton = navHeader.em.querySelector('.js-nav-header-nav-toggle-button');

navHeader.toggleButton.addEventListener('click', () => {
  navHeader.linksEm.classList.toggle('is-hidden');
  navHeader.toggleButton.classList.toggle('is-active');
});

export { navHeader };