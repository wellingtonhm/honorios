/* Abriri e fechar menu ao clicar no icone: hamburger e X*/
const nav = document.querySelector('.menu-mobile')
const navdois = document.querySelector('.menu-x')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show');
    navdois.classList.toggle('show')
  })
}

/* Quando clicar em um item do menu, esconder o menu*/
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
    navdois.classList.remove('show')
  })
}

/* Mudar header da pagina quando der socroll*/
const header = document.querySelector('#header')
var navHeight = header.offsetHeight - 20;

function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    // scroll maior que a altura do header
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
    //menor que a aultura do header
  }
}

/* Botão voltar para o topo */
const backToTopButton = document.querySelector('.back-to-top')

function backToTop() {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

/* When Scroll */
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
})