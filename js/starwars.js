import { films } from '../assets/films.js'
import { people } from '../assets/people.js'



console.log ('Hey, I am JavaScript on your page')

/*
films.forEach(function(film) {

    let filmDiv = document.createElement('div')
    let title = document.createElement('h1')
    let crawl = document.createElement('p')

    filmDiv.appendChild(title)
    filmDiv.appendChild(crawl)

    title.textContent = film.title
    crawl.innerText = film.opening_crawl

    mainArea.appendChild(filmDiv)
  })
*/

let mainArea = document.querySelector('main')
let mainHeader = document.querySelector ('header')

  people.forEach(function(person) {
    let personDiv = document.createElement('div')
    let name = document.createElement('h1')
    let gender = document.createElement('h3')
    let pic = document.createElement('img')

    personDiv.appendChild(name)
    personDiv.appendChild(gender)
    personDiv.appendChild(pic)

    let charNum = getCharNumber(person.url)
    
    name.textContent = person.name
    gender.textContent = person.gender
    pic.src = `https://starwars-visualguide.com/assets/img/characters/${charNum}.jpg`

    mainArea.appendChild(personDiv)
})


function getCharNumber(charURL) {
  let end = charURL.lastIndexOf('/')
  let charID = charURL.substring(end -2, end)
  if(charID.indexOf('/') !== -1 ) {
    return charID.slice(1,2)
  } else {
    return charID
  }
  }

  const maleCharacters = people.filter(person => person.gender === "male")
  console.log(maleCharacters)
  const femaleCharacters = people.filter(person => person.gender === "female")
  console.log(femaleCharacters)
  const allDivs = Array.from(mainArea.querySelectorAll('div'))

 
  
  let maleButton = document.createElement('button')
  maleButton.textContent = "Male Characters"
  maleButton.addEventListener('click', () => {
     maleCharacters.forEach(elt => {
      let matchedDiv = allDivs.filter(element => {
        return element.firstChild.textContent === elt.name
      })
      console.log(matchedDiv)
     matchedDiv[0].setAttribute("style", "display:none") 
     })
     femaleCharacters.forEach(elt => {
      // elt.setAttribute("style", "visibility:hidden")
     })
  
  
  })
  let femaleButton = document.createElement('button')
  femaleButton.textContent = "Female Characters"
  femaleButton.addEventListener('click', () => {
    femaleCharacters.forEach(elt => {
      let matchedDiv = allDivs.filter(element => {
        return element.firstChild.textContent === elt.name
      })
      console.log(matchedDiv)
     matchedDiv[0].setAttribute("style", "display:none") 
     })
     maleCharacters.forEach(elt => {
      // elt.setAttribute("style", "visibility:hidden")
     })
  })

    
  mainHeader.appendChild(femaleButton)
  mainHeader.appendChild(maleButton)























  
//let mainHeader = document.querySelector('h1')

//console.log(mainHeader)

//mainHeader.textContent = "Lizzy is the best!"
//mainHeader.setAttribute("style", "color:red; border: 1px solid blue;");

//let myBody = document.querySelector ('body')

//document.body.setAttribute('style', "background-color: #343434;")



//let myParagraph = document.createElement("p")
//myParagraph.textContent = "I am the best paragraph ever written"

//let myDiv = document.createElement('div')
//myDiv.appendChild(myParagraph)

//myDiv.textContent = "Hey, I am a Div!"

//document.body.appendChild(myDiv)

//let myPic = document.createElement("img")

//myPic.setAttribute("src", "https://images2.minutemediacdn.com/image/upload/c_crop,h_2549,w_4536,x_0,y_237/f_auto,q_auto,w_1100/v1560186367/shape/mentalfloss/istock-687398754.jpg")

//document.body.appendChild(myPic)

