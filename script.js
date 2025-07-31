window.addEventListener('scroll', () => {
  const altura = window.scrollY;
  const blurs = document.querySelector('.blurs');

  if (altura > 500) {
    blurs.classList.add('visivel');
    blurs.classList.remove('oculto');
  } else {
    blurs.classList.remove('visivel');
    blurs.classList.add('oculto');
  }
});

