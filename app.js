const vegburger = document.getElementById('vegburger')
const nav = document.getElementById('nav')

// klikkre css osztályokat cserélünk
vegburger.addEventListener('click', function (event) {
  nav.classList.toggle('menu-active')
  vegburger.classList.toggle('fi-align-justify')
  vegburger.classList.toggle('fi-arrow-left')
})

// Modern javascript - plain / vanilla js
// 2005 jQuery $('#vegburger')
// keretrendszerek - vue, react, angular