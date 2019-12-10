import { films } from '../assets/films'

let mainArea = document.querySelector('main')

films.forEach(function(film) {
  let filmDiv = document.createElement('div')
  let title = document.createElement('h1')
  let crawl = document.createElement('p')

  filmDiv.appendChild(title)
  filmDiv.appendChild(crawl)

  title.textContent = films.title
  crawl.innerText = films.opening_crawl

  mainArea.appendChild(filmDiv)
})

