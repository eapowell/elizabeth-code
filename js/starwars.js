import { films } from "/assets/films.js";
import { people } from "/assets/people.js";
import { planets } from "/assets/planets.js";
import { species } from "/assets/species.js";
import { starships } from "/assets/starships.js";
import { vehicles } from "/assets/vehicles.js";

let mainArea = document.querySelector("main");
let nav = document.querySelector("nav");
let home = document.createElement("button");
let filmBtn = document.createElement("button");
let peopleBtn = document.createElement("button");
let planetsBtn = document.createElement("button");
let speciesBtn = document.createElement("button");
let starshipsBtn = document.createElement("button");
let vehiclesBtn = document.createElement("button");








console.log ('Hey, I am JavaScript on your page')

//let mainArea = document.querySelector('main')
let mainHeader = document.querySelector ('header')

function showCharArray(){
  people.forEach(function(person) {
    let personDiv = document.createElement('div')
    let name = document.createElement('h2')
    let gender = document.createElement('h4')
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
}

// populate character pics
function getCharNumber(charURL) {
  let end = charURL.lastIndexOf('/')
  let charID = charURL.substring(end -2, end)
  if(charID.indexOf('/') !== -1 ) {
    return charID.slice(1,2)
  } else {
    return charID
  }
  }

//create button toggle and revert
  var males = people.filter(person => person.gender === "male")

  const maleCharacters = people.filter(person => person.gender === "male")
  const femaleCharacters = people.filter(person => person.gender === "female")
  const otherCharacters = people.filter(person => person.gender != "male" && person.gender != "female")
  
  const allDivs = Array.from(document.querySelectorAll('div'))

  let maleButton = document.createElement('button')
    maleButton.textContent = "Male Characters"
    maleButton.addEventListener('click', () => {
      femaleCharacters.forEach(elt => {
        let matchedDiv = allDivs.filter(element => {
          return element.firstChild.textContent === elt.name
         }) 
       if(matchedDiv.getAttribute("style") === "display: none;") {

        matchedDiv.setAttribute("style", "display: revert;")
       } else {
         matchedDiv.setAttribute("style", "display: none;")
         otherChar()
       }
  
     })
     })

  let femaleButton = document.createElement('button')
    femaleButton.textContent = "Female Characters"
    femaleButton.addEventListener('click', () => {
      maleCharacters.forEach(elt => {
        let matchedDiv = allDivs.filter(element => {
          return element.firstChild.textContent === elt.name
        })
      matchedDiv[0].setAttribute("style", "display: none")
      otherChar()
   
        })
     })
   
     
    let otherChar = (() => {
      maleButton.textContent = "Other Characters"
      otherCharacters.forEach(character => {
        let matchedDiv = allDivs.find(oneDiv => {
          return oneDiv.firstChild.textContent === character.name
        })
          matchedDiv.setAttribute("style", "display: none;")
        })
      })
    
  mainHeader.appendChild(maleButton)
  mainHeader.appendChild(femaleButton)
  mainHeader.appendChild(otherButton)