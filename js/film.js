import { films } from '../assets/films.js'

let mainArea = document.querySelector('main')

films.forEach(function(film) {
  let film1 = document.createElement('div')
  let title1 = document.createElement('h1')
  let crawl1 = document.createElement('p')

  film1.appendChild(title1)
  film1.appendChild(crawl1)

  title1.textContent = films[0].title
  crawl1.innerText = films[0].opening_crawl

  mainArea.appendChild(film1)
})

