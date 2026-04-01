document.addEventListener('DOMContentLoaded', () => {
  if (window.AOS) {
    AOS.init({
      duration: 750,
      once: true,
      offset: 80,
      easing: 'ease-out-cubic'
    });
  }

  const navbar = document.querySelector('.navbar');
  const backToTop = document.querySelector('.back-to-top');

  const handleScroll = () => {
    const y = window.scrollY;
    if (navbar) navbar.classList.toggle('scrolled', y > 30);
    if (backToTop) backToTop.classList.toggle('show', y > 300);
  };

  handleScroll();
  window.addEventListener('scroll', handleScroll);

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId.length > 1) {
        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });
});
