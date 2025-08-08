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


function aparecerProjetos () {
  const Projetos = document.getElementById('projetos')
  const Skills = document.getElementById('skills')


  Skills.style.display = 'none'
  Projetos.style.display = 'flex'

}

function aparecerSkills () {
  const Projetos = document.getElementById('projetos')
  const Skills = document.getElementById('skills')


  Skills.style.display = 'grid'
  Projetos.style.display = 'none'

}

