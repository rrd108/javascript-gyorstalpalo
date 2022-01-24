const searchForm = document.getElementById('searchForm')
const search = document.getElementById('search')
const results = document.getElementById('results')
const loader = document.getElementById('loader')
const likesCount = document.getElementById('likesCount')

const likes = JSON.parse(localStorage.getItem('likes')) || []
likesCount.innerText = likes.length

search.focus()

// localStorage.removeItem('likes')
// sessionStorage.clear()

searchForm.addEventListener('submit', e => {
  e.preventDefault()

  const searches = JSON.parse(sessionStorage.getItem('searches')) || []
  const results = searches.find(s => s.searcTerm == search.value)

  loader.style.display = 'block'

  if (results) {
    renderResults(results.data)
  }

  if (!results) {
    fetch(`https://vegavarazs.hu/wp-json/wp/v2/search?search=${search.value}`)
      .then(res => res.json())
      .then(data => {
        searches.push({ searcTerm: search.value, data })
        sessionStorage.setItem('searches', JSON.stringify(searches))
        renderResults(data)
      })
  }
})

const renderResults = data => {
  results.innerHTML = ''
  data.forEach(item => {
    fetch(`https://vegavarazs.hu/wp-json/wp/v2/posts/${item.id}`)
      .then(res => res.json())
      .then(data => {
        if (data.id) {
          // get the image from data.content.rendered
          const imgUrl = data.content.rendered.match(/<img.*?src="(.*?)"/)[1]

          const isLiked = likes.includes(data.id.toString())

          results.innerHTML += `
            <li>
              <h2>${item.title}</h2>
              <div class="recipe">
                <img src="${imgUrl}">
                ${data.excerpt.rendered.substring(0, 150)}...
              </div>
              <div class="actions">
                <a href="${data.link}" class="link">↬</a>
                <a href="#" data-id="${data.id}" class=" like ${
            isLiked ? 'liked' : ''
          }">♥</a>
              </div>
            </li>
          `
        }
      })
  })
  loader.style.display = 'none'
}

results.addEventListener('click', e => {
  e.preventDefault()
  if (e.path[0].dataset.id) {
    const heart = e.path[0]
    heart.classList.add('liked')
    likes.push(e.path[0].dataset.id)

    // TODO duplikációk kiszűrése
    localStorage.setItem('likes', JSON.stringify(likes))
    likesCount.innerText = likes.length
    likesCount.classList.add('pop')
    setTimeout(() => likesCount.classList.remove('pop'), 500)
  }
})
