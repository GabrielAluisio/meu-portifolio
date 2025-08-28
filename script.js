window.addEventListener('scroll', () => {
  const altura = window.scrollY;
  const blurs = document.querySelector('.blurs');

  if (altura > 650) {
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

function ver_video() {
  const demontracao = document.getElementById("demonstracao")
  const video = document.getElementById("painel_ver_mais") || document.getElementById("painel_cheio")
  const x = document.getElementById("x")


  if (video.id === "painel_ver_mais") {
    video.id = "painel_cheio"
    demonstracao.className = "video-fullscreen"
    x.style.display = 'block'
  } else {
    x.style.display = 'none'
    video.id = "painel_ver_mais"
    demonstracao.className = "demonstracao"
  }
}

