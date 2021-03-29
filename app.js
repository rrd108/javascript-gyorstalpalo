const products = require('./data.js')

console.log('All products', products)

// length
console.log('Tömb méret: ', products.length)

// push
console.log('új eleme beszúrása', products.push({ id: 100, name: 'Alma' }))
console.log(products)

// find
console.log('Find: Eper', products.find(product => product.name == 'Eper'))
console.log('Find: 10 darabos', products.find(product => product.stock == 10))

// findIndex
console.log('FindIndex: Áfonya', products.findIndex(product => product.name == 'Áfonya'))

// filter
console.log('Filter: összes 10 darabos', products.filter(product => product.stock == 10))
console.log('Filter: összes kevesebb mint 100 darabos', products.filter(product => product.stock < 20))

// forEach
products.forEach(product => console.log(product.name))

// map
console.log(products.map(product => ({id: product.id, name: product.name })))

// some
console.log('Some: van 10 darabos?', products.some(product => product.stock == 10))

// sort
console.log('Stock szerint sorba rendezve: ', products.sort((a, b) => a.stock - b.stock))
console.log('Id szerint csökkenő sorba rendezve: ', products.sort((a, b) => b.id - a.id))
console.log('Name szerint csökkenő sorba rendezve: ', products.sort((a, b) => {
  if (a.name < b.name) { return -1 }
  if (a.name > b.name) { return 1 }
  return 0
}))

console.log('Unicode rendezve nevek szerint', products.sort((a, b) => a.name.localeCompare(b.name, 'hu-HU')))

