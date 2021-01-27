// oldalsó menü kezelése *************************************************
const vegburger = document.getElementById('vegburger')
const nav = document.getElementById('nav')

// klikkre css osztályokat cserélünk
vegburger.addEventListener('click', function () {
  nav.classList.toggle('menu-active')
  vegburger.classList.toggle('fi-align-justify')
  vegburger.classList.toggle('fi-arrow-left')
})

// termékek beillesztése *************************************************
// TODO ez általában egy backendről jön
const products = [
  {
    id: 12,
    name: 'Málna',
    picture: 'malna.jpg',
    description: 'Kézzel termelt egészség',
    price: 3800,
    inStock: true
  },
  {
    id: 2,
    name: 'Áfonya',
    picture: 'afonya.jpg',
    description: 'Kézzel termelt egészség',
    price: 3250,
    inStock: true
  },
  {
    id: 37,
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
    <a id="${product.id}" class="addToCart">Kosárba</a>
  </div>`
})

// kosár kezelése *************************************************
const cart = {}

// gyűjtsük ki az addToCart css class-ú elemeket
const addToCartButtons = document.getElementsByClassName('addToCart')
// nézzük meg, hogy hány darab van belőle
const buttonCount = addToCartButtons.length
// lépegessünk végig rajta
for (let i = 0; i < buttonCount; i++) {
  // adjunk hozzájuk egyesével egy click figyelőt
  addToCartButtons[i].addEventListener('click', function (event) {
    // ha még nincs benne a kosárban akkor adjuk hozzá 1 darabbal
    if (cart[event.target.id] == undefined) {
      cart[event.target.id] = 1
    } else {
      // ha már benne van akkor növeljük a darab számot
      cart[event.target.id]++
    }
  })
}

const cartIcon = document.getElementById('cart-icon')
const cartContent = document.getElementById('cart-content')
const cartItems = document.getElementById('cart-items')
let total = 0

// tegyünk rá egy click figyelőt a kosár iconra
cartIcon.addEventListener('click', function () {
  // jelenítsük meg ami a kosárban van
  cartContent.classList.toggle('active')
  // jelenlegi cart-items tartalom kiürítése
  cartItems.innerHTML = ''
  // lépegessünk végig a cart-on és products tömbből keressük ki a szóban forgó terméket
  for (const id in cart) {
    // és jelenítsük meg a nevét, a cartban lévő darabszámot, és a termék árát
    const currentProduct = products.find(product => product.id == id)
    cartItems.innerHTML += `<li>${cart[id]} db - ${currentProduct.name} * ${currentProduct.price} Ft/db</li>`
    // adjuk hozzá ennek az értékét a teljes összeghez
    total += currentProduct.price * cart[id]
  }
  // a végén jelenítsük meg a teljes vásárlási összeget
  cartItems.innerHTML += `<li>Összesen: ${total} Ft</li>`
})
