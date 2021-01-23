const vegburger = document.getElementById('vegburger')
const nav = document.getElementById('nav')

// klikkre css osztályokat cserélünk
vegburger.addEventListener('click', function (event) {
  nav.classList.toggle('menu-active')
  vegburger.classList.toggle('fi-align-justify')
  vegburger.classList.toggle('fi-arrow-left')
})

// ez általában egy backendről jön
const products = [
  {
    name: 'Málna',
    picture: 'malna.jpg',
    description: 'Kézzel termelt egészség',
    price: 3800,
    inStock: true
  },
  {
    name: 'Áfonya',
    picture: 'afonya.jpg',
    description: 'Kézzel termelt egészség',
    price: 3250,
    inStock: true
  },
  {
    name: 'Szeder',
    picture: 'szeder.jpg',
    description: 'Kézzel termelt egészség',
    price: 1700,
    inStock: true,
    variations: ['fehér', 'fekete']
  }
]

const productsSection = document.getElementById('products')

// TODO inStock, variations

products.forEach(product => {
  productsSection.innerHTML += `<div>
    <h2>${product.name}</h2>
    <p>${product.description}</p>
    <img src="./img/${product.picture}">
    <h3>${product.price} Ft</h3>
    <a href="#">Kosárba</a>
  </div>`
})