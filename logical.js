let fruit = 'cherry'

if (fruit == 'cherry') {
  console.log('Fruit is cherry')
}

// falsy values: false, 0, '', null, undefined, NaN
let anything = 1 / 'a'
console.log(anything)
if (anything) {
  console.log('YES!')
}

// truthy: true, {}, [], 5, "0", "false"
anything = 'false'
if (anything) {
  console.log('TRUE!')
}

const v1 = false
const v2 = 'false'
if (v1 == v2) {
  console.log('We are ok')
}

const v3 = 5
const v4 = '5'
if (v3 === v4) {
  console.log('Totally equal')
}

const isActive = false
if (isActive) {
  console.log('We are active')
}
if (!isActive) {
  console.log('Not active')
}

if (isActive) {
  // itt van valami kód
} else {
  // itt is valami kód
  if (anything) {
  } else {
  }
}

if (isActive && v3 > 10 && v1 === false) {
  //
}

if (isActive || v3 > 10) {
  //
}

if ((isActive || v3 > 10) && !v1) {
  //
}

console.log(false && 'hello')

const v6 = isActive ? 'active' : 'inactive'
console.log(v6)

const v7 = isActive ? (v3 > 10 ? 'great' : 'small') : 'something'
console.log(v7)

const v8 = 4
switch (v8) {
  case 1:
    console.log(1)
    break
  case 4:
    console.log(4)
    break
  default:
    console.log('default')
}
