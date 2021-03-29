const greeting = 'Gauranga mindenkinek!'
const intro = 'Ez a videó a JavaScript gyorstalpaló folytatása. Ebben a részben a stringek bizergálásra szolgáló függvényekbe csapunk bele.'

// Összefűzés
console.log(greeting + ' ' + intro)

// string literal
console.log(`${greeting} ${intro}`)

// Escape
console.log('\'')

// length
console.log(greeting.length)

// indexOf, lastIndexOf
console.log(greeting.indexOf('min'))
console.log(greeting.lastIndexOf('e'))

// includes
console.log(greeting.includes('-'))

// search
console.log(greeting.search(' '))

// < ==
console.log(greeting < intro)

// replace
console.log(greeting.replace('a', 'e'))

// substr
console.log(greeting.substr(4, 5))
console.log(greeting.substr(10))
console.log(greeting.substr(-5, 5))

// toLowerCase, toUpperCase
console.log(greeting.toLowerCase())
console.log(greeting.toUpperCase())

// trim
console.log('    Gauranga    '.trim().length)

// String as array, charAt
console.log(greeting[10])
console.log(greeting.charAt(10))