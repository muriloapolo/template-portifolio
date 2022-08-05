//Funcão menu Toggle
const btnMobile = document.getElementById('btnMobile');
function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);
    if (active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar menu');
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir menu');
    }
}
btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

/* para apresentação */
const infosHeader = ["Desenvolvedor", "programador", "Front-End Developer"];

/*Adicionar classe no html*/
//Div Linguagens?
let langsClasseChildren = document.querySelector('.container-lang').children
Array.from(langsClasseChildren).forEach((langDiv)=>{
langDiv.classList.add('centralize')
})

/* SWEEPER FRAMEWORK */

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
