const vegburger = document.getElementById('vegburger')
const nav = document.getElementById('nav')

vegburger.addEventListener('click', function (event) {
  nav.classList.toggle('menu-active')
})