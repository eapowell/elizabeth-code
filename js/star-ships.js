import { starships } from '../assets/starships.js'
import { films } from '../assets/films.js'


console.log(starships)

let contentArea = document.querySelector('.content')
let mainHeader = document.querySelector('header')

starships.forEach(ship) => {
    let shipDiv = document.createElement('div')
    let shipName = document.createElement('h3')
    let shipPic = document.createElement('img')

    shipName.textContent = ship.name

    let shipNum = shipNum(person.url)

    ship.Pic.src = 'http://starwars-visualguide.com/assets/img/starships/${shipNum}.jpg'

    shipDiv.appendChild(shipName)
    shipDiv.appendChild(shipPic)
    contentArea.appendChild(shipDiv)

    
})

function getShipName(shipURL) {
    let end = shipURL.lastIndexOf('/')
    let shipID = shipURL.substring(end -2, end)
    if(shipID.indexOf('/') !== -1 ) {
        return shipID.slice(1,2)
    } else {
        return shipID
    }
}


films.forEach(function(film) {

    let filmDiv = document.createElement('div')
    let title = document.createElement('h1')
    let crawl = document.createElement('p')

    filmDiv.appendChild(title)
    filmDiv.appendChild(crawl)

    title.textContent = film.title
    crawl.innerText = film.opening_crawl

    mainHeader.appendChild(filmDiv)
  })

  const allDivs = Array.from(contentArea.querySelectorAll('div'))