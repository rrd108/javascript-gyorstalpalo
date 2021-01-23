const vegburger = document.getElementById('vegburger')
const nav = document.getElementById('nav')

vegburger.addEventListener('click', function (event) {
  nav.classList.toggle('menu-active')
  vegburger.classList.toggle('fi-align-justify')
  vegburger.classList.toggle('fi-arrow-left')
})