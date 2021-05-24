const firstnameInput = document.querySelector('#firstname')
const results1 = document.querySelector('#results1')
const results2 = document.querySelector('#results2')

firstnameInput.addEventListener('input', e => {
  // https://hur.webmania.cc/firstnames/xxx.json

  if (firstnameInput.value.length > 2) {
    // 1 változat: fetch
    fetch(`https://hur.webmania.cc/firstnames/${firstnameInput.value}.json`)
      .then(response => response.json())
      .then(data => {
        data.firstnames.forEach(firstname => {
          results1.innerHTML += `<li>${firstname.name}</li>`
        })
      })

    // 2. változat: axios
    axios
      .get(`https://hur.webmania.cc/firstnames/${firstnameInput.value}.json`)
      .then(response => {
        response.data.firstnames.forEach(firstname => {
          results2.innerHTML += `<li>${firstname.name}</li>`
        })
      })
  }
})
