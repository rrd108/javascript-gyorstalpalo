// oldalsó menü kezelése *************************************************
const vegburger = document.getElementById('vegburger')
const nav = document.getElementById('nav')

// klikkre css osztályokat cserélünk
vegburger.addEventListener('click', function () {
  nav.classList.toggle('menu-active')
  vegburger.classList.toggle('fi-align-justify')
  vegburger.classList.toggle('fi-arrow-left')
})

nav.addEventListener('mouseleave', () => {
  nav.classList.remove('menu-active')
  vegburger.classList.remove('fi-arrow-left')
  vegburger.classList.add('fi-align-justify')
  console.log(this)
})

let products = []
const productsSection = document.getElementById('products')

fetch('https://hur.webmania.cc/products.json')
  .then(response => response.json())
  .then(data => {
    products = data.products
    products.forEach(product => {
      productsSection.innerHTML += `<div>
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <img src="${product.picture}">
        <h3>${product.price} Ft</h3>`
      if (product.stock) {
        productsSection.innerHTML += `<a id="${product.id}" class="addToCart">Kosárba</a>`
})

// kosár kezelése *************************************************
const cart = {}

const addToCart = (event) => {
  // nézzük meg, hogy a kosárba gombot nyomtuk meg (van id), vagy a plusz gombot (nincs id)

  /*let target = event.target.dataset.id
  if (event.target.id) {
    target = event.target.id
  }*/

  // ternary operator
  let target = event.target.id ? event.target.id : event.target.dataset.id

  // ha még nincs benne a kosárban akkor adjuk hozzá 1 darabbal
  if (cart[target] == undefined) {
    cart[target] = 1
  } else {
    // ha már benne van akkor növeljük a darab számot
    cart[target]++
  }
}

const discountMinimumAmount = 30000
const refreshCartItems = () => {
  // jelenlegi cart-items tartalom kiürítése
  cartItems.innerHTML = ''
  // total 0-ázása
  let total = 0
  // lépegessünk végig a cart-on és products tömbből keressük ki a szóban forgó terméket
  for (const id in cart) {
    // és jelenítsük meg a nevét, a cartban lévő darabszámot, és a termék árát
    const currentProduct = products.find(product => product.id == id)
    cartItems.innerHTML += `<li>
      <button data-id="${currentProduct.id}">+</button>
      ${cart[id]} db - ${currentProduct.name} * ${currentProduct.price} Ft/db
      </li>`
    // adjuk hozzá ennek az értékét a teljes összeghez
    total += currentProduct.price * cart[id]
  }
  // a végén jelenítsük meg a teljes vásárlási összeget
  cartItems.innerHTML += `<li>Összesen: ${total.toLocaleString()} Ft</li>`
}

// gyűjtsük ki az addToCart css class-ú elemeket
const addToCartButtons = document.getElementsByClassName('addToCart')
// nézzük meg, hogy hány darab van belőle
const buttonCount = addToCartButtons.length
// lépegessünk végig rajta
for (let i = 0; i < buttonCount; i++) {
  // adjunk hozzájuk egyesével egy click figyelőt
  addToCartButtons[i].addEventListener('click', addToCart)
}

const cartIcon = document.getElementById('cart-icon')
const cartContent = document.getElementById('cart-content')
const cartItems = document.getElementById('cart-items')

// tegyünk rá egy click figyelőt a kosár iconra
cartIcon.addEventListener('click', function () {
  // jelenítsük meg ami a kosárban van
  cartContent.classList.toggle('active')
  refreshCartItems()
})

// tegyük rá a "+" gombokra a click figyelőt a kosárba helyezéssel
// event delegeation
//cartItems.addEventListener('click', addToCart)
cartItems.addEventListener('click', (event) => {
  addToCart(event)
  refreshCartItems()
})